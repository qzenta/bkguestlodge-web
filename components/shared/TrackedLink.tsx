"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

type TrackedLinkProps = {
  href: string;
  eventAction: string;
  eventCategory: string;
  eventLabel?: string;
  external?: boolean;
  className?: string;
  "aria-label"?: string;
  children: React.ReactNode;
};

export default function TrackedLink({
  href,
  eventAction,
  eventCategory,
  eventLabel,
  external,
  className,
  "aria-label": ariaLabel,
  children,
}: TrackedLinkProps) {
  const handleClick = () => {
    trackEvent({ action: eventAction, category: eventCategory, label: eventLabel });
  };

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label={ariaLabel}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} aria-label={ariaLabel} onClick={handleClick}>
      {children}
    </Link>
  );
}
