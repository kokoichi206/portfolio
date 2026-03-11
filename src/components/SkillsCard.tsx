import type { Skills } from "../types/data";
import { SkillBadge } from "./SkillBadge";

interface SkillsCardProps {
  skills: Skills;
}

export const SkillsCard = ({ skills }: SkillsCardProps) => {
  return (
    <div className="rounded-2xl border border-border-dark bg-surface-dark p-6 transition-colors hover:border-sakura-400/30">
      <div className="space-y-6">
        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Languages
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.languages.map((lang) => (
              <SkillBadge
                key={lang.name}
                name={lang.name}
                years={lang.years}
                variant={lang.level}
              />
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Frameworks
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.frameworks.map((fw) => (
              <SkillBadge key={fw} name={fw} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Infrastructure
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.infrastructure.map((infra) => (
              <SkillBadge key={infra} name={infra} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Database
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.databases.map((db) => (
                <SkillBadge key={db} name={db} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Other
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.other.map((o) => (
                <SkillBadge key={o} name={o} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
