import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleHeader } from "@/components/blog/article-header";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { AuthorBlock } from "@/components/blog/author-block";
import { MedicalDisclaimer } from "@/components/blog/medical-disclaimer";
import { MedicalReviewBadge } from "@/components/blog/medical-review-badge";
import { getArticleBySlug, getAllSlugs } from "@/lib/articles";
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
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Article introuvable" };
  }

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

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
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
