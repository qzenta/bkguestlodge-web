type IconName = "wifi" | "shield" | "parking" | "power";

const icons: Record<IconName, React.ReactNode> = {
  wifi: (
    <>
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <line x1="12" y1="20" x2="12.01" y2="20" />
    </>
  ),
  shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  parking: (
    <>
      <path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11" />
      <rect x="3" y="11" width="18" height="6" rx="2" />
      <circle cx="7.5" cy="17" r="1.5" />
      <circle cx="16.5" cy="17" r="1.5" />
    </>
  ),
  power: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
};

export type HeroFeature = {
  icon: IconName;
  label: string;
  caption: string;
};

export default function HeroFeatureRow({ features }: { features: HeroFeature[] }) {
  return (
    <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-soft-ivory/20 pt-6 sm:grid-cols-4">
      {features.map((feature) => (
        <div key={feature.label} className="flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ochre-clay text-soft-ivory">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              {icons[feature.icon]}
            </svg>
          </span>
          <div>
            <p className="font-utility text-xs font-bold uppercase tracking-wide text-soft-ivory">
              {feature.label}
            </p>
            <p className="mt-0.5 font-body text-xs text-soft-ivory/70">{feature.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
