import { PENDING_CONTENT } from "@/lib/content/types";

export function isPending(value: string): boolean {
  return value.startsWith(PENDING_CONTENT);
}

export default function PendingNote({ text }: { text?: string }) {
  return (
    <span className="inline-block rounded border border-dashed border-ochre-clay bg-ochre-clay/10 px-2 py-0.5 font-utility text-xs font-semibold uppercase tracking-wide text-ochre-clay">
      {text ?? PENDING_CONTENT}
    </span>
  );
}
