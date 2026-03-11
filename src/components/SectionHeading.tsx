interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold tracking-tight text-neutral-100 sm:text-3xl">{title}</h2>
      {subtitle && <p className="mt-2 text-sm text-neutral-500">{subtitle}</p>}
    </div>
  );
};
