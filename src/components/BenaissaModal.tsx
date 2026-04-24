"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

interface ProjectMedia {
  type: string;
  url?: string;
  beforeImage?: string;
  afterImage?: string;
}

interface Project {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  description: string;
  role: string;
  aspectRatio: string;
  media: ProjectMedia[];
}

export default function BenaissaModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const t = useTranslations("Modal");

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-[#050505]/98 backdrop-blur-2xl h-[100dvh] w-screen flex flex-col overflow-hidden"
      >
        <div className="w-full flex justify-end p-4 md:p-6 shrink-0">
          <button 
            onClick={onClose}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
          >
            <X className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex-1 flex flex-col justify-start min-h-0 pb-6">
          
          <div className="mb-6 md:mb-8 shrink-0">
            <h2 className="font-serif text-3xl md:text-5xl mb-2 md:mb-4">{project.title}</h2>
            <div className="flex flex-wrap gap-2 md:gap-4 text-xs md:text-sm font-medium uppercase tracking-widest text-[#A1A1AA]">
              <span>{t("role")}: {project.role}</span>
              <span>•</span>
              <span>{project.category}</span>
            </div>
            <p className="mt-3 md:mt-4 text-sm md:text-base font-light text-gray-300 max-w-2xl leading-relaxed line-clamp-2 md:line-clamp-none">
              {project.description}
            </p>
          </div>

          <div className="flex-1 min-h-0 flex flex-nowrap gap-6 md:gap-12 w-full overflow-x-auto snap-x snap-mandatory items-center" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {project.media.map((item, idx) => {
              if (item.type === "video" && item.url) {
                return (
                  <div key={idx} className="shrink-0 snap-center w-full md:w-[85%] h-full flex items-center justify-center rounded-sm overflow-hidden bg-black/50 ring-1 ring-white/10 relative">
                    <video
                      controls
                      autoPlay={idx === 0}
                      className="max-w-full max-h-full object-contain"
                    >
                      <source src={item.url} type="video/mp4" />
                    </video>
                  </div>
                );
              } else if (item.type === "color_grading" && item.beforeImage && item.afterImage) {
                return (
                  <div key={idx} className="shrink-0 snap-center w-full md:w-[85%] border border-white/10 rounded-sm overflow-hidden relative">
                    <BeforeAfterSlider beforeImage={item.beforeImage} afterImage={item.afterImage} />
                  </div>
                );
              } else if (item.type === "photo" && item.url) {
                return (
                  <div key={idx} className="shrink-0 snap-center w-full md:w-[85%] h-full relative bg-white/5 rounded-sm overflow-hidden flex items-center justify-center">
                    <Image
                      src={item.url}
                      alt={`${project.title} - Media ${idx + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 85vw"
                    />
                  </div>
                );
              }
              return null;
            })}
          </div>
          
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
