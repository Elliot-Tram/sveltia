export function WegovyDosageChart() {
  const steps = [
    { dose: "0,25 mg", weeks: "Semaines 1-4", label: "Initiation", width: "20%", opacity: 0.3 },
    { dose: "0,5 mg", weeks: "Semaines 5-8", label: "Palier 1", width: "35%", opacity: 0.45 },
    { dose: "1 mg", weeks: "Semaines 9-12", label: "Palier 2", width: "55%", opacity: 0.6 },
    { dose: "1,7 mg", weeks: "Semaines 13-16", label: "Palier 3", width: "75%", opacity: 0.8 },
    { dose: "2,4 mg", weeks: "À partir de la semaine 17", label: "Dose d'entretien", width: "100%", opacity: 1 },
  ];

  return (
    <figure className="my-8">
      <div className="rounded-xl border border-border bg-white p-6 sm:p-8">
        <p className="mb-1 text-center font-heading text-lg font-bold text-foreground">
          Escalade posologique du Wegovy
        </p>
        <p className="mb-6 text-center text-sm text-muted-foreground">
          Augmentation progressive sur 16 semaines avant la dose d&apos;entretien
        </p>

        <div className="space-y-4">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-4">
              <div
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                style={{ backgroundColor: `rgba(13, 148, 136, ${step.opacity})` }}
              >
                {i + 1}
              </div>

              <div className="flex-1">
                <div className="mb-1 flex items-baseline justify-between">
                  <span className="text-sm font-semibold text-foreground">{step.dose}</span>
                  <span className="text-xs text-muted-foreground">{step.weeks}</span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-surface">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: step.width,
                      backgroundColor: `rgba(13, 148, 136, ${step.opacity})`,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-start gap-2 rounded-lg bg-teal-light/50 p-3">
          <svg className="mt-0.5 h-4 w-4 shrink-0 text-teal" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm-.75 4a.75.75 0 011.5 0v3a.75.75 0 01-1.5 0V5zm.75 6.25a.75.75 0 100-1.5.75.75 0 000 1.5z" />
          </svg>
          <p className="text-xs leading-relaxed text-teal-dark">
            Chaque palier dure 4 semaines. La dose de 2,4 mg est la dose d&apos;entretien à long terme. Si un palier est mal toléré, le médecin peut prolonger la durée avant de passer au suivant.
          </p>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-xs text-muted-foreground">
        Schéma d&apos;escalade posologique recommandé pour le Wegovy (sémaglutide 2,4 mg). Source : RCP Novo Nordisk / HAS.
      </figcaption>
    </figure>
  );
}
