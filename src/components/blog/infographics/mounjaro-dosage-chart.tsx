export function MounjaroDosageChart() {
  const steps = [
    { dose: "2,5 mg", weeks: "Semaines 1-4", width: "17%", opacity: 0.25 },
    { dose: "5 mg", weeks: "Semaines 5-8", width: "33%", opacity: 0.4 },
    { dose: "7,5 mg", weeks: "Semaines 9-12", width: "50%", opacity: 0.55 },
    { dose: "10 mg", weeks: "Semaines 13-16", width: "67%", opacity: 0.7 },
    { dose: "12,5 mg", weeks: "Semaines 17-20", width: "83%", opacity: 0.85 },
    { dose: "15 mg", weeks: "À partir de la semaine 21", width: "100%", opacity: 1 },
  ];

  return (
    <figure className="my-8">
      <div className="rounded-xl border border-border bg-white p-6 sm:p-8">
        <p className="mb-1 text-center font-heading text-lg font-bold text-foreground">
          Escalade posologique du Mounjaro
        </p>
        <p className="mb-6 text-center text-sm text-muted-foreground">
          Augmentation progressive sur 20 semaines avant la dose maximale
        </p>

        <div className="space-y-3">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-4">
              <div
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                style={{ backgroundColor: `rgba(13, 148, 136, ${step.opacity})` }}
              >
                {i + 1}
              </div>

              <div className="flex-1">
                <div className="mb-1 flex items-baseline justify-between">
                  <span className="text-sm font-semibold text-foreground">{step.dose}</span>
                  <span className="text-xs text-muted-foreground">{step.weeks}</span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-surface">
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
            La dose minimale efficace est 5 mg. La dose maximale est 15 mg. Votre médecin ajustera la posologie en fonction de votre tolérance et de votre réponse au traitement. Tous les paliers ne sont pas obligatoires.
          </p>
        </div>
      </div>
      <figcaption className="mt-2 text-center text-xs text-muted-foreground">
        Schéma d&apos;escalade posologique du Mounjaro (tirzépatide). Source : RCP Eli Lilly / EMA.
      </figcaption>
    </figure>
  );
}
