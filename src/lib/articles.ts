import type { TocItem } from "@/components/blog/table-of-contents";

export interface Article {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;
  author: {
    name: string;
    role: string;
    bio: string;
  };
  toc: TocItem[];
}

export const articles: Article[] = [
  {
    slug: "ozempic-guide-complet-prix-avis-effets-secondaires",
    title: "Ozempic : Guide Complet - Prix, Avis, Effets Secondaires",
    subtitle:
      "Tout savoir sur le sémaglutide : posologie, remboursement, résultats sur la perte de poids et précautions à prendre en 2026.",
    description:
      "Guide complet sur l'Ozempic (sémaglutide) : prix en France, avis patients, effets secondaires, posologie, remboursement et comparaison avec Wegovy et Mounjaro.",
    category: "Traitements GLP-1",
    tags: [
      "ozempic",
      "sémaglutide",
      "glp-1",
      "perte de poids",
      "diabète type 2",
    ],
    publishedAt: "2026-04-06",
    updatedAt: "2026-04-06",
    readingTime: 14,
    author: {
      name: "Équipe Sveltia",
      role: "Rédaction médicale",
      bio: "L'équipe éditoriale de Sveltia réunit des rédacteurs spécialisés en santé. Nos contenus sont fondés sur les recommandations officielles (HAS, ANSM, Vidal) et les études cliniques publiées dans des revues à comité de lecture.",
    },
    toc: [
      {
        id: "quest-ce-que-ozempic",
        text: "Qu'est-ce que l'Ozempic ?",
        level: 2,
      },
      { id: "comment-fonctionne-ozempic", text: "Comment fonctionne le sémaglutide ?", level: 3 },
      {
        id: "ozempic-perte-de-poids",
        text: "Ozempic et perte de poids",
        level: 2,
      },
      {
        id: "resultats-cliniques",
        text: "Résultats des études cliniques",
        level: 3,
      },
      {
        id: "prix-ozempic-france",
        text: "Prix de l'Ozempic en France",
        level: 2,
      },
      { id: "remboursement-securite-sociale", text: "Remboursement par la Sécurité sociale", level: 3 },
      {
        id: "effets-secondaires",
        text: "Effets secondaires de l'Ozempic",
        level: 2,
      },
      {
        id: "effets-frequents",
        text: "Effets indésirables fréquents",
        level: 3,
      },
      { id: "effets-rares-graves", text: "Effets rares mais graves", level: 3 },
      {
        id: "posologie-dosage",
        text: "Posologie et dosage",
        level: 2,
      },
      {
        id: "avis-patients",
        text: "Avis patients et retours d'expérience",
        level: 2,
      },
      {
        id: "ozempic-vs-wegovy-mounjaro",
        text: "Ozempic vs Wegovy vs Mounjaro",
        level: 2,
      },
      {
        id: "obtenir-prescription",
        text: "Comment obtenir une prescription ?",
        level: 2,
      },
      { id: "faq", text: "Questions fréquentes (FAQ)", level: 2 },
    ],
  },
  {
    slug: "wegovy-guide-complet-prix-avis-effets-secondaires",
    title: "Wegovy : Prix, Avis, Effets Secondaires en 2026",
    subtitle:
      "Sémaglutide 2,4 mg : prix en France, remboursement, résultats cliniques, posologie et comparaison avec Ozempic et Mounjaro.",
    description:
      "Wegovy (sémaglutide 2,4 mg) : prix en France, remboursement, effets secondaires, posologie et comparaison avec Ozempic. Guide complet et indépendant.",
    category: "Traitements GLP-1",
    tags: [
      "wegovy",
      "sémaglutide",
      "glp-1",
      "perte de poids",
      "obésité",
      "anti-obésité",
    ],
    publishedAt: "2026-04-07",
    updatedAt: "2026-04-07",
    readingTime: 16,
    author: {
      name: "Équipe Sveltia",
      role: "Rédaction médicale",
      bio: "L'équipe éditoriale de Sveltia réunit des rédacteurs spécialisés en santé. Nos contenus sont fondés sur les recommandations officielles (HAS, ANSM, Vidal) et les études cliniques publiées dans des revues à comité de lecture.",
    },
    toc: [
      { id: "quest-ce-que-wegovy", text: "Qu'est-ce que le Wegovy ?", level: 2 },
      { id: "difference-ozempic", text: "Différence avec l'Ozempic", level: 3 },
      { id: "wegovy-perte-de-poids", text: "Wegovy et perte de poids", level: 2 },
      { id: "etudes-step", text: "Les études STEP", level: 3 },
      { id: "prix-wegovy-france", text: "Prix du Wegovy en France", level: 2 },
      { id: "remboursement-wegovy", text: "Remboursement Sécurité sociale", level: 3 },
      { id: "effets-secondaires-wegovy", text: "Effets secondaires", level: 2 },
      { id: "effets-frequents-wegovy", text: "Effets fréquents", level: 3 },
      { id: "effets-graves-wegovy", text: "Effets rares mais graves", level: 3 },
      { id: "posologie-wegovy", text: "Posologie et escalade de dose", level: 2 },
      { id: "avis-patients-wegovy", text: "Avis patients", level: 2 },
      { id: "wegovy-vs-ozempic-mounjaro", text: "Wegovy vs Ozempic vs Mounjaro", level: 2 },
      { id: "obtenir-prescription-wegovy", text: "Comment obtenir une prescription ?", level: 2 },
      { id: "faq", text: "Questions fréquentes (FAQ)", level: 2 },
    ],
  },
  {
    slug: "mounjaro-guide-complet-prix-avis-effets-secondaires",
    title: "Mounjaro : Prix, Avis et Effets Secondaires (2026)",
    subtitle:
      "Tirzépatide : prix en France, remboursement, perte de poids record, posologie et comparaison avec Ozempic et Wegovy.",
    description:
      "Mounjaro (tirzépatide) : prix en France, remboursement, perte de poids, effets secondaires et comparaison avec Ozempic et Wegovy. Guide complet.",
    category: "Traitements GLP-1",
    tags: [
      "mounjaro",
      "tirzépatide",
      "glp-1",
      "gip",
      "perte de poids",
      "obésité",
      "anti-obésité",
    ],
    publishedAt: "2026-04-07",
    updatedAt: "2026-04-07",
    readingTime: 17,
    author: {
      name: "Équipe Sveltia",
      role: "Rédaction médicale",
      bio: "L'équipe éditoriale de Sveltia réunit des rédacteurs spécialisés en santé. Nos contenus sont fondés sur les recommandations officielles (HAS, ANSM, Vidal) et les études cliniques publiées dans des revues à comité de lecture.",
    },
    toc: [
      { id: "quest-ce-que-mounjaro", text: "Qu'est-ce que le Mounjaro ?", level: 2 },
      { id: "double-action-glp1-gip", text: "Double action GLP-1/GIP", level: 3 },
      { id: "difference-ozempic-wegovy", text: "Différence avec Ozempic et Wegovy", level: 3 },
      { id: "mounjaro-perte-de-poids", text: "Mounjaro et perte de poids", level: 2 },
      { id: "etudes-surmount", text: "Les études SURMOUNT", level: 3 },
      { id: "resultats-par-dosage", text: "Résultats par dosage", level: 3 },
      { id: "prix-mounjaro-france", text: "Prix du Mounjaro en France", level: 2 },
      { id: "remboursement-mounjaro", text: "Remboursement", level: 3 },
      { id: "effets-secondaires-mounjaro", text: "Effets secondaires", level: 2 },
      { id: "effets-frequents-mounjaro", text: "Effets fréquents", level: 3 },
      { id: "effets-graves-mounjaro", text: "Effets rares mais graves", level: 3 },
      { id: "posologie-mounjaro", text: "Posologie et escalade de dose", level: 2 },
      { id: "avis-patients-mounjaro", text: "Avis patients et témoignages", level: 2 },
      { id: "mounjaro-vs-ozempic-wegovy", text: "Mounjaro vs Ozempic vs Wegovy", level: 2 },
      { id: "obtenir-prescription-mounjaro", text: "Comment obtenir une prescription ?", level: 2 },
      { id: "faq", text: "Questions fréquentes (FAQ)", level: 2 },
    ],
  },
  {
    slug: "ozempic-naturel-alternatives-semaglutide",
    title: "Ozempic Naturel : les Alternatives Existent-elles ? (2026)",
    subtitle:
      "Berbérine, konjac, curcuma, vinaigre de cidre : les alternatives naturelles au sémaglutide passées au crible. Ce qui marche et ce qui relève du marketing.",
    description:
      "Berbérine, konjac, curcuma, vinaigre de cidre : les alternatives naturelles au sémaglutide passées au crible. Ce qui marche vraiment et ce qui relève du marketing.",
    category: "Alternatives",
    tags: [
      "ozempic naturel",
      "berbérine",
      "alternatives",
      "compléments alimentaires",
      "perte de poids",
      "glp-1",
    ],
    publishedAt: "2026-04-07",
    updatedAt: "2026-04-07",
    readingTime: 12,
    author: {
      name: "Équipe Sveltia",
      role: "Rédaction médicale",
      bio: "L'équipe éditoriale de Sveltia réunit des rédacteurs spécialisés en santé. Nos contenus sont fondés sur les recommandations officielles (HAS, ANSM, Vidal) et les études cliniques publiées dans des revues à comité de lecture.",
    },
    toc: [
      { id: "quest-ce-que-ozempic-naturel", text: "Qu'est-ce qu'un \"ozempic naturel\" ?", level: 2 },
      { id: "alternatives-naturelles", text: "Les alternatives passées au crible", level: 2 },
      { id: "berberine", text: "Berbérine", level: 3 },
      { id: "glucomannane-konjac", text: "Glucomannane (konjac)", level: 3 },
      { id: "cannelle", text: "Cannelle", level: 3 },
      { id: "curcuma", text: "Curcuma", level: 3 },
      { id: "vinaigre-cidre", text: "Vinaigre de cidre", level: 3 },
      { id: "the-vert", text: "Thé vert", level: 3 },
      { id: "psyllium", text: "Psyllium", level: 3 },
      { id: "comparatif-naturel-vs-medicament", text: "Comparatif naturel vs médicament", level: 2 },
      { id: "recettes-tiktok", text: "Les recettes TikTok", level: 2 },
      { id: "risques-complements", text: "Les risques des compléments", level: 2 },
      { id: "stimuler-glp1-naturellement", text: "Stimuler naturellement son GLP-1", level: 2 },
      { id: "faq", text: "Questions fréquentes (FAQ)", level: 2 },
    ],
  },
  {
    slug: "ozempic-face-visage-semaglutide",
    title: "\"Ozempic Face\" : Pourquoi Ozempic Creuse le Visage",
    subtitle:
      "\"Ozempic face\" : pourquoi le visage se creuse sous sémaglutide, qui est concerné, et comment prévenir ou traiter cet effet secondaire esthétique.",
    description:
      "\"Ozempic face\" : pourquoi le visage se creuse sous sémaglutide, qui est concerné, et comment prévenir ou traiter cet effet. Explications et solutions.",
    category: "Effets secondaires",
    tags: [
      "ozempic face",
      "visage ozempic",
      "effets secondaires",
      "perte de poids",
      "médecine esthétique",
    ],
    publishedAt: "2026-04-07",
    updatedAt: "2026-04-07",
    readingTime: 10,
    author: {
      name: "Équipe Sveltia",
      role: "Rédaction médicale",
      bio: "L'équipe éditoriale de Sveltia réunit des rédacteurs spécialisés en santé. Nos contenus sont fondés sur les recommandations officielles (HAS, ANSM, Vidal) et les études cliniques publiées dans des revues à comité de lecture.",
    },
    toc: [
      { id: "definition-ozempic-face", text: "C'est quoi l'\"ozempic face\" ?", level: 2 },
      { id: "pourquoi-visage-se-creuse", text: "Pourquoi le visage se creuse", level: 2 },
      { id: "perte-graisse-faciale", text: "La graisse faciale", level: 3 },
      { id: "role-age-vitesse", text: "Rôle de l'âge et de la vitesse", level: 3 },
      { id: "qui-est-concerne", text: "Qui est concerné ?", level: 2 },
      { id: "solutions-ozempic-face", text: "Les solutions", level: 2 },
      { id: "acide-hyaluronique", text: "Acide hyaluronique", level: 3 },
      { id: "skinboosters", text: "Skinboosters", level: 3 },
      { id: "prp", text: "PRP", level: 3 },
      { id: "lifting-cas-severes", text: "Lifting (cas sévères)", level: 3 },
      { id: "prevenir-ozempic-face", text: "Prévenir plutôt que guérir", level: 2 },
      { id: "faq", text: "Questions fréquentes (FAQ)", level: 2 },
    ],
  },
  {
    slug: "semaglutide-oral-rybelsus-comprime",
    title: "Sémaglutide Oral (Rybelsus) : le GLP-1 en Comprimé",
    subtitle:
      "Rybelsus, le sémaglutide en comprimé : prix, posologie, efficacité vs Ozempic injectable, et les futurs GLP-1 oraux (orforglipron).",
    description:
      "Rybelsus, le sémaglutide en comprimé : prix, posologie, efficacité vs Ozempic injectable, et les futurs GLP-1 oraux (orforglipron). Guide complet.",
    category: "Traitements GLP-1",
    tags: [
      "rybelsus",
      "sémaglutide oral",
      "ozempic comprimé",
      "glp-1",
      "orforglipron",
    ],
    publishedAt: "2026-04-07",
    updatedAt: "2026-04-07",
    readingTime: 11,
    author: {
      name: "Équipe Sveltia",
      role: "Rédaction médicale",
      bio: "L'équipe éditoriale de Sveltia réunit des rédacteurs spécialisés en santé. Nos contenus sont fondés sur les recommandations officielles (HAS, ANSM, Vidal) et les études cliniques publiées dans des revues à comité de lecture.",
    },
    toc: [
      { id: "quest-ce-que-semaglutide-oral", text: "Qu'est-ce que le sémaglutide oral ?", level: 2 },
      { id: "technologie-snac", text: "La technologie SNAC", level: 3 },
      { id: "rybelsus-vs-ozempic", text: "Rybelsus vs Ozempic", level: 2 },
      { id: "prix-rybelsus", text: "Prix et remboursement", level: 2 },
      { id: "efficacite-perte-poids", text: "Efficacité sur la perte de poids", level: 2 },
      { id: "effets-secondaires-rybelsus", text: "Effets secondaires", level: 2 },
      { id: "posologie-rybelsus", text: "Posologie", level: 2 },
      { id: "futurs-glp1-oraux", text: "Les futurs GLP-1 en comprimé", level: 2 },
      { id: "faq", text: "Questions fréquentes (FAQ)", level: 2 },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return articles.map((a) => a.slug);
}
