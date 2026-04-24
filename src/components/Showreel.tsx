import { useTranslations } from "next-intl";
import { Volume2 } from "lucide-react";

export default function Showreel() {
  const t = useTranslations("Showreel");

  return (
    <section id="showreel" className="w-full bg-[#050505] py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <h2 className="font-serif text-4xl md:text-5xl">{t("title")}</h2>
          <div className="flex items-center gap-2 text-[#A1A1AA] text-sm uppercase tracking-widest">
            <Volume2 className="w-4 h-4" />
            <span>{t("soundOn")}</span>
          </div>
        </div>
        
        <div className="relative aspect-video w-full rounded-sm overflow-hidden bg-white/5 group">
          <video
            controls
            playsInline
            poster="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1600"
            className="w-full h-full object-cover"
          >
            <source src="https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
