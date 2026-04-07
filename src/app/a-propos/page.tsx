import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Shield, FileCheck, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Sveltia.fr : notre mission, notre approche éditoriale et nos engagements pour une information médicale fiable sur les traitements GLP-1.",
  alternates: { canonical: "https://sveltia.fr/a-propos" },
};

export default function APropos() {
  const principles = [
    {
      icon: BookOpen,
      title: "Sources officielles uniquement",
      description:
        "Chaque article s'appuie sur les recommandations de la HAS, les fiches du Vidal, les alertes de l'ANSM et les études cliniques publiées dans des revues à comité de lecture (NEJM, The Lancet).",
    },
    {
      icon: Shield,
      title: "Relecture médicale",
      description:
        "Nos contenus sont relus par un professionnel de santé avant publication. Nous vérifions l'exactitude des données cliniques, des posologies et des contre-indications.",
    },
    {
      icon: FileCheck,
      title: "Mise à jour régulière",
      description:
        "Les traitements GLP-1 évoluent vite. Nous mettons à jour nos articles à chaque nouvelle publication scientifique, changement de remboursement ou alerte des autorités de santé.",
    },
    {
      icon: Users,
      title: "Indépendance totale",
      description:
        "Sveltia n'est financé par aucun laboratoire pharmaceutique. Nous ne vendons pas de médicaments et nous ne proposons pas de consultations médicales. Notre seul objectif : informer.",
    },
  ];

  return (
    <section className="mx-auto max-w-3xl px-4 pb-16 pt-28 sm:px-6 sm:pt-32">
      <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
        À propos de Sveltia
      </h1>

      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
        Sveltia est un site d&apos;information indépendant dédié aux traitements
        GLP-1 (Ozempic, Wegovy, Mounjaro) et à la prise en charge médicale de
        l&apos;obésité en France. Nous rendons accessible une information
        médicale souvent complexe, sans jargon inutile et sans parti pris.
      </p>

      <h2 className="mt-12 font-heading text-2xl font-bold text-foreground">
        Pourquoi Sveltia existe
      </h2>

      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        Les traitements GLP-1 ont transformé la prise en charge de l&apos;obésité
        et du diabète de type 2. Mais l&apos;information disponible en ligne est
        souvent biaisée : sites de pharmacies en ligne qui vendent sans
        ordonnance, influenceurs qui vantent des résultats sans mentionner les
        risques, &quot;recettes naturelles&quot; sans fondement scientifique.
      </p>

      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
        Sveltia est né de ce constat. Nous pensons que chaque patient mérite une
        information claire, sourcée et honnête pour prendre des décisions
        éclairées avec son médecin. Pas de promesses miraculeuses, pas de vente
        de médicaments, pas de conseils personnalisés. Juste les faits.
      </p>

      <h2 className="mt-12 font-heading text-2xl font-bold text-foreground">
        Notre approche éditoriale
      </h2>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {principles.map((p) => (
          <div
            key={p.title}
            className="rounded-lg border border-border bg-white p-5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-teal-light">
              <p.icon className="h-5 w-5 text-teal" />
            </div>
            <p className="mt-3 text-sm font-semibold text-foreground">
              {p.title}
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {p.description}
            </p>
          </div>
        ))}
      </div>

      <h2 className="mt-12 font-heading text-2xl font-bold text-foreground">
        Ce que Sveltia n&apos;est pas
      </h2>

      <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="mt-1 text-red-500">&#10005;</span>
          Sveltia n&apos;est <strong>pas un site médical</strong>. Nous ne
          posons pas de diagnostic et ne prescrivons aucun traitement.
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1 text-red-500">&#10005;</span>
          Sveltia ne <strong>vend aucun médicament</strong> ni complément
          alimentaire.
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1 text-red-500">&#10005;</span>
          Sveltia n&apos;est <strong>financé par aucun laboratoire</strong>{" "}
          pharmaceutique.
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1 text-red-500">&#10005;</span>
          Nos contenus ne remplacent <strong>en aucun cas</strong> une
          consultation médicale.
        </li>
      </ul>

      <div className="mt-12 rounded-xl border-2 border-teal bg-teal-light/30 p-6 text-center sm:p-8">
        <p className="font-heading text-xl font-bold text-foreground">
          Une question, une suggestion ?
        </p>
        <p className="mt-2 text-muted-foreground">
          Écrivez-nous à{" "}
          <a
            href="mailto:contact@sveltia.fr"
            className="font-semibold text-teal underline underline-offset-2 hover:text-teal-dark"
          >
            contact@sveltia.fr
          </a>
        </p>
        <div className="mt-5">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-dark"
          >
            Découvrir nos guides
          </Link>
        </div>
      </div>
    </section>
  );
}
