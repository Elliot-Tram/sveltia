import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleHeader } from "@/components/blog/article-header";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { AuthorBlock } from "@/components/blog/author-block";
import { MedicalDisclaimer } from "@/components/blog/medical-disclaimer";
import { MedicalReviewBadge } from "@/components/blog/medical-review-badge";
import { getArticleBySlug, getAllSlugs } from "@/lib/articles";
import {
  getAllMdxSlugs,
  getMdxArticle,
} from "@/lib/mdx-articles";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import Link from "next/link";
import { OzempicGuideComplet } from "@/components/blog/articles/ozempic-guide-complet";
import { WegovyGuideComplet } from "@/components/blog/articles/wegovy-guide-complet";
import { MounjaroGuideComplet } from "@/components/blog/articles/mounjaro-guide-complet";
import { OzempicNaturel } from "@/components/blog/articles/ozempic-naturel";
import { OzempicFace } from "@/components/blog/articles/ozempic-face";
import { SemaglutideOral } from "@/components/blog/articles/semaglutide-oral";
import { OzempicPrixFrance } from "@/components/blog/articles/ozempic-prix-france";

/* Map slugs to content components */
const articleContent: Record<string, React.ComponentType> = {
  "ozempic-guide-complet-prix-avis-effets-secondaires": OzempicGuideComplet,
  "wegovy-guide-complet-prix-avis-effets-secondaires": WegovyGuideComplet,
  "mounjaro-guide-complet-prix-avis-effets-secondaires": MounjaroGuideComplet,
  "ozempic-naturel-alternatives-semaglutide": OzempicNaturel,
  "ozempic-face-visage-semaglutide": OzempicFace,
  "semaglutide-oral-rybelsus-comprime": SemaglutideOral,
  "ozempic-prix-france": OzempicPrixFrance,
};

/* Map slugs to hero images */
const articleHeroImages: Record<string, { src: string; alt: string }> = {
  "ozempic-guide-complet-prix-avis-effets-secondaires": {
    src: "/images/ozempic-hero.webp",
    alt: "Illustration d'un stylo injecteur de sémaglutide pour le traitement Ozempic",
  },
  "wegovy-guide-complet-prix-avis-effets-secondaires": {
    src: "/images/wegovy-hero.webp",
    alt: "Illustration d'une balance médicale et d'un stylo injecteur représentant le Wegovy",
  },
  "mounjaro-guide-complet-prix-avis-effets-secondaires": {
    src: "/images/mounjaro-hero.webp",
    alt: "Illustration de la double action moléculaire du tirzépatide (Mounjaro)",
  },
  "ozempic-naturel-alternatives-semaglutide": {
    src: "/images/ozempic-naturel-hero.webp",
    alt: "Illustration de plantes et herbes naturelles présentées comme alternatives au sémaglutide",
  },
  "ozempic-face-visage-semaglutide": {
    src: "/images/ozempic-face-hero.webp",
    alt: "Illustration du phénomène ozempic face, creusement du visage après perte de poids",
  },
  "semaglutide-oral-rybelsus-comprime": {
    src: "/images/semaglutide-oral-hero.webp",
    alt: "Illustration d'un comprimé de sémaglutide oral (Rybelsus)",
  },
  "ozempic-prix-france": {
    src: "/images/ozempic-hero.webp",
    alt: "Illustration d'un stylo Ozempic et d'une boîte de médicament avec un prix affiché",
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const legacy = getAllSlugs();
  const legacySet = new Set(legacy);
  const mdx = getAllMdxSlugs().filter((s) => !legacySet.has(s));
  return [...legacy, ...mdx].map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (article) {
    return {
      title: article.title,
      description: article.description,
      keywords: article.tags,
      openGraph: {
        title: article.title,
        description: article.description,
        type: "article",
        publishedTime: article.publishedAt,
        modifiedTime: article.updatedAt,
        locale: "fr_FR",
        siteName: "Sveltia",
        authors: [article.author.name],
      },
      alternates: {
        canonical: `https://sveltia.fr/${article.slug}`,
      },
    };
  }

  const mdx = getMdxArticle(slug);
  if (!mdx) return { title: "Article introuvable" };
  return {
    title: mdx.title,
    description: mdx.description,
    keywords: mdx.keywords,
    alternates: { canonical: `https://sveltia.fr/${mdx.slug}` },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    const mdx = getMdxArticle(slug);
    if (!mdx || mdx.draft) notFound();
    return <MdxArticleView slug={slug} article={mdx} />;
  }

  const ContentComponent = articleContent[slug];

  if (!ContentComponent) {
    notFound();
  }

  /* Structured data: MedicalWebPage */
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    author: {
      "@type": "Organization",
      name: article.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "Sveltia",
      url: "https://sveltia.fr",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://sveltia.fr/${article.slug}`,
    },
    about: {
      "@type": "Drug",
      name: "Ozempic",
      activeIngredient: "Sémaglutide",
    },
    specialty: {
      "@type": "MedicalSpecialty",
      name: "Endocrinology",
    },
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://sveltia.fr",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: article.title,
        item: `https://sveltia.fr/${article.slug}`,
      },
    ],
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "L'Ozempic fait-il maigrir ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, l'Ozempic entraîne généralement une perte de poids de 5 à 10 % du poids corporel chez les patients diabétiques, même s'il n'est pas officiellement indiqué pour cet usage en France.",
        },
      },
      {
        "@type": "Question",
        name: "Quel est le prix de l'Ozempic en France ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le prix de l'Ozempic varie de 80 à 220 euros par stylo selon le dosage. Il est remboursé à 65 % par la Sécurité sociale pour les patients diabétiques de type 2.",
        },
      },
      {
        "@type": "Question",
        name: "Quels sont les effets secondaires de l'Ozempic ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Les effets secondaires les plus fréquents sont digestifs : nausées, diarrhées, vomissements et constipation. Ils sont généralement transitoires et diminuent avec le temps.",
        },
      },
      {
        "@type": "Question",
        name: "Peut-on prendre l'Ozempic sans être diabétique ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Un médecin peut prescrire l'Ozempic hors AMM, mais cette utilisation n'est pas remboursée. Le Wegovy est l'alternative officiellement autorisée pour la gestion du poids.",
        },
      },
      {
        "@type": "Question",
        name: "Que se passe-t-il à l'arrêt de l'Ozempic ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Les études montrent qu'une majorité de patients reprennent une partie du poids perdu dans les 12 mois suivant l'arrêt, d'où l'importance de modifications durables de l'hygiène de vie.",
        },
      },
      {
        "@type": "Question",
        name: "Qui ne doit pas prendre l'Ozempic ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "L'Ozempic est contre-indiqué chez les patients ayant des antécédents de carcinome médullaire de la thyroïde, les femmes enceintes ou allaitantes, et les patients diabétiques de type 1.",
        },
      },
      {
        "@type": "Question",
        name: "Combien de kilos perd-on par mois avec l'Ozempic ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En moyenne 1 à 3 kg par mois selon le dosage et le profil du patient. Les résultats les plus significatifs apparaissent entre le 3e et le 6e mois de traitement.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />

      <article>
        <ArticleHeader
          article={article}
          heroImage={articleHeroImages[slug]?.src}
          heroAlt={articleHeroImages[slug]?.alt}
        />

        <div className="mx-auto flex max-w-7xl justify-center gap-10 px-4 py-10 sm:px-6">
          {/* Article body */}
          <div className="article-body min-w-0 max-w-[720px] flex-1">
            <MedicalReviewBadge />
            <ContentComponent />
            <AuthorBlock
              name={article.author.name}
              role={article.author.role}
              bio={article.author.bio}
            />
            <MedicalDisclaimer />
          </div>

          {/* Sticky TOC sidebar */}
          <TableOfContents items={article.toc} />
        </div>
      </article>
    </>
  );
}

function slugifyHeading(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function extractTocItems(content: string): { id: string; label: string }[] {
  const items: { id: string; label: string }[] = [];
  const lines = content.split("\n");
  let inCodeBlock = false;
  for (const line of lines) {
    if (line.trim().startsWith("```")) {
      inCodeBlock = !inCodeBlock;
      continue;
    }
    if (inCodeBlock) continue;
    const match = /^##\s+(.+?)\s*$/.exec(line);
    if (match) {
      const label = match[1].replace(/[*_`]/g, "").trim();
      if (label) items.push({ id: slugifyHeading(label), label });
    }
  }
  return items;
}

function MdxArticleView({
  slug,
  article,
}: {
  slug: string;
  article: NonNullable<ReturnType<typeof getMdxArticle>>;
}) {
  const tocItems = extractTocItems(article.content);
  const hasFaqs = !!(article.faqs && article.faqs.length > 0);

  const structuredData: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    author: { "@type": "Organization", name: "Sveltia", url: "https://sveltia.fr" },
    publisher: { "@type": "Organization", name: "Sveltia", url: "https://sveltia.fr" },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://sveltia.fr/${slug}`,
    },
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://sveltia.fr" },
      { "@type": "ListItem", position: 2, name: article.title, item: `https://sveltia.fr/${slug}` },
    ],
  };

  const faqJsonLd = hasFaqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: article.faqs!.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.reponse },
        })),
      }
    : null;

  return (
    <div className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* Hero branded teal */}
      <section className="bg-[#0d9488]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <nav className="text-sm text-teal-100 mb-6">
            <Link href="/" className="hover:text-white transition-colors duration-200">
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <span className="text-teal-50">{article.title}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-[1.15] mb-4">
            {article.title}
          </h1>
          {(article.category || article.date || article.readingTime) && (
            <div className="flex items-center gap-3 mt-4 text-sm text-teal-100 flex-wrap">
              {article.category && (
                <span className="bg-[#0f766e] text-teal-50 px-2.5 py-0.5 rounded-md text-xs font-semibold">
                  {article.category}
                </span>
              )}
              {article.category && article.date && (
                <span className="w-1 h-1 rounded-full bg-teal-200/50" />
              )}
              {article.date && (
                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              )}
              {article.readingTime && (
                <>
                  <span className="w-1 h-1 rounded-full bg-teal-200/50" />
                  <span>{article.readingTime} de lecture</span>
                </>
              )}
            </div>
          )}
        </div>
      </section>

      {/* 2 colonnes : article + TOC sticky */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex gap-12">
          <article className="flex-1 min-w-0 article-content prose prose-slate prose-lg max-w-none">
            {article.keyPoints && article.keyPoints.length > 0 && (
              <div className="not-prose bg-[#f0fdfa] border border-[#ccfbf1] rounded-xl p-6 mb-10">
                <p className="font-bold text-slate-900 text-base mb-3">
                  Points clés à retenir
                </p>
                <ul className="text-sm text-slate-700 leading-relaxed space-y-2">
                  {article.keyPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#0d9488] font-bold mt-0.5 flex-shrink-0">
                        {i + 1}.
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSlug]}>
              {article.content}
            </ReactMarkdown>

            {hasFaqs && (
              <section id="faq" className="scroll-mt-24">
                <h2>Questions fréquentes</h2>
                <div className="space-y-3 not-prose">
                  {article.faqs!.map((faq, i) => (
                    <details
                      key={i}
                      className="group border border-slate-200 rounded-xl overflow-hidden"
                    >
                      <summary className="flex items-center justify-between cursor-pointer p-4 bg-white hover:bg-slate-50 transition-colors duration-200 text-slate-900 font-semibold text-base">
                        {faq.question}
                        <svg
                          className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-300 flex-shrink-0 ml-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </summary>
                      <div className="px-4 pb-4">
                        <p className="text-base text-slate-500 leading-relaxed">
                          {faq.reponse}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            )}
          </article>

          {tocItems.length > 0 && (
            <aside className="hidden xl:block w-64 flex-shrink-0">
              <div className="sticky top-24">
                <nav aria-label="Sommaire" className="text-sm">
                  <p className="font-semibold text-slate-900 mb-3">Sommaire</p>
                  <ul className="space-y-2 border-l border-slate-200 pl-4">
                    {tocItems.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="text-slate-600 hover:text-[#0d9488] transition-colors duration-200 block"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}
