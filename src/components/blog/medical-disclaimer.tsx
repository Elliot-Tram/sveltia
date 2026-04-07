import { AlertTriangle } from "lucide-react";

export function MedicalDisclaimer() {
  return (
    <div className="mt-10 rounded-lg border border-amber-200 bg-amber-50 p-5">
      <div className="flex items-center gap-2">
        <AlertTriangle className="h-5 w-5 shrink-0 text-amber-500" />
        <p className="text-sm font-semibold text-amber-800">
          Avertissement médical
        </p>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-amber-700">
        Cet article est publié à titre informatif et ne se substitue en aucun
        cas à une consultation médicale. Les informations présentées sont basées
        sur des sources scientifiques et institutionnelles (HAS, ANSM, Vidal,
        études cliniques publiées). Consultez toujours un professionnel de santé
        avant de commencer, modifier ou arrêter un traitement médicamenteux.
      </p>
    </div>
  );
}
