import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialite",
  description:
    "Politique de confidentialite de Sveltia.fr : collecte de donnees, cookies, droits des utilisateurs et conformite RGPD.",
  alternates: { canonical: "https://sveltia.fr/confidentialite" },
};

export default function Confidentialite() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
        Politique de confidentialite
      </h1>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-muted-foreground">
        <p>
          Derniere mise a jour : avril 2026. Cette politique decrit comment
          Sveltia.fr collecte et utilise vos donnees personnelles conformement au
          Reglement General sur la Protection des Donnees (RGPD).
        </p>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-foreground">
            Donnees collectees
          </h2>
          <p>
            Sveltia.fr ne collecte aucune donnee personnelle directement. Aucun
            formulaire d&apos;inscription, aucun compte utilisateur, aucun
            traitement de donnees de sante n&apos;est effectue.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-foreground">
            Cookies et traceurs
          </h2>
          <p>
            Ce site peut utiliser des cookies techniques strictement necessaires
            au fonctionnement du site. Aucun cookie publicitaire ou de tracking
            tiers n&apos;est depose sans votre consentement.
          </p>
          <p className="mt-2">
            Si des outils d&apos;analyse (type Plausible, Umami ou similaire)
            sont utilises, ils le sont dans le respect de la vie privee, sans
            collecte de donnees personnelles identifiantes.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-foreground">
            Hebergement des donnees
          </h2>
          <p>
            Le site est heberge par Vercel Inc. (Etats-Unis). Les transferts de
            donnees vers les Etats-Unis sont encadres par les clauses
            contractuelles types de la Commission europeenne.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-foreground">
            Vos droits
          </h2>
          <p>
            Conformement au RGPD, vous disposez d&apos;un droit d&apos;acces, de
            rectification, de suppression et de portabilite de vos donnees. Vous
            pouvez exercer ces droits en ecrivant a : contact@sveltia.fr
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-foreground">
            Liens d&apos;affiliation
          </h2>
          <p>
            Certains liens presents sur ce site peuvent etre des liens
            d&apos;affiliation. Cela signifie que Sveltia percoit une commission
            si vous effectuez un achat via ces liens, sans cout supplementaire
            pour vous. Ces liens sont toujours identifies par l&apos;attribut
            rel=&quot;sponsored&quot; ou rel=&quot;nofollow&quot;.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-foreground">
            Contact
          </h2>
          <p>
            Pour toute question relative a cette politique, ecrivez a :
            contact@sveltia.fr
          </p>
        </div>
      </div>
    </section>
  );
}
