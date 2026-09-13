import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const context = body?.context ?? "";

    if (!context) {
      return NextResponse.json(
        { success: false, message: "Context is required." },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Hello, thank you for your message. We are happy to assist you with this request. ${context} Please let us know if you need any further help. Best regards, Hotel Team.`,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Unable to generate WhatsApp message right now." },
      { status: 500 }
    );
  }
}
