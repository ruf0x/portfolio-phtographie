"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { motion } from "framer-motion";

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const nextLocale = locale === "en" ? "fr" : "en";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button
      onClick={toggleLocale}
      className="relative flex items-center gap-2 text-sm font-medium tracking-widest text-[#A1A1AA] hover:text-white transition-colors"
    >
      <span className={locale === "en" ? "text-white" : ""}>EN</span>
      <span className="text-[#A1A1AA]">|</span>
      <span className={locale === "fr" ? "text-white" : ""}>FR</span>
    </button>
  );
}
