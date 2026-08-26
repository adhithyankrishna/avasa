interface NotificationPayload {
  name: string;
  phone: string;
  date: string;
  time: string;
  reason: string;
}

export async function sendNotifications(payload: NotificationPayload) {
  const channels = [
    sendEmailNotification,
    sendWhatsAppNotificationStub // placeholder for WhatsApp Business API
  ];

  const results = await Promise.allSettled(
    channels.map(channel => channel(payload))
  );

  // Log results or handle errors
  results.forEach((res, index) => {
    if (res.status === "rejected") {
      console.error(`Notification channel ${index} failed:`, res.reason);
    }
  });
}

async function sendEmailNotification(payload: NotificationPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.EMAIL_TO || "team@avasaexperiences.com";
  const fromEmail = process.env.EMAIL_FROM || "onboarding@resend.dev"; // Resend sandbox default

  const subject = `New callback request from ${payload.name}`;
  const html = `
    <h2>New Callback Request</h2>
    <p><strong>Name:</strong> ${payload.name}</p>
    <p><strong>Phone:</strong> ${payload.phone}</p>
    <p><strong>Requested Date:</strong> ${payload.date}</p>
    <p><strong>Requested Time:</strong> ${payload.time}</p>
    <p><strong>Reason:</strong> ${payload.reason}</p>
  `;

  if (!apiKey) {
    console.log("--- EMAIL NOTIFICATION (MOCK) ---");
    console.log(`To: ${toEmail}`);
    console.log(`Subject: ${subject}`);
    console.log(html);
    console.log("----------------------------------");
    return { success: true, mock: true };
  }

  // Fetch API call to Resend
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: `AVASA Nature <${fromEmail}>`,
      to: toEmail,
      subject,
      html
    })
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Resend API failed: ${errorText}`);
  }

  return { success: true };
}

async function sendWhatsAppNotificationStub(payload: NotificationPayload) {
  // TODO: Implement WhatsApp Business API integration here.
  // This will require a provider account (Twilio, Meta Cloud API, or Gupshup)
  // and approval for a template message like:
  // "New callback request from {{1}}. Phone: {{2}}, Date: {{3}}, Time: {{4}}."
  console.log(`[WhatsApp Notification Stub] A callback request notification would be sent for ${payload.name}`);
  return { success: true, stub: true };
}
