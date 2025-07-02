import clsx from "clsx";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const sections = [
  { id: "description", key: "description" },
  { id: "goals", key: "goals" },
  { id: "tools", key: "tools" },
  { id: "features", key: "features" },
  { id: "chalenges", key: "chalenges" },
  { id: "demo", key: "demo" },
  { id: "lessons", key: "lessons" },
];

function SectionNav() {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.innerHeight * 0.2;

      let closestSectionId = "";
      let closestDistance = Infinity;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const distance = Math.abs(rect.top - offset);

          if (rect.top <= window.innerHeight && distance < closestDistance) {
            closestDistance = distance;
            closestSectionId = section.id;
          }
        }
      }

      if (closestSectionId) {
        setActiveId(closestSectionId);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = window.innerHeight * 0.2;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  return (
    <ul className="max-lg:hidden flex flex-col gap-4 border border-foreground/10 rounded-lg p-6 sticky top-32 z-20 h-fit min-w-60">
      {sections.map(({ id, key }) => (
        <li
          key={id}
          onClick={() => scrollToSection(id)}
          className={clsx(
            "text-sm underline-offset-4 transition-color cursor-pointer",
            activeId === id
              ? "font-medium text-foreground"
              : "hover:text-light text-light/80"
          )}
        >
          {t(`Projects.titles.${key}`)}
        </li>
      ))}
    </ul>
  );
}

export default SectionNav;
