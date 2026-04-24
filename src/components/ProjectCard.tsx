"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

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

export default function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  // Parse aspect ratio string like "16/9" to use in Tailwind style or padding
  const [w, h] = project.aspectRatio.split("/").map(Number);
  const paddingBottom = `${(h / w) * 100}%`;

  const hasVideo = project.media.some(m => m.type === "video");
  const firstVideo = project.media.find(m => m.type === "video")?.url;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative w-full overflow-hidden cursor-pointer group rounded-sm bg-white/5"
      style={{ paddingBottom }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Base Image */}
      <Image
        src={project.thumbnail}
        alt={project.title}
        fill
        className={`object-cover transition-transform duration-700 ease-in-out ${
          isHovered && !hasVideo ? "scale-105" : "scale-100"
        }`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Video Hover Preview */}
      {firstVideo && isHovered && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-10"
        >
          <source src={firstVideo} type="video/mp4" />
        </video>
      )}

      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20 flex flex-col justify-end p-6 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        {hasVideo && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white">
            <Play className="w-5 h-5 ml-1" />
          </div>
        )}
        <h3 className="font-serif text-2xl text-white mb-1">{project.title}</h3>
        <p className="font-sans text-xs uppercase tracking-widest text-[#A1A1AA]">
          {project.category}
        </p>
      </div>
    </motion.div>
  );
}
