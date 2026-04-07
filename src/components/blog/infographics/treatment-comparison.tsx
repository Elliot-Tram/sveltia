export function TreatmentComparison() {
  const treatments = [
    {
      name: "Ozempic",
      molecule: "Semaglutide",
      lab: "Novo Nordisk",
      doses: "0,25 - 2 mg",
      indication: "Diabete de type 2",
      weightLoss: "5 - 10 %",
      frequency: "1x / semaine",
      reimbursed: true,
      color: "#0d9488",
    },
    {
      name: "Wegovy",
      molecule: "Semaglutide",
      lab: "Novo Nordisk",
      doses: "2,4 mg",
      indication: "Obesite / surpoids",
      weightLoss: "~15 %",
      frequency: "1x / semaine",
      reimbursed: false,
      color: "#6366f1",
    },
    {
      name: "Mounjaro",
      molecule: "Tirzepatide",
      lab: "Eli Lilly",
      doses: "2,5 - 15 mg",
      indication: "Diabete de type 2",
      weightLoss: "~20 %",
      frequency: "1x / semaine",
      reimbursed: false,
      color: "#f97316",
    },
  ];

  const rows: { label: string; key: keyof typeof treatments[0] }[] = [
    { label: "Molecule", key: "molecule" },
    { label: "Laboratoire", key: "lab" },
    { label: "Dosages", key: "doses" },
    { label: "Indication", key: "indication" },
    { label: "Perte de poids", key: "weightLoss" },
    { label: "Frequence", key: "frequency" },
  ];

  return (
    <figure className="my-8">
      <div className="overflow-x-auto rounded-xl border border-border bg-white">
        {/* Header */}
        <div className="grid grid-cols-4 border-b border-border">
          <div className="p-4" />
          {treatments.map((t) => (
            <div key={t.name} className="border-l border-border p-4 text-center">
              <div
                className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white"
                style={{ backgroundColor: t.color }}
              >
                {t.name[0]}
              </div>
              <p className="text-sm font-bold text-foreground">{t.name}</p>
            </div>
          ))}
        </div>

        {/* Rows */}
        {rows.map((row, i) => (
          <div
            key={row.key}
            className={`grid grid-cols-4 ${i % 2 === 0 ? "bg-surface/50" : ""} ${i < rows.length - 1 ? "border-b border-border" : ""}`}
          >
            <div className="flex items-center p-3 text-xs font-semibold text-muted-foreground sm:p-4 sm:text-sm">
              {row.label}
            </div>
            {treatments.map((t) => (
              <div
                key={t.name}
                className="flex items-center justify-center border-l border-border p-3 text-center text-xs text-foreground sm:p-4 sm:text-sm"
              >
                {String(t[row.key])}
              </div>
            ))}
          </div>
        ))}

        {/* Remboursement row */}
        <div className="grid grid-cols-4 border-t border-border">
          <div className="flex items-center p-3 text-xs font-semibold text-muted-foreground sm:p-4 sm:text-sm">
            Rembourse SS
          </div>
          {treatments.map((t) => (
            <div
              key={t.name}
              className="flex items-center justify-center border-l border-border p-3 sm:p-4"
            >
              {t.reimbursed ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
                  <svg className="h-3 w-3" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M10.28 2.28a.75.75 0 00-1.06-1.06L4.5 5.94 2.78 4.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.06 0l5.25-5.25z" />
                  </svg>
                  Oui (65 %)
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2.5 py-0.5 text-xs font-medium text-red-600">
                  <svg className="h-3 w-3" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M3.28 2.22a.75.75 0 00-1.06 1.06L4.94 6 2.22 8.72a.75.75 0 101.06 1.06L6 7.06l2.72 2.72a.75.75 0 101.06-1.06L7.06 6l2.72-2.72a.75.75 0 00-1.06-1.06L6 4.94 3.28 2.22z" />
                  </svg>
                  Non
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
      <figcaption className="mt-2 text-center text-xs text-muted-foreground">
        Comparaison des traitements GLP-1 disponibles en France (2026). Sources : HAS, Vidal, etudes cliniques SUSTAIN / STEP / SURPASS.
      </figcaption>
    </figure>
  );
}
