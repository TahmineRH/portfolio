import moon from "@/assets/moon.svg";
import sun from "@/assets/sun.svg";
import { useEffect } from "react";
import { useThemeStore } from "../../store/theme";

export default function ToggleTheme() {
  const { theme, setTheme, toggleTheme } = useThemeStore();

  useEffect(() => {
    const localTheme = localStorage.getItem("theme") as "light" | "dark" | null;

    if (localTheme) {
      setTheme(localTheme, false);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: light)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light", false);
    }
  }, [setTheme]);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-primary hover:bg-secondary transition-colors cursor-pointer duration-300"
      aria-label="Toggle theme"
    >
      <div className="w-6 h-6">
        <img
          src={theme === "dark" ? sun : moon}
          className="object-cover w-full "
          alt={theme === "dark" ? "Sun icon" : "Moon icon"}
        />
      </div>
    </button>
  );
}
