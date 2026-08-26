import { NextRequest } from "next/server";
import { insertEnquiry } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, reason } = body;

    // Validate fields exist
    if (!name || !phone || !reason) {
      return Response.json(
        { error: "All fields are required (name, phone, reason)" },
        { status: 400 }
      );
    }

    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const trimmedReason = reason.trim();

    // Validate fields are not empty strings after trim
    if (!trimmedName || !trimmedPhone || !trimmedReason) {
      return Response.json(
        { error: "Fields cannot be empty or contain only whitespace" },
        { status: 400 }
      );
    }

    // Phone validation: basic format validation (digits, optional +, length 7-15)
    const cleanPhone = trimmedPhone.replace(/[\s()-]/g, "");
    const phoneRegex = /^\+?[0-9]{7,15}$/;
    if (!phoneRegex.test(cleanPhone)) {
      return Response.json(
        { error: "Invalid phone number format" },
        { status: 400 }
      );
    }

    // Insert WhatsApp enquiry log record in DB
    const record = await insertEnquiry({
      name: trimmedName,
      phone: trimmedPhone,
      reason: trimmedReason,
      channel: "whatsapp"
    });

    return Response.json({ success: true, record });
  } catch (error: any) {
    console.error("Error in whatsapp-enquiry API:", error);
    return Response.json(
      { error: "Internal server error: " + error.message },
      { status: 500 }
    );
  }
}
