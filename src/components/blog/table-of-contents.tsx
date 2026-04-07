"use client";

import { useEffect, useState } from "react";
import { List, X } from "lucide-react";

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  items: TocItem[];
}

function TocList({
  items,
  activeId,
  onNavigate,
}: {
  items: TocItem[];
  activeId: string;
  onNavigate?: () => void;
}) {
  return (
    <ul className="space-y-1">
      {items.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            onClick={onNavigate}
            className={`block rounded px-2 py-1.5 text-[13px] leading-snug transition-colors ${
              item.level === 3 ? "pl-5" : ""
            } ${
              activeId === item.id
                ? "bg-teal-light font-medium text-teal-dark"
                : "text-muted-foreground hover:bg-surface hover:text-foreground"
            }`}
          >
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -75% 0px", threshold: 0 }
    );

    for (const item of items) {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    }

    return () => observer.disconnect();
  }, [items]);

  // Close mobile TOC on escape key
  useEffect(() => {
    if (!mobileOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [mobileOpen]);

  if (items.length === 0) return null;

  return (
    <>
      {/* Desktop sidebar TOC */}
      <nav
        aria-label="Sommaire de l'article"
        className="sticky top-24 hidden w-64 shrink-0 self-start xl:block"
      >
        <div className="rounded-lg border border-border bg-white p-5">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
            <List className="h-4 w-4 text-teal" />
            Sommaire
          </div>
          <TocList items={items} activeId={activeId} />
        </div>
      </nav>

      {/* Mobile floating TOC button */}
      <div className="xl:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fermer le sommaire" : "Ouvrir le sommaire"}
          className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-teal text-white shadow-lg transition-colors hover:bg-teal-dark"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <List className="h-5 w-5" />
          )}
        </button>

        {/* Mobile TOC drawer */}
        {mobileOpen && (
          <>
            <div
              className="fixed inset-0 z-40 bg-black/30"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <nav
              aria-label="Sommaire de l'article"
              className="fixed bottom-20 left-4 right-4 z-50 max-h-[70vh] overflow-y-auto rounded-lg border border-border bg-white p-5 shadow-xl sm:left-auto sm:right-5 sm:w-72"
            >
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                <List className="h-4 w-4 text-teal" />
                Sommaire
              </div>
              <TocList
                items={items}
                activeId={activeId}
                onNavigate={() => setMobileOpen(false)}
              />
            </nav>
          </>
        )}
      </div>
    </>
  );
}
