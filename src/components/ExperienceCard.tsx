import type { Experience } from "../types/data";

interface ExperienceCardProps {
  experiences: Experience[];
}

export const ExperienceCard = ({ experiences }: ExperienceCardProps) => {
  return (
    <div className="rounded-2xl border border-border-dark bg-surface-dark p-6 transition-colors hover:border-sakura-400/30">
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div key={exp.period} className="relative pl-6 border-l border-neutral-700">
            <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border-2 border-sakura-400 bg-surface-dark" />
            <div className="mb-1 flex flex-wrap items-center gap-2">
              <span className="text-sm font-mono text-sakura-400">{exp.period}</span>
              <span className="text-sm text-neutral-400">{exp.company}</span>
              <span className="rounded-full bg-neutral-800 px-2 py-0.5 text-xs text-neutral-500">
                {exp.role}
              </span>
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed">{exp.description}</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {exp.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-neutral-800/60 px-2 py-0.5 text-xs text-neutral-500"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
