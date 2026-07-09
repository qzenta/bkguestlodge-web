import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/brevo";
import type { Division } from "@/lib/content/types";

interface ContactBody {
  name: string;
  email: string;
  phone: string;
  division: Division | "general";
  message: string;
}

function isValidBody(body: unknown): body is ContactBody {
  if (typeof body !== "object" || body === null) return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.name === "string" &&
    b.name.trim().length > 0 &&
    typeof b.email === "string" &&
    b.email.trim().length > 0 &&
    typeof b.phone === "string" &&
    b.phone.trim().length > 0 &&
    typeof b.message === "string" &&
    b.message.trim().length > 0 &&
    (b.division === "general" || b.division === "guest-lodge" || b.division === "student-accommodation")
  );
}

export async function POST(request: Request) {
  const body: unknown = await request.json();

  if (!isValidBody(body)) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  try {
    await sendContactEmail(body);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form submission failed", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 502 });
  }
}
