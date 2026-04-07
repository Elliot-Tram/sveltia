"use client";

import { useEffect, useState } from "react";
import {
  Pill,
  Syringe,
  FlaskConical,
  Droplet,
  BookOpen,
  Atom,
  Sparkles,
} from "lucide-react";

const heroCardData = [
  {
    icon: Pill,
    label: "Ozempic",
    subtitle: "Sémaglutide",
    stat: "Injection hebdomadaire",
    gridArea: "1 / 1 / 2 / 2",
    borderColor: "border-blue-400/30",
    hoverBorder: "hover:border-blue-400/60",
    glowColor: "hover:shadow-[0_0_20px_rgba(96,165,250,0.15)]",
  },
  {
    icon: Syringe,
    label: "Wegovy",
    subtitle: "Sémaglutide haute dose",
    stat: "Perte de poids",
    gridArea: "1 / 2 / 2 / 3",
    borderColor: "border-teal-400/30",
    hoverBorder: "hover:border-teal-400/60",
    glowColor: "hover:shadow-[0_0_20px_rgba(45,212,191,0.15)]",
  },
  {
    icon: FlaskConical,
    label: "Mounjaro",
    subtitle: "Tirzépatide",
    stat: "Double action GIP/GLP-1",
    gridArea: "1 / 3 / 2 / 4",
    borderColor: "border-purple-400/30",
    hoverBorder: "hover:border-purple-400/60",
    glowColor: "hover:shadow-[0_0_20px_rgba(192,132,252,0.15)]",
  },
  {
    icon: Pill,
    label: "Rybelsus",
    subtitle: "Sémaglutide oral",
    stat: "Comprimé oral",
    gridArea: "2 / 1 / 3 / 2",
    borderColor: "border-amber-400/30",
    hoverBorder: "hover:border-amber-400/60",
    glowColor: "hover:shadow-[0_0_20px_rgba(251,191,36,0.15)]",
  },
  {
    icon: Syringe,
    label: "Saxenda",
    subtitle: "Liraglutide",
    stat: "Injection quotidienne",
    gridArea: "2 / 2 / 3 / 3",
    borderColor: "border-rose-400/30",
    hoverBorder: "hover:border-rose-400/60",
    glowColor: "hover:shadow-[0_0_20px_rgba(251,113,133,0.15)]",
  },
  {
    icon: Droplet,
    label: "Trulicity",
    subtitle: "Dulaglutide",
    stat: "Injection hebdomadaire",
    gridArea: "2 / 3 / 3 / 4",
    borderColor: "border-emerald-400/30",
    hoverBorder: "hover:border-emerald-400/60",
    glowColor: "hover:shadow-[0_0_20px_rgba(52,211,153,0.15)]",
  },
  {
    icon: Atom,
    label: "Survodutide",
    subtitle: "Double agoniste",
    stat: "En développement",
    gridArea: "3 / 1 / 4 / 2",
    borderColor: "border-indigo-400/30",
    hoverBorder: "hover:border-indigo-400/60",
    glowColor: "hover:shadow-[0_0_20px_rgba(129,140,248,0.15)]",
  },
  {
    icon: Sparkles,
    label: "Orforglipron",
    subtitle: "GLP-1 oral (Eli Lilly)",
    stat: "Phase 3",
    gridArea: "3 / 2 / 4 / 3",
    borderColor: "border-lime-400/30",
    hoverBorder: "hover:border-lime-400/60",
    glowColor: "hover:shadow-[0_0_20px_rgba(163,230,53,0.15)]",
  },
  {
    icon: BookOpen,
    label: "GLP-1",
    subtitle: "Classe thérapeutique",
    stat: "Nouvelle ère",
    gridArea: "3 / 3 / 4 / 4",
    borderColor: "border-cyan-400/30",
    hoverBorder: "hover:border-cyan-400/60",
    glowColor: "hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]",
  },
];

export function HeroCards() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger staggered appearance on mount
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <div
        className="grid gap-3"
        style={{
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "auto auto auto",
        }}
      >
        {heroCardData.map((card, i) => {
          const Icon = card.icon;
          return (
            <div
              key={card.label}
              className={`group relative flex flex-col items-center justify-center rounded-xl border bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/15 ${card.borderColor} ${card.hoverBorder} ${card.glowColor} ${
                visible ? "animate-hero-card" : "opacity-0"
              } p-4`}
              style={{
                gridArea: card.gridArea,
                animationDelay: visible ? `${i * 80}ms` : "0ms",
                animationFillMode: "forwards",
                minHeight: "100px",
              }}
            >
              <Icon
                className="h-5 w-5 text-white/90 transition-colors group-hover:text-white"
              />
              <p
                className="mt-2 font-heading text-sm font-bold text-white"
              >
                {card.label}
              </p>
              <p className="mt-0.5 text-center text-[10px] text-white/50">
                {card.subtitle}
              </p>
              <p className="mt-0.5 text-center text-xs text-white/60 group-hover:text-white/80">
                {card.stat}
              </p>
            </div>
          );
        })}
      </div>
      {/* Background glow effect */}
      <div className="absolute -inset-6 -z-10 rounded-3xl bg-white/5 blur-2xl" />
    </div>
  );
}
