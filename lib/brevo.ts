import type { Division } from "./content/types";

interface ContactSubmission {
  name: string;
  email: string;
  phone: string;
  division: Division | "general";
  message: string;
}

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

export async function sendContactEmail(submission: ContactSubmission) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    throw new Error("BREVO_API_KEY is not configured");
  }

  const notifyRes = await fetch(BREVO_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify({
      sender: { name: "BK Guest Lodge Website", email: "info@bkguestlodge.co.za" },
      to: [{ email: "info@bkguestlodge.co.za" }],
      subject: `New enquiry (${submission.division}) — ${submission.name}`,
      htmlContent: `
        <p><strong>Name:</strong> ${submission.name}</p>
        <p><strong>Email:</strong> ${submission.email}</p>
        <p><strong>Phone:</strong> ${submission.phone}</p>
        <p><strong>Division:</strong> ${submission.division}</p>
        <p><strong>Message:</strong> ${submission.message}</p>
      `,
    }),
  });

  if (!notifyRes.ok) {
    throw new Error(`Brevo notification email failed: ${notifyRes.status}`);
  }

  const confirmRes = await fetch(BREVO_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify({
      sender: { name: "BK Guest Lodge", email: "info@bkguestlodge.co.za" },
      to: [{ email: submission.email, name: submission.name }],
      subject: "We've received your enquiry — BK Guest Lodge",
      htmlContent: `<p>Hi ${submission.name},</p><p>Thanks for reaching out to BK Guest Lodge. We've received your enquiry and will be in touch shortly.</p>`,
    }),
  });

  if (!confirmRes.ok) {
    throw new Error(`Brevo confirmation email failed: ${confirmRes.status}`);
  }
}
