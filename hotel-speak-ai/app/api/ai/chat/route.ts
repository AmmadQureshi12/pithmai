import { NextRequest, NextResponse } from "next/server";

type ChatMessage = { role: "user" | "model"; text: string };
type Provider = "Gemini" | "Groq" | "OpenRouter";

const SYSTEM_PROMPT = "You are HotelSpeak AI, a concise and friendly hospitality English coach. Only answer questions related to hospitality and hotel management, including guest communication, workplace English, grammar or vocabulary for hotel work, hotel departments, front office, food and beverage, housekeeping, food production, guest service, hotel operations, roleplay, interviews, and professional communication. If a user asks about a different field or an unrelated topic, do not answer that question. Reply exactly: Sorry, I can only answer hospitality-related questions. Keep allowed answers practical and under 120 words unless the user asks for detail.";
const REQUEST_TIMEOUT_MS = 15_000;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as { message?: unknown; history?: unknown };
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const history = Array.isArray(body.history) ? body.history.filter(isChatMessage).slice(-10) : [];

    if (!message) {
      return NextResponse.json({ success: false, message: "A message is required." }, { status: 400 });
    }

    const messages = [...history, { role: "user" as const, text: message }];
    const providers: Array<{ name: Provider; apiKey: string | undefined; request: () => Promise<string | null> }> = [
      { name: "Gemini", apiKey: process.env.GEMINI_API_KEY, request: () => requestGemini(messages) },
      { name: "Groq", apiKey: process.env.GROQ_API_KEY, request: () => requestGroq(messages) },
      { name: "OpenRouter", apiKey: process.env.OPENROUTER_API_KEY, request: () => requestOpenRouter(messages) },
    ];

    let configuredProvider = false;
    for (const provider of providers) {
      if (!provider.apiKey) continue;
      configuredProvider = true;

      try {
        const reply = await provider.request();
        if (reply) return NextResponse.json({ success: true, reply });
        console.error(`${provider.name} chat request returned no usable answer`);
      } catch (error) {
        console.error(`${provider.name} chat request failed`, getErrorMessage(error));
      }
    }

    return NextResponse.json({
      success: false,
      message: configuredProvider
        ? "The AI coach is temporarily unavailable. Please try again in a moment."
        : "No AI provider is configured. Add GEMINI_API_KEY, GROQ_API_KEY, or OPENROUTER_API_KEY to the server environment.",
    }, { status: configuredProvider ? 502 : 503 });
  } catch (error) {
    console.error("AI chat failed", error);
    return NextResponse.json({ success: false, message: "Unable to connect to the AI coach right now." }, { status: 500 });
  }
}

function isChatMessage(value: unknown): value is ChatMessage {
  if (!value || typeof value !== "object") return false;
  const item = value as Record<string, unknown>;
  return (item.role === "user" || item.role === "model") && typeof item.text === "string";
}

async function requestGemini(messages: ChatMessage[]) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;

  const response = await fetchWithTimeout(
    `https://generativelanguage.googleapis.com/v1beta/models/${process.env.GEMINI_MODEL ?? "gemini-3.6-flash"}:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents: messages.map((item) => ({ role: item.role, parts: [{ text: item.text }] })),
      }),
    },
  );

  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const data = await response.json() as { candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }> };
  return data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ?? null;
}

async function requestGroq(messages: ChatMessage[]) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) return null;

  const response = await fetchWithTimeout("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({
      model: process.env.GROQ_MODEL ?? "llama-3.3-70b-versatile",
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages.map((item) => ({
        role: item.role === "model" ? "assistant" : "user",
        content: item.text,
      }))],
    }),
  });

  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const data = await response.json() as { choices?: Array<{ message?: { content?: string } }> };
  return data.choices?.[0]?.message?.content?.trim() ?? null;
}

async function requestOpenRouter(messages: ChatMessage[]) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) return null;

  const response = await fetchWithTimeout("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: process.env.OPENROUTER_MODEL ?? "openai/gpt-4o-mini",
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages.map((item) => ({
        role: item.role === "model" ? "assistant" : "user",
        content: item.text,
      }))],
    }),
  });

  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const data = await response.json() as { choices?: Array<{ message?: { content?: string } }> };
  return data.choices?.[0]?.message?.content?.trim() ?? null;
}

async function fetchWithTimeout(input: RequestInfo | URL, init: RequestInit) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    return await fetch(input, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
}

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : "Unknown error";
}
