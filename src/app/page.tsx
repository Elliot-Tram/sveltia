import Link from "next/link";
import type { Metadata } from "next";
import {
  Clock,
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  BarChart3,
  BookOpen,
  Newspaper,
  Pill,
  Syringe,
  FlaskConical,
  ChevronDown,
} from "lucide-react";
import { articles } from "@/lib/articles";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { HeroCards } from "@/components/ui/hero-cards";

export const metadata: Metadata = {
  title: "Sveltia - Guide indépendant des traitements GLP-1",
  description:
    "Ozempic, Wegovy, Mounjaro : prix, avis, effets secondaires. L'information médicale claire et indépendante sur les traitements GLP-1.",
  alternates: {
    canonical: "https://sveltia.fr",
  },
};

const treatmentCards = [
  {
    name: "Ozempic",
    molecule: "Sémaglutide",
    description:
      "Le traitement GLP-1 le plus prescrit au monde. Initialement conçu pour le diabète de type 2, il est désormais reconnu pour ses effets sur la perte de poids.",
    href: "/ozempic-guide-complet-prix-avis-effets-secondaires",
    icon: Pill,
  },
  {
    name: "Wegovy",
    molecule: "Sémaglutide (haute dose)",
    description:
      "La version du sémaglutide spécifiquement autorisée pour la gestion du poids. Dosage plus élevé et indication officielle pour l'obésité.",
    href: "#",
    icon: Syringe,
  },
  {
    name: "Mounjaro",
    molecule: "Tirzépatide",
    description:
      "Le dernier-né des traitements GLP-1 avec une double action GIP/GLP-1. Des résultats prometteurs dans les études cliniques sur la perte de poids.",
    href: "#",
    icon: FlaskConical,
  },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Information vérifiée",
    description:
      "Tous nos contenus sont fondés sur les recommandations officielles (HAS, ANSM) et les études cliniques publiées.",
  },
  {
    icon: BarChart3,
    title: "Comparatifs détaillés",
    description:
      "Analyses comparatives entre Ozempic, Wegovy et Mounjaro : efficacité, prix, effets secondaires.",
  },
  {
    icon: BookOpen,
    title: "Guide pratique",
    description:
      "Prix en France, conditions de remboursement, obtention de prescription : tout ce qu'il faut savoir.",
  },
  {
    icon: Newspaper,
    title: "Actualité",
    description:
      "Suivi des nouvelles molécules, des évolutions réglementaires et des dernières études cliniques.",
  },
];

const faqItems = [
  {
    question: "Qu'est-ce qu'un traitement GLP-1 ?",
    answer:
      "Les traitements GLP-1 (glucagon-like peptide-1) sont des médicaments injectables qui imitent une hormone naturelle de l'organisme. Ils ralentissent la vidange gastrique, réduisent l'appétit et améliorent la régulation de la glycémie. Ils sont utilisés pour le diabète de type 2 et, pour certains, pour la gestion du poids.",
  },
  {
    question: "Quelle est la différence entre Ozempic et Wegovy ?",
    answer:
      "Ozempic et Wegovy contiennent tous deux du sémaglutide, mais à des dosages différents. Ozempic est autorisé pour le diabète de type 2 (dose max 2 mg/semaine), tandis que Wegovy est spécifiquement approuvé pour la gestion du poids avec un dosage plus élevé (2,4 mg/semaine).",
  },
  {
    question: "Ces traitements sont-ils remboursés en France ?",
    answer:
      "L'Ozempic est remboursé à 65 % par la Sécurité sociale pour les patients diabétiques de type 2. Le Wegovy et le Mounjaro ne sont pas encore remboursés en France pour l'indication de perte de poids. Le coût mensuel varie de 80 à 300 euros selon le traitement.",
  },
  {
    question: "Quels sont les effets secondaires les plus courants ?",
    answer:
      "Les effets secondaires les plus fréquents sont d'ordre digestif : nausées, diarrhées, vomissements et constipation. Ils surviennent surtout en début de traitement et diminuent généralement avec le temps. La titration progressive du dosage permet de les limiter.",
  },
  {
    question: "Faut-il une ordonnance pour obtenir ces traitements ?",
    answer:
      "Oui, tous les traitements GLP-1 (Ozempic, Wegovy, Mounjaro) nécessitent une prescription médicale. Ils peuvent être prescrits par un médecin généraliste ou un endocrinologue après un bilan de santé complet.",
  },
  {
    question: "Peut-on arrêter un traitement GLP-1 sans risque ?",
    answer:
      "L'arrêt doit se faire en concertation avec votre médecin. Les études montrent qu'une reprise de poids est fréquente après l'arrêt du traitement. C'est pourquoi un suivi médical et des modifications durables de l'hygiène de vie sont essentiels.",
  },
];

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sveltia",
    url: "https://sveltia.fr",
    description: "Guide indépendant des traitements GLP-1",
    sameAs: [],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      {/* Hero section */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 sm:pb-24 sm:pt-32 lg:pb-28 lg:pt-36">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Text column */}
            <div>
              <AnimateOnScroll animation="fade-in-up" delay={0}>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                  <ShieldCheck className="h-4 w-4" />
                  Guide indépendant des traitements GLP-1
                </span>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-in-up" delay={100}>
                <h1 className="mt-6 font-heading text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Tout savoir sur les{" "}
                  <span className="text-coral">traitements GLP-1</span>
                </h1>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-in-up" delay={200}>
                <p className="mt-6 max-w-lg font-sans text-lg leading-relaxed text-white/80 sm:text-xl">
                  Ozempic, Wegovy, Mounjaro : prix, avis, effets secondaires.
                  L&apos;information médicale claire et indépendante.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-in-up" delay={300}>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/ozempic-guide-complet-prix-avis-effets-secondaires"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-coral px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-coral-dark hover:shadow-lg"
                  >
                    Découvrir les traitements
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </AnimateOnScroll>

              {/* Trust signals */}
              <AnimateOnScroll animation="fade-in-up" delay={400}>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-6">
                  {[
                    "Information indépendante",
                    "Sources médicales vérifiées",
                    "Mis à jour régulièrement",
                  ].map((text) => (
                    <div
                      key={text}
                      className="flex items-center gap-2 text-sm leading-snug text-white/70"
                    >
                      <CheckCircle className="h-4 w-4 shrink-0 text-teal-light" />
                      {text}
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>

            {/* Visual column - Molecular grid hero cards */}
            <div className="hidden lg:flex lg:justify-center">
              <HeroCards />
            </div>
          </div>
        </div>
      </section>

      {/* Les traitements section */}
      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <AnimateOnScroll animation="fade-in-up">
            <div className="text-center">
              <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
                Les traitements GLP-1
              </h2>
              <p className="mx-auto mt-4 max-w-2xl font-sans text-lg text-muted-foreground">
                Découvrez les principaux traitements à base d&apos;agonistes du
                GLP-1 disponibles en France, leurs spécificités et leurs
                indications.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {treatmentCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <AnimateOnScroll key={card.name} animation="scale-in" delay={i * 100}>
                  <Link
                    href={card.href}
                    className="group relative block rounded-xl border border-border bg-white p-8 transition-all duration-300 hover:scale-[1.03] hover:border-teal/40 hover:shadow-xl"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-light">
                      <Icon className="h-6 w-6 text-teal" />
                    </div>

                    <h3 className="mt-5 font-heading text-xl font-bold text-foreground transition-colors group-hover:text-teal">
                      {card.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-teal">
                      {card.molecule}
                    </p>
                    <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
                      {card.description}
                    </p>

                    <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-teal transition-colors group-hover:text-teal-dark">
                      En savoir plus
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pourquoi Sveltia */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <AnimateOnScroll animation="fade-in-up">
            <div className="text-center">
              <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
                Pourquoi Sveltia ?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl font-sans text-lg text-muted-foreground">
                Une source d&apos;information fiable et transparente pour vous
                accompagner dans vos décisions de santé.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <AnimateOnScroll key={feature.title} animation="fade-in-up" delay={i * 100}>
                  <div className="rounded-xl border border-border bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-teal-light">
                      <Icon className="h-6 w-6 text-teal" />
                    </div>
                    <h3 className="mt-4 font-heading text-base font-bold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Derniers articles */}
      <section id="articles" className="scroll-mt-20 bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <AnimateOnScroll animation="fade-in-up">
            <div className="text-center">
              <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
                Derniers articles
              </h2>
              <p className="mx-auto mt-4 max-w-2xl font-sans text-lg text-muted-foreground">
                Nos guides les plus récents, fondés sur les sources officielles.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, i) => (
              <AnimateOnScroll key={article.slug} animation="fade-in-up" delay={i * 100}>
                <Link
                  href={`/${article.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-teal/30 hover:shadow-lg"
                >
                  {/* Card top accent */}
                  <div className="h-1.5 rounded-t-xl bg-gradient-to-r from-teal to-teal-dark" />

                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-block rounded-full bg-teal-light px-3 py-1 text-xs font-semibold text-teal-dark">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" />
                        {article.readingTime} min de lecture
                      </span>
                    </div>

                    <h3 className="mt-4 font-heading text-lg font-bold text-foreground transition-colors group-hover:text-teal sm:text-xl">
                      {article.title}
                    </h3>

                    {article.subtitle && (
                      <p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-muted-foreground line-clamp-3">
                        {article.subtitle}
                      </p>
                    )}

                    <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-teal transition-colors group-hover:text-teal-dark">
                      Lire l&apos;article
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <AnimateOnScroll animation="fade-in-up">
            <div className="text-center">
              <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
                Questions fréquentes
              </h2>
              <p className="mx-auto mt-4 max-w-2xl font-sans text-lg text-muted-foreground">
                Les réponses aux questions les plus posées sur les traitements
                GLP-1.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="mt-12 space-y-4">
            {faqItems.map((item, i) => (
              <AnimateOnScroll key={item.question} animation="fade-in-up" delay={i * 80}>
                <details
                  className="faq-details group rounded-xl border border-border bg-white transition-all hover:border-teal/30"
                >
                  <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-left font-heading text-base font-semibold text-foreground transition-colors group-open:text-teal [&::-webkit-details-marker]:hidden">
                    {item.question}
                    <ChevronDown className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180 group-open:text-teal" />
                  </summary>
                  <div className="px-6 pb-5">
                    <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                      {item.answer}
                    </p>
                  </div>
                </details>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="hero-gradient py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <AnimateOnScroll animation="fade-in-up">
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Restez informé
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-sans text-lg text-white/80">
              De nouveaux guides et comparatifs sont publiés chaque semaine.
              Consultez nos derniers articles pour rester à jour sur les
              traitements GLP-1.
            </p>
            <div className="mt-8">
              <Link
                href="/ozempic-guide-complet-prix-avis-effets-secondaires"
                className="inline-flex items-center gap-2 rounded-lg bg-coral px-8 py-4 text-base font-semibold text-white transition-all hover:bg-coral-dark hover:shadow-lg"
              >
                Lire le dernier guide
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
