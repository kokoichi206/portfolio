import type { Project } from "../types/data";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl border border-border-dark bg-surface-dark p-6 transition-all hover:border-sakura-400/30 hover:-translate-y-1"
    >
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-neutral-100 group-hover:text-sakura-400 transition-colors">
          {project.name}
        </h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-neutral-500 transition-transform group-hover:translate-x-1 group-hover:text-sakura-400"
        >
          <path d="M7 17L17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </div>
      <p className="mb-4 text-sm text-neutral-400 leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="rounded-md bg-neutral-800 px-2 py-0.5 text-xs text-neutral-400">
            {t}
          </span>
        ))}
      </div>
    </a>
  );
};
