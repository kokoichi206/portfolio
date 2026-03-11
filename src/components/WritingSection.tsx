interface WritingSectionProps {
  hatenaCount: number;
  zennCount: number;
  tilCategories: number;
  hatenaUrl: string;
  zennUrl: string;
}

export const WritingSection = ({
  hatenaCount,
  zennCount,
  tilCategories,
  hatenaUrl,
  zennUrl,
}: WritingSectionProps) => {
  const stats = [
    { label: "Hatena Blog", count: `${hatenaCount}+`, href: hatenaUrl },
    { label: "Zenn", count: `${zennCount}`, href: zennUrl },
    {
      label: "TIL Categories",
      count: `${tilCategories}+`,
      href: "https://github.com/kokoichi206/til",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <a
          key={stat.label}
          href={stat.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 text-center transition-colors hover:border-sakura-400/30"
        >
          <span className="text-3xl font-bold text-sakura-400">{stat.count}</span>
          <span className="mt-1 text-xs text-neutral-500">articles</span>
          <span className="mt-2 text-sm text-neutral-300 group-hover:text-sakura-400 transition-colors">
            {stat.label}
          </span>
        </a>
      ))}
    </div>
  );
};
