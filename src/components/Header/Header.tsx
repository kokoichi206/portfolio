import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";

export const Header = () => {
  const navItems = [
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Writing", href: "#writing" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border-dark/50 bg-bg-dark/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="/"
          className="text-sm font-bold text-sakura-400 hover:text-sakura-300 transition-colors"
        >
          @kokoichi206
        </a>
        <nav className="hidden items-center gap-6 sm:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-neutral-400 transition-colors hover:text-neutral-100"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
};
