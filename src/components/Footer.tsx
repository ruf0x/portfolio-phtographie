import { useTranslations } from "next-intl";
import { Camera, Mail, MessageSquare, Video } from "lucide-react";

export default function Footer() {
  const t = useTranslations("Connect");

  return (
    <footer id="connect" className="bg-[#050505] pt-32 pb-12 px-4 md:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="font-serif text-5xl md:text-7xl mb-8">{t("title")}</h2>
            <p className="text-[#A1A1AA] font-light max-w-sm">
              Available for freelance opportunities worldwide. 
              Let's create something extraordinary together.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:gap-12">
            <a href="https://instagram.com/mustapha_benaissa" target="_blank" rel="noreferrer" className="group flex flex-col gap-4">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                <Camera className="w-5 h-5" />
              </div>
              <span className="font-medium tracking-wider uppercase text-sm group-hover:text-white text-[#A1A1AA] transition-colors">{t("instagram")}</span>
            </a>
            
            <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="group flex flex-col gap-4">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                <MessageSquare className="w-5 h-5" />
              </div>
              <span className="font-medium tracking-wider uppercase text-sm group-hover:text-white text-[#A1A1AA] transition-colors">{t("whatsapp")}</span>
            </a>
            
            <a href="mailto:hello@benaissa.com" className="group flex flex-col gap-4">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-medium tracking-wider uppercase text-sm group-hover:text-white text-[#A1A1AA] transition-colors">{t("email")}</span>
            </a>
            
            <a href="https://vimeo.com" target="_blank" rel="noreferrer" className="group flex flex-col gap-4">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                <Video className="w-5 h-5" />
              </div>
              <span className="font-medium tracking-wider uppercase text-sm group-hover:text-white text-[#A1A1AA] transition-colors">{t("linkedin")}</span>
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-[#A1A1AA] uppercase tracking-widest">
          <span>&copy; {new Date().getFullYear()} Mustapha Benaissa</span>
          <span>{t("basedIn")}</span>
        </div>
      </div>
    </footer>
  );
}
