import { type MouseEvent, useEffect, useRef, useState } from "react";

/**
 * Theme toggle with circular clip-path animation (View Transitions API).
 *
 * How it works:
 * ─────────────
 * The View Transitions API captures "before" (old) and "after" (new) snapshots
 * of the page as pseudo-elements (::view-transition-old/new(root)).
 * We disable the default crossfade and instead animate clip-path on one of
 * the snapshots to create a circular reveal/shrink effect from the click position.
 *
 * Direction-dependent behavior:
 *   Dark → Light: ::view-transition-new (light snapshot) circle-expands on top
 *   Light → Dark: ::view-transition-old (light snapshot) circle-shrinks on top
 *
 * This gives a symmetric feel — light always "comes and goes" as a circle.
 *
 * The z-index is controlled via CSS using html[data-transition="light|dark"]
 * to determine which snapshot sits on top during the animation.
 *
 * Fallback: browsers without View Transitions API get an instant switch.
 *
 * All related CSS is injected via useEffect below so the animation logic
 * stays in this single file.
 */

const VIEW_TRANSITION_CSS = `
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}
html[data-transition="light"]::view-transition-new(root) { z-index: 9999; }
html[data-transition="light"]::view-transition-old(root) { z-index: 1; }
html[data-transition="dark"]::view-transition-old(root)  { z-index: 9999; }
html[data-transition="dark"]::view-transition-new(root)  { z-index: 1; }
`;

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const isAnimating = useRef(false);

  useEffect(() => {
    // Inject view-transition CSS
    const style = document.createElement("style");
    style.textContent = VIEW_TRANSITION_CSS;
    document.head.appendChild(style);

    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setTheme("light");
    }

    return () => {
      style.remove();
    };
  }, []);

  const toggle = (e: MouseEvent<HTMLButtonElement>) => {
    if (isAnimating.current) return;

    const next = theme === "dark" ? "light" : "dark";

    if (!document.startViewTransition) {
      applyTheme(next);
      return;
    }

    const x = e.clientX;
    const y = e.clientY;
    // Radius large enough to cover the entire viewport from the click point
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    isAnimating.current = true;
    // CSS uses this attribute to set the correct z-index per direction
    document.documentElement.dataset["transition"] = next;

    const transition = document.startViewTransition(() => {
      applyTheme(next);
    });

    transition.ready.then(() => {
      const goingLight = next === "light";
      // Expand new snapshot (dark→light) or shrink old snapshot (light→dark)
      document.documentElement.animate(
        {
          clipPath: goingLight
            ? [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`]
            : [`circle(${radius}px at ${x}px ${y}px)`, `circle(0px at ${x}px ${y}px)`],
        },
        {
          duration: 500,
          easing: "ease-in-out",
          fill: "forwards",
          pseudoElement: goingLight ? "::view-transition-new(root)" : "::view-transition-old(root)",
        },
      );
    });

    transition.finished.then(() => {
      delete document.documentElement.dataset["transition"];
      isAnimating.current = false;
    });
  };

  const applyTheme = (next: "dark" | "light") => {
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="rounded-full p-2 transition-colors hover:bg-neutral-800 dark:hover:bg-neutral-800"
    >
      {theme === "dark" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
};
