"use server";

export type QuoteState = {
  ok: boolean;
  message: string;
};

type InspectionSubmission = {
  name: string;
  phone: string;
  email: string;
  appointmentDate: string;
  message: string;
  smsConsent: boolean;
  receivedAt: string;
};

export async function requestQuote(
  _prevState: QuoteState,
  formData: FormData,
): Promise<QuoteState> {
  const name = String(formData.get("name") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const appointmentDate = String(formData.get("appointmentDate") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const smsConsent = formData.get("smsConsent") === "on";

  if (!name || !phone || !message) {
    return {
      ok: false,
      message: "Please add your name, phone number, and a brief description.",
    };
  }

  const submission: InspectionSubmission = {
    name,
    phone,
    email,
    appointmentDate,
    message,
    smsConsent,
    receivedAt: new Date().toISOString(),
  };

  try {
    await sendInspectionEmail(submission);
  } catch (error) {
    console.error("Gmail submission failed", error);

    return {
      ok: false,
      message:
        "We could not send your request right now. Please call (818) 720-7120.",
    };
  }

  return {
    ok: true,
    message:
      "Thanks. Your inspection request was sent, and we will call you shortly.",
  };
}

async function sendInspectionEmail(submission: InspectionSubmission) {
  const accessToken = await getGmailAccessToken();
  const from = process.env.GMAIL_FROM_EMAIL;
  const to = parseEmailList(process.env.GMAIL_TO_EMAIL || from || "");

  if (!from || to.length === 0) {
    throw new Error("Missing GMAIL_FROM_EMAIL or GMAIL_TO_EMAIL");
  }

  const subject = `New mold inspection request from ${submission.name}`;
  const replyTo = submission.email || from;
  const fromName = submission.email
    ? `${submission.name} via John Mold Website`
    : "John Mold Website";
  const body = [
    "New contact form submission",
    "",
    `Name: ${submission.name}`,
    `Phone: ${submission.phone}`,
    `Email: ${submission.email || "Not provided"}`,
    `Date of Appointment: ${submission.appointmentDate || "Not provided"}`,
    `SMS Consent: ${submission.smsConsent ? "Yes" : "No"}`,
    `Received At: ${submission.receivedAt}`,
    "",
    "Message:",
    submission.message,
  ].join("\n");

  const rawMessage = [
    `From: ${formatMailbox(from, fromName)}`,
    `To: ${to.join(", ")}`,
    `Reply-To: ${replyTo}`,
    `Subject: ${encodeEmailHeader(subject)}`,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=UTF-8",
    "",
    body,
  ].join("\r\n");

  const response = await fetch(
    "https://gmail.googleapis.com/gmail/v1/users/me/messages/send",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        raw: toBase64Url(rawMessage),
      }),
    },
  );

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Gmail API error ${response.status}: ${details}`);
  }
}

async function getGmailAccessToken() {
  if (process.env.GMAIL_ACCESS_TOKEN) {
    return process.env.GMAIL_ACCESS_TOKEN;
  }

  const clientId = process.env.GMAIL_CLIENT_ID;
  const clientSecret = process.env.GMAIL_CLIENT_SECRET;
  const refreshToken = process.env.GMAIL_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error(
      "Missing Gmail credentials. Provide GMAIL_ACCESS_TOKEN or GMAIL_CLIENT_ID, GMAIL_CLIENT_SECRET, and GMAIL_REFRESH_TOKEN.",
    );
  }

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: "refresh_token",
    }),
  });

  const token = (await response.json()) as {
    access_token?: string;
    error?: string;
    error_description?: string;
  };

  if (!response.ok || !token.access_token) {
    throw new Error(
      `Gmail token error: ${token.error_description || token.error || response.statusText}`,
    );
  }

  return token.access_token;
}

function toBase64Url(value: string) {
  return Buffer.from(value, "utf8")
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function encodeEmailHeader(value: string) {
  return `=?UTF-8?B?${Buffer.from(value, "utf8").toString("base64")}?=`;
}

function formatMailbox(email: string, name: string) {
  return `${encodeEmailHeader(name)} <${email}>`;
}

function parseEmailList(value: string) {
  return value
    .split(/[;,]/)
    .map((email) => email.trim())
    .filter(Boolean);
}
