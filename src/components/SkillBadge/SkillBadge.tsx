export const SkillBadge = ({ name, years, variant = "default" }: {
  name: string;
  years?: number;
  variant?: "main" | "sub" | "default";
}) => {
  const variantClass =
    variant === "main"
      ? "border-sakura-400/40 bg-sakura-400/10 text-sakura-300"
      : variant === "sub"
        ? "border-neutral-600 bg-neutral-800 text-neutral-300"
        : "border-neutral-700 bg-neutral-800/50 text-neutral-400";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm ${variantClass}`}
    >
      {name}
      {years !== undefined && <span className="text-xs opacity-60">{years}y</span>}
    </span>
  );
};
