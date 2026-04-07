export function SveltiaLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="36" height="36" rx="10" fill="#0d9488" />
      <text
        x="18"
        y="26"
        textAnchor="middle"
        fontFamily="system-ui, sans-serif"
        fontSize="22"
        fontWeight="700"
        fill="white"
        letterSpacing="-1"
      >
        S
      </text>
    </svg>
  );
}
