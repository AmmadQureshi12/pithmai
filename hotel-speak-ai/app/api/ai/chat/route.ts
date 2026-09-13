import { NextRequest, NextResponse } from "next/server";

type ChatMessage = { role: "user" | "model"; text: string };

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as { message?: unknown; history?: unknown };
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const history = Array.isArray(body.history) ? body.history.filter(isChatMessage).slice(-10) : [];

    if (!message) {
      return NextResponse.json({ success: false, message: "A message is required." }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({
        success: false,
        message: "Gemini is not configured. Add GEMINI_API_KEY to the server environment.",
      }, { status: 503 });
    }

    const contents = [...history, { role: "user" as const, text: message }].map((item) => ({
      role: item.role,
      parts: [{ text: item.text }],
    }));

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: "You are HotelSpeak AI, a concise and friendly hospitality English coach. Help hotel-management students with guest communication, workplace English, grammar, vocabulary, roleplay, and professional tone. Keep answers practical and under 120 words unless the user asks for detail." }],
          },
          contents,
        }),
      },
    );

    if (!response.ok) {
      console.error("Gemini chat request failed", response.status);
      return NextResponse.json({ success: false, message: "Gemini could not answer right now. Please try again." }, { status: 502 });
    }

    const data = await response.json();
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
    if (!reply) {
      return NextResponse.json({ success: false, message: "Gemini returned an empty answer." }, { status: 502 });
    }

    return NextResponse.json({ success: true, reply });
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
