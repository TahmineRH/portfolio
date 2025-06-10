import { create } from "zustand";

type Theme = "light" | "dark";

interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme, saveToStorage?: boolean) => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>((set, get) => ({
  theme: "light",

  setTheme: (theme, saveToStorage = true) => {
    set({ theme });
    document.documentElement.classList.toggle("dark", theme === "dark");
    if (saveToStorage) {
      localStorage.setItem("theme", theme);
    }
  },

  toggleTheme: () => {
    const currentTheme = get().theme;
    const newTheme = currentTheme === "light" ? "dark" : "light";
    get().setTheme(newTheme, true);
  },
}));
