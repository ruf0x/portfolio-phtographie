import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-[#050505] after:to-transparent after:opacity-80">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight mb-4 text-white">
          {t("title")}
        </h1>
        <p className="font-sans text-[#A1A1AA] text-lg md:text-xl tracking-widest uppercase font-light">
          {t("subtitle")}
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 z-10 flex flex-col items-center animate-pulse opacity-50">
        <span className="text-xs uppercase tracking-widest mb-2 text-[#A1A1AA]">{t("scroll")}</span>
        <div className="w-[1px] h-12 bg-white/50"></div>
      </div>
    </section>
  );
}
