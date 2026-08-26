import { NextRequest } from "next/server";
import { insertCallbackRequest } from "@/lib/db";
import { sendNotifications } from "@/lib/notifications";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, date, time, reason } = body;

    // Validate fields exist
    if (!name || !phone || !date || !time || !reason) {
      return Response.json(
        { error: "All fields are required (name, phone, date, time, reason)" },
        { status: 400 }
      );
    }

    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const trimmedDate = date.trim();
    const trimmedTime = time.trim();
    const trimmedReason = reason.trim();

    // Validate fields are not empty strings after trim
    if (!trimmedName || !trimmedPhone || !trimmedDate || !trimmedTime || !trimmedReason) {
      return Response.json(
        { error: "Fields cannot be empty or contain only whitespace" },
        { status: 400 }
      );
    }

    // Phone validation: basic format validation (digits, optional +, length 7-15)
    // Strip space, dashes, parentheses first for robust sanity check
    const cleanPhone = trimmedPhone.replace(/[\s()-]/g, "");
    const phoneRegex = /^\+?[0-9]{7,15}$/;
    if (!phoneRegex.test(cleanPhone)) {
      return Response.json(
        { error: "Invalid phone number format. Please check digits and length." },
        { status: 400 }
      );
    }

    // Date validation: date cannot be in the past
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const inputDate = new Date(trimmedDate);
    inputDate.setHours(0, 0, 0, 0);

    if (isNaN(inputDate.getTime())) {
      return Response.json(
        { error: "Invalid date format" },
        { status: 400 }
      );
    }

    if (inputDate < today) {
      return Response.json(
        { error: "Callback date cannot be in the past" },
        { status: 400 }
      );
    }

    // Insert record in DB
    const record = await insertCallbackRequest({
      name: trimmedName,
      phone: trimmedPhone,
      date: trimmedDate,
      time: trimmedTime,
      reason: trimmedReason
    });

    // Send email & WhatsApp notifications
    await sendNotifications({
      name: trimmedName,
      phone: trimmedPhone,
      date: trimmedDate,
      time: trimmedTime,
      reason: trimmedReason
    });

    return Response.json({ success: true, record });
  } catch (error: any) {
    console.error("Error in callback-request API:", error);
    return Response.json(
      { error: "Internal server error: " + error.message },
      { status: 500 }
    );
  }
}
