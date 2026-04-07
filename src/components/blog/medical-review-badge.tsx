import { ShieldCheck } from "lucide-react";
import Link from "next/link";

export function MedicalReviewBadge() {
  return (
    <div className="mb-8 flex items-center gap-3 rounded-lg border border-emerald-200 bg-emerald-50/50 px-4 py-3.5">
      <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-600" />
      <span className="text-sm leading-none text-emerald-800">
        <strong>Relu par un professionnel de santé</strong>
        {" "}&middot;{" "}
        <Link
          href="/a-propos"
          className="text-emerald-600 underline underline-offset-2 hover:text-emerald-800"
        >
          Notre approche éditoriale
        </Link>
      </span>
    </div>
  );
}
