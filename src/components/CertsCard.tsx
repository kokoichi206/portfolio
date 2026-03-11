import type { Certification } from "../types/data";
import { CertBadge } from "./CertBadge";

interface CertsCardProps {
  certs: Certification[];
  title?: string;
  extra?: { label: string; value: string };
}

export const CertsCard = ({ certs, title = "Certifications", extra }: CertsCardProps) => {
  return (
    <div className="rounded-2xl border border-border-dark bg-surface-dark p-6 transition-colors hover:border-sakura-400/30">
      {extra && (
        <div className="mb-5">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
            {extra.label}
          </h3>
          <p className="text-sm text-neutral-300">{extra.value}</p>
        </div>
      )}
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-500">
        {title}
      </h3>
      <div className="space-y-3">
        {certs.map((cert) => (
          <CertBadge key={cert.date} cert={cert} />
        ))}
      </div>
    </div>
  );
};
