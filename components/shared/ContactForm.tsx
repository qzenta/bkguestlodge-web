"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import type { Division } from "@/lib/content/types";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const initialDivision = searchParams.get("division");

  const [division, setDivision] = useState<Division | "general">(
    initialDivision === "guest-lodge" || initialDivision === "student-accommodation"
      ? initialDivision
      : "general"
  );
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          division,
          message: formData.get("message"),
        }),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
      <label className="block font-utility text-sm text-charcoal-ink">
        Name
        <input
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded border border-charcoal-ink/20 bg-soft-ivory px-3 py-2 font-body text-sm focus:border-slate-teal focus:outline-none focus:ring-1 focus:ring-slate-teal"
        />
      </label>

      <label className="block font-utility text-sm text-charcoal-ink">
        Email
        <input
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded border border-charcoal-ink/20 bg-soft-ivory px-3 py-2 font-body text-sm focus:border-slate-teal focus:outline-none focus:ring-1 focus:ring-slate-teal"
        />
      </label>

      <label className="block font-utility text-sm text-charcoal-ink">
        Phone
        <input
          name="phone"
          type="tel"
          required
          className="mt-1 w-full rounded border border-charcoal-ink/20 bg-soft-ivory px-3 py-2 font-body text-sm focus:border-slate-teal focus:outline-none focus:ring-1 focus:ring-slate-teal"
        />
      </label>

      <label className="block font-utility text-sm text-charcoal-ink">
        Division
        <select
          name="division"
          value={division}
          onChange={(e) => setDivision(e.target.value as Division | "general")}
          className="mt-1 w-full rounded border border-charcoal-ink/20 bg-soft-ivory px-3 py-2 font-body text-sm focus:border-slate-teal focus:outline-none focus:ring-1 focus:ring-slate-teal"
        >
          <option value="general">General</option>
          <option value="guest-lodge">Guest Lodge</option>
          <option value="student-accommodation">Student Accommodation</option>
        </select>
      </label>

      <label className="block font-utility text-sm text-charcoal-ink">
        Message
        <textarea
          name="message"
          required
          rows={4}
          className="mt-1 w-full rounded border border-charcoal-ink/20 bg-soft-ivory px-3 py-2 font-body text-sm focus:border-slate-teal focus:outline-none focus:ring-1 focus:ring-slate-teal"
        />
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-slate-teal px-6 py-3 font-utility text-sm text-soft-ivory hover:opacity-90 disabled:opacity-50"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>

      {status === "success" && (
        <p className="font-body text-sm text-slate-teal">Thanks — we&rsquo;ve received your message and will be in touch.</p>
      )}
      {status === "error" && (
        <p className="font-body text-sm text-ochre-clay">Something went wrong — please try WhatsApp instead.</p>
      )}
    </form>
  );
}
