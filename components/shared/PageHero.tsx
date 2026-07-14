import Image from "next/image";

export default function PageHero({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-56 w-full overflow-hidden sm:h-72 md:h-96">
      <Image src={src} alt={alt} fill priority sizes="100vw" className="object-cover" />
    </div>
  );
}
