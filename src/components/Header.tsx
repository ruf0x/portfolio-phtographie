"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import LanguageToggle from "./LanguageToggle";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";

export default function Header() {
  const t = useTranslations("Header");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#050505]/80 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link href="/" className="font-serif text-xl md:text-2xl tracking-wide">
          Benaissa.
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wider text-[#A1A1AA]">
          <Link href="#about" className="hover:text-white transition-colors">{t("about")}</Link>
          <Link href="#showreel" className="hover:text-white transition-colors">{t("showreel")}</Link>
          <Link href="#work" className="hover:text-white transition-colors">{t("work")}</Link>
          <Link href="#connect" className="hover:text-white transition-colors">{t("connect")}</Link>
          <LanguageToggle />
        </nav>

        {/* Mobile Nav would go here if needed, keeping simple for now */}
        <div className="md:hidden">
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
