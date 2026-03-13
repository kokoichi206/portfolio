import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, beforeEach } from "vitest";
import { ThemeToggle } from "./ThemeToggle";

describe("ThemeToggle", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add("dark");
  });

  it("renders a button with accessible label", () => {
    render(<ThemeToggle />);
    expect(screen.getByRole("button")).toHaveAccessibleName(/switch to .+ mode/i);
  });

  it("toggles theme on click", async () => {
    render(<ThemeToggle />);
    const button = screen.getByRole("button");

    await userEvent.click(button);

    expect(localStorage.getItem("theme")).toBe("light");
    expect(document.documentElement.classList.contains("light")).toBe(true);
  });

  it("toggles back to dark on second click", async () => {
    render(<ThemeToggle />);
    const button = screen.getByRole("button");

    await userEvent.click(button);
    await userEvent.click(button);

    expect(localStorage.getItem("theme")).toBe("dark");
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });
});
