import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-header text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        {/* 4-column layout */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Branding */}
          <div>
            <Link href="/" className="text-xl font-bold tracking-tight text-white">
              Sveltia
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Votre guide indépendant sur les traitements GLP-1. Des
              informations fiables, sourcées et mises à jour régulièrement pour
              vous accompagner dans vos décisions de santé.
            </p>
          </div>

          {/* Column 2: Traitements */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Traitements
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/ozempic-guide-complet-prix-avis-effets-secondaires"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  Ozempic
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  Wegovy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  Mounjaro
                </Link>
              </li>
              <li>
                <Link
                  href="/ozempic-guide-complet-prix-avis-effets-secondaires"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  Guide GLP-1
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Ressources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Ressources
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/#articles"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <a
                  href="https://www.has-sante.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  Sources médicales (HAS)
                </a>
              </li>
              <li>
                <a
                  href="https://ansm.sante.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  ANSM
                </a>
              </li>
              <li>
                <a
                  href="https://www.vidal.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  Vidal
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Informations légales
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/a-propos"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  Mentions legales
                </Link>
              </li>
              <li>
                <Link
                  href="/confidentialite"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  Politique de confidentialite
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Medical disclaimer */}
        <div className="mt-12 rounded-lg border border-amber-500/20 bg-amber-500/10 p-5">
          <p className="text-sm font-semibold text-amber-300">
            Avertissement médical
          </p>
          <p className="mt-1 text-sm leading-relaxed text-amber-200/70">
            Les informations publiées sur Sveltia.fr sont fournies à titre
            informatif uniquement et ne remplacent en aucun cas un avis médical
            professionnel. Consultez toujours votre médecin ou pharmacien avant
            de commencer, modifier ou arrêter un traitement. Sveltia.fr ne peut
            être tenu responsable de l&apos;utilisation faite de ces
            informations.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Sveltia.fr. Tous droits réservés.
            Les contenus de ce site ne constituent pas des conseils médicaux.
          </p>
        </div>
      </div>
    </footer>
  );
}
