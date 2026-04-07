import { Lightbulb, AlertTriangle, Info, CheckCircle } from "lucide-react";
import type { ReactNode } from "react";

type CalloutVariant = "retenir" | "warning" | "info" | "success";

interface CalloutBoxProps {
  variant?: CalloutVariant;
  title?: string;
  children: ReactNode;
}

const variantStyles: Record<
  CalloutVariant,
  { bg: string; border: string; icon: string; title: string }
> = {
  retenir: {
    bg: "bg-teal-light",
    border: "border-teal",
    icon: "text-teal",
    title: "text-teal-dark",
  },
  warning: {
    bg: "bg-amber-50",
    border: "border-amber-400",
    icon: "text-amber-500",
    title: "text-amber-800",
  },
  info: {
    bg: "bg-blue-50",
    border: "border-blue-400",
    icon: "text-blue-500",
    title: "text-blue-800",
  },
  success: {
    bg: "bg-emerald-50",
    border: "border-emerald-400",
    icon: "text-emerald-600",
    title: "text-emerald-800",
  },
};

const variantIcons: Record<CalloutVariant, typeof Lightbulb> = {
  retenir: Lightbulb,
  warning: AlertTriangle,
  info: Info,
  success: CheckCircle,
};

const defaultTitles: Record<CalloutVariant, string> = {
  retenir: "À retenir",
  warning: "Attention",
  info: "Information",
  success: "Bon à savoir",
};

export function CalloutBox({
  variant = "retenir",
  title,
  children,
}: CalloutBoxProps) {
  const styles = variantStyles[variant];
  const Icon = variantIcons[variant];
  const displayTitle = title ?? defaultTitles[variant];

  return (
    <div
      className={`my-6 rounded-lg border-l-4 ${styles.border} ${styles.bg} p-5`}
      role="note"
    >
      <div className={`mb-2 flex items-center gap-2 font-heading font-semibold ${styles.title}`}>
        <Icon className={`h-5 w-5 ${styles.icon}`} />
        {displayTitle}
      </div>
      <div className="text-[15px] leading-relaxed text-slate-700 [&>ul]:mt-2 [&>ul]:list-disc [&>ul]:space-y-1 [&>ul]:pl-5">
        {children}
      </div>
    </div>
  );
}
