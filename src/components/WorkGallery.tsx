"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import projectsData from "@/data/projects.json";
import ProjectCard from "./ProjectCard";
import BenaissaModal from "./BenaissaModal";

export default function WorkGallery() {
  const t = useTranslations("WorkGallery");
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const categories = [
    { id: "All", label: t("all") },
    { id: "Cinematography", label: t("cinematography") },
    { id: "Photography", label: t("photography") },
    { id: "Commercial", label: t("commercial") },
    { id: "Color Grading", label: t("color_grading") }
  ];

  const filteredProjects = projectsData.filter((project) => 
    filter === "All" ? true : project.category === filter
  );

  // Simple column distribution for masonry effect
  const columns = {
    col1: filteredProjects.filter((_, i) => i % 2 === 0),
    col2: filteredProjects.filter((_, i) => i % 2 === 1),
  };

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-4 md:gap-8 mb-16 items-center justify-center md:justify-start">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`text-sm tracking-widest uppercase transition-all duration-300 ${
              filter === cat.id 
                ? "text-white font-medium border-b border-white pb-1" 
                : "text-[#A1A1AA] hover:text-white"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-start">
        <div className="flex flex-col gap-4 md:gap-8">
          <AnimatePresence mode="popLayout">
            {columns.col1.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={() => setSelectedProject(project)} 
              />
            ))}
          </AnimatePresence>
        </div>
        <div className="flex flex-col gap-4 md:gap-8 mt-0 md:mt-24">
          <AnimatePresence mode="popLayout">
            {columns.col2.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={() => setSelectedProject(project)} 
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <BenaissaModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
}
