import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const prompt = body?.prompt ?? "";
    const answer = body?.answer ?? "";

    if (!prompt || !answer) {
      return NextResponse.json(
        {
          success: false,
          message: "Prompt and answer are required.",
        },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({
        success: true,
        score: 88,
        verdict: "Strong hospitality tone",
        corrections: [
          "Use a warmer greeting for guest communication.",
          "Add a polite closing sentence for better professionalism.",
        ],
        improvedAnswer:
          "Good afternoon, thank you for your message. I would be happy to assist you with this request and provide a quick solution for you.",
      });
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are an AI hospitality English coach. Evaluate this hotel scenario and student answer. Return JSON with keys: score, verdict, corrections, improvedAnswer. Scenario: ${prompt}. Student answer: ${answer}. Focus on grammar, professionalism, and hotel English style.`,
                },
              ],
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Gemini request failed");
    }

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";

    const parsed = JSON.parse(text.replace(/```json|```/g, "").trim());

    return NextResponse.json({ success: true, ...parsed });
  } catch (error) {
    console.error("AI feedback failed", error);

    return NextResponse.json({
      success: true,
      score: 80,
      verdict: "Helpful response generated with a fallback coach message.",
      corrections: [
        "Keep the reply polite and concise.",
        "Use a more professional hotel greeting and closing phrase.",
      ],
      improvedAnswer:
        "Thank you for reaching out. I would be happy to assist you and ensure a prompt and professional response to your request.",
    });
  }
}
