import type { Metadata } from "next";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez l'equipe Sveltia pour toute question, suggestion ou demande de partenariat.",
  alternates: { canonical: "https://sveltia.fr/contact" },
};

export default function Contact() {
  return (
    <section className="mx-auto max-w-3xl px-4 pb-16 pt-28 sm:px-6 sm:pt-32">
      <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
        Nous contacter
      </h1>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-muted-foreground">
        <p>
          Vous avez une question, une suggestion ou souhaitez proposer un
          partenariat ? L&apos;equipe Sveltia est a votre ecoute.
        </p>

        <div className="rounded-lg border border-border bg-surface p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-light">
              <Mail className="h-5 w-5 text-teal" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Par email</p>
              <a
                href="mailto:contact@sveltia.fr"
                className="text-teal underline underline-offset-2 hover:text-teal-dark"
              >
                contact@sveltia.fr
              </a>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-foreground">
            Delais de reponse
          </h2>
          <p>
            Nous nous efforcons de repondre a tous les messages sous 48 heures
            ouvrables. Pour les demandes urgentes liees a vos droits RGPD,
            merci de l&apos;indiquer dans l&apos;objet de votre email.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-foreground">
            Avertissement
          </h2>
          <p>
            Sveltia ne fournit pas de conseils medicaux personnalises. Pour
            toute question relative a votre sante ou a un traitement, consultez
            votre medecin traitant ou votre pharmacien.
          </p>
        </div>
      </div>
    </section>
  );
}
