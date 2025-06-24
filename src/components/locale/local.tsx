import { useTranslation } from "react-i18next";

type LangToggleProps = {
  variant?: "icon" | "switch";
};

export default function LangToggle({ variant = "icon" }: LangToggleProps) {
  const { i18n } = useTranslation();

  const toggleLang = () => {
    const newLang = i18n.language === "fa" ? "en" : "fa";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
    document.documentElement.dir = newLang === "fa" ? "rtl" : "ltr";
    document.documentElement.classList.remove("lang-fa", "lang-en");
    document.documentElement.classList.add(`lang-${newLang}`);
  };

  const isFa = i18n.language === "fa";

  if (variant === "switch") {
    return (
      <div
        dir="ltr"
        onClick={toggleLang}
        className="w-12 h-7 flex items-center px-1 rounded-full cursor-pointer transition-colors duration-300 bg-foreground/50"
      >
        <div
          className={`w-5 h-5 bg-foreground rounded-full shadow-md absolute transform transition-transform duration-300 ${
            isFa ? "translate-x-0" : "translate-x-5"
          }`}
        >
          <div className="flex text-background justify-center text-center items-center text-xs w-full h-full">
            <span>{isFa ? "Fa" : "En"}</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-2 cursor-pointer font-bold text-sm"
    >
      <span>{isFa ? "FA" : "EN"}</span>
    </button>
  );
}
