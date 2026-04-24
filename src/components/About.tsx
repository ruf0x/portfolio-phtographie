"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const t = useTranslations("About");

  return (
    <div className="w-full flex flex-col md:flex-row gap-12 md:gap-24 items-center">
      
      {/* Image Side */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2 relative aspect-[3/4] md:aspect-[4/5] bg-white/5 rounded-sm overflow-hidden"
      >
        <Image
          src="https://images.unsplash.com/photo-1605369572399-05d8d64a0f6e?auto=format&fit=crop&q=80&w=1200"
          alt={t("title")}
          fill
          className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
      </motion.div>

      {/* Text Side */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full md:w-1/2 flex flex-col"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[1px] w-12 bg-white/30" />
          <h2 className="font-sans text-sm uppercase tracking-[0.3em] text-[#A1A1AA]">
            {t("title")}
          </h2>
        </div>
        
        <h3 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight mb-8">
          {t("subtitle")}
        </h3>
        
        <div className="space-y-6 text-base md:text-lg text-gray-400 font-light leading-relaxed">
          <p>{t("bio1")}</p>
          <p>{t("bio2")}</p>
        </div>
        
      </motion.div>
    </div>
  );
}
