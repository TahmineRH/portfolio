import { useTranslation } from "react-i18next";

export default function LangToggle() {
  const { i18n } = useTranslation();

  const toggleLang = () => {
    const newLang = i18n.language === "fa" ? "en" : "fa";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
    document.documentElement.dir = newLang === "fa" ? "rtl" : "ltr";
    document.documentElement.classList.remove("lang-fa", "lang-en");
    document.documentElement.classList.add(`lang-${newLang}`);
  };

  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-2 cursor-pointer"
    >
      <span>{i18n.language === "fa" ? "FA" : "EN"}</span>
    </button>
  );
}
