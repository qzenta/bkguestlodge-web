import TrackedLink from "@/components/shared/TrackedLink";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

export default function WhatsAppCTA() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <TrackedLink
      href={href}
      eventAction="click_whatsapp"
      eventCategory="conversion"
      eventLabel="floating_button"
      external
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-20 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-utility text-sm text-white shadow-lg hover:opacity-90 md:bottom-5"
    >
      WhatsApp
    </TrackedLink>
  );
}
