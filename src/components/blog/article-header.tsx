import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar, ChevronRight } from "lucide-react";
import type { Article } from "@/lib/articles";

interface ArticleHeaderProps {
  article: Article;
  heroImage?: string;
  heroAlt?: string;
}

export function ArticleHeader({ article, heroImage, heroAlt }: ArticleHeaderProps) {
  return (
    <header className="border-b border-border bg-surface pt-16">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
        {/* Breadcrumb */}
        <nav
          aria-label="Fil d'ariane"
          className="mb-6 flex items-center gap-1 text-sm text-muted-foreground"
        >
          <Link href="/" className="transition-colors hover:text-teal">
            Accueil
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/" className="transition-colors hover:text-teal">
            {article.category}
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground/60 line-clamp-1">
            {article.title}
          </span>
        </nav>

        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-12">
          {/* Left: text */}
          <div className="min-w-0 flex-1">
            {/* Category badge */}
            <div className="mb-4">
              <span className="inline-block rounded-full bg-teal-light px-3 py-1 text-xs font-semibold text-teal-dark">
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-heading text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              {article.title}
            </h1>

            {/* Subtitle */}
            {article.subtitle && (
              <p className="mt-4 font-sans text-lg leading-relaxed text-muted-foreground sm:text-xl">
                {article.subtitle}
              </p>
            )}

            {/* Meta */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <time dateTime={article.publishedAt}>
                  {new Date(article.publishedAt).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>{article.readingTime} min de lecture</span>
              </div>
              {article.updatedAt && (
                <span className="text-xs">
                  Mis à jour le{" "}
                  {new Date(article.updatedAt).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              )}
            </div>

            {/* Author */}
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-teal text-sm font-bold text-white">
                S
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {article.author.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {article.author.role}
                </p>
              </div>
            </div>
          </div>

          {/* Right: hero image */}
          {heroImage && (
            <div className="w-full shrink-0 lg:w-80 xl:w-96">
              <div className="overflow-hidden rounded-xl bg-teal-light/30">
                <Image
                  src={heroImage}
                  alt={heroAlt || article.title}
                  width={768}
                  height={768}
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
