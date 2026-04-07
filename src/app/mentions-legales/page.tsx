import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions legales",
  description:
    "Mentions legales du site Sveltia.fr : editeur, hebergeur, propriete intellectuelle et responsabilite.",
  alternates: { canonical: "https://sveltia.fr/mentions-legales" },
};

export default function MentionsLegales() {
  return (
    <section className="mx-auto max-w-3xl px-4 pb-16 pt-28 sm:px-6 sm:pt-32">
      <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
        Mentions legales
      </h1>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-muted-foreground">
        <div>
          <h2 className="mb-2 text-lg font-semibold text-foreground">
            Editeur du site
          </h2>
          <p>
            Le site sveltia.fr est un site d&apos;information independant sur
            les traitements GLP-1, edite a titre personnel.
          </p>
          <p className="mt-1">
            Directeur de la publication : l&apos;editeur du site, joignable
            a l&apos;adresse ci-dessous.
          </p>
          <p className="mt-1">
            Contact : contact@sveltia.fr
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-foreground">
            Hebergement
          </h2>
          <p>
            Ce site est heberge par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, Etats-Unis.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-foreground">
            Propriete intellectuelle
          </h2>
          <p>
            L&apos;ensemble des contenus publies sur sveltia.fr (textes, images,
            graphismes, logo, structure) sont proteges par le droit d&apos;auteur.
            Toute reproduction, meme partielle, est interdite sans autorisation
            prealable ecrite.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-foreground">
            Responsabilite
          </h2>
          <p>
            Les informations publiees sur sveltia.fr sont fournies a titre
            informatif uniquement et ne remplacent en aucun cas un avis medical
            professionnel. L&apos;editeur ne saurait etre tenu responsable des
            erreurs, omissions ou resultats obtenus suite a l&apos;utilisation de
            ces informations. Consultez toujours un professionnel de sante avant
            de commencer, modifier ou arreter un traitement.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-foreground">
            Liens externes
          </h2>
          <p>
            Ce site peut contenir des liens vers des sites tiers. L&apos;editeur
            n&apos;exerce aucun controle sur le contenu de ces sites et decline
            toute responsabilite quant aux informations qui y sont publiees.
          </p>
        </div>
      </div>
    </section>
  );
}
