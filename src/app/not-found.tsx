import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-20">
      <p className="text-6xl font-bold text-teal">404</p>
      <h1 className="mt-4 font-heading text-2xl font-bold text-foreground sm:text-3xl">
        Page introuvable
      </h1>
      <p className="mt-3 max-w-md text-center font-sans text-muted-foreground">
        La page que vous recherchez n&apos;existe pas ou a été déplacée.
        Retrouvez toutes nos informations sur les traitements GLP-1 depuis la
        page d&apos;accueil.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-dark"
        >
          <Home className="h-4 w-4" />
          Retour à l&apos;accueil
        </Link>
        <Link
          href="/ozempic-guide-complet-prix-avis-effets-secondaires"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-white px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
        >
          <ArrowLeft className="h-4 w-4" />
          Guide Ozempic
        </Link>
      </div>
    </section>
  );
}
