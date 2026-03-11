import type { Certification } from "../types/data";

interface CertBadgeProps {
  cert: Certification;
}

export const CertBadge = ({ cert }: CertBadgeProps) => {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-900/50 px-4 py-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sakura-400/10 text-xs font-bold text-sakura-400">
        {cert.abbr.length > 4 ? cert.abbr.slice(0, 4) : cert.abbr}
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-medium text-neutral-200">{cert.name}</p>
        <p className="text-xs text-neutral-500">{cert.date}</p>
      </div>
    </div>
  );
};
