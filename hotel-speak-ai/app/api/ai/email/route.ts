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
      email: `Subject: Hotel Service Follow-up\n\nDear Guest,\n\nThank you for contacting our hotel. We appreciate the opportunity to assist you with your request. Based on the details provided, we are pleased to help resolve this matter promptly and professionally.\n\n${context}\n\nWe value your feedback and look forward to serving you again.\n\nKind regards,\nHotel Management Team`,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Unable to generate email right now." },
      { status: 500 }
    );
  }
}
