import moon from "@/assets/moon.svg";
import sun from "@/assets/sun.svg";
import { useEffect } from "react";
import { useThemeStore } from "../../store/theme";

type ToggleThemeProps = {
  variant?: "icon" | "switch";
};

export default function ToggleTheme({ variant = "icon" }: ToggleThemeProps) {
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

  if (variant === "switch") {
    return (
      <div
        dir="ltr"
        onClick={toggleTheme}
        className={`w-12 h-7 flex items-center px-1 rounded-full cursor-pointer transition-colors duration-300 bg-foreground/50`}
      >
        <div
          className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
            theme === "dark" ? "translate-x-5" : "translate-x-0"
          } flex items-center justify-center`}
        >
          <img
            src={theme === "dark" ? sun : moon}
            alt="Theme icon"
            className="w-4 h-4"
          />
        </div>
      </div>
    );
  }

  // حالت آیکنی ساده
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-primary hover:bg-secondary transition-colors cursor-pointer duration-300"
      aria-label="Toggle theme"
    >
      <div className="w-6 h-6">
        <img
          src={theme === "dark" ? sun : moon}
          alt={theme === "dark" ? "Sun icon" : "Moon icon"}
          className="object-cover w-full"
        />
      </div>
    </button>
  );
}
