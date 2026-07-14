import Image from "next/image";

type PageHeroProps = {
  src: string;
  alt: string;
  size?: "banner" | "hero";
  children?: React.ReactNode;
};

const sizeClasses = {
  banner: "h-56 sm:h-72 md:h-96",
  hero: "h-[70vh] min-h-[420px]",
};

export default function PageHero({ src, alt, size = "banner", children }: PageHeroProps) {
  return (
    <div className={`relative w-full overflow-hidden ${sizeClasses[size]}`}>
      <Image src={src} alt={alt} fill priority sizes="100vw" className="object-cover" />
      {children && (
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-charcoal-ink/80 via-charcoal-ink/20 to-transparent">
          <div className="mx-auto w-full max-w-8xl px-4 pb-10 text-soft-ivory md:px-8 md:pb-16">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
