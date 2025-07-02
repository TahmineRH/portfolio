import { LinkIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useTechIcons, type ToolName } from "./TechIcons";

function Hesamsanat() {
  const { t } = useTranslation();

  const techIcons = useTechIcons();

  const tools = t("Projects.second.tools")
    .split(",")
    .map((tool) => tool.trim() as ToolName);

  return (
    <main className="px-4 mx-auto space-y-12 pt-32">
      <div className="mb-8 flex flex-col gap-4">
        <div className="font-bold text-4xl">{t("Projects.second.name")}</div>
        <div className="text-light">{t("Projects.second.summary")}</div>
      </div>
      <div className="w-full border-y border-foreground/10 py-1 flex justify-end">
        <Link
          to="https://hesamsanat.com/en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant={"link"}
            className="group flex items-center justify-center gap-2"
          >
            <LinkIcon className="group-hover:text-secondary" />
            {t("Projects.titles.live")}
          </Button>
        </Link>
      </div>
      <div className="flex flex-col space-y-14">
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold ltr:border-l-4 rtl:border-r-4 p-2">
            {t("Projects.titles.description")}
          </h2>
          <p className="text-light">{t("Projects.second.description")}</p>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold ltr:border-l-4 rtl:border-r-4 p-2">
            {t("Projects.titles.goals")}
          </h2>
          <ul className="list-inside list-disc flex flex-col gap-4">
            {[...Array(5)].map((_, i) => (
              <li key={i} className="text-light">
                {t(`Projects.second.goals.${i + 1}`)}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-xl font-bold ltr:border-l-4 rtl:border-r-4 px-2 flex flex-col gap-2">
          <h2>{t("Projects.titles.tools")}</h2>
          <ul className="flex flex-wrap gap-2 items-end">
            {tools.map((tool, i) => (
              <li key={i}>{techIcons[tool as ToolName] || null}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold ltr:border-l-4 rtl:border-r-4 p-2">
            {t("Projects.titles.features")}
          </h2>
          <ul className="list-inside list-disc flex flex-col gap-4">
            {[...Array(9)].map((_, i) => (
              <li key={i} className="text-light">
                {t(`Projects.second.features.${i + 1}`)}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-6 ">
          <h2 className="text-xl font-bold ltr:border-l-4 rtl:border-r-4 p-2">
            {t("Projects.titles.chalenges")}
          </h2>
          <ul className="list-inside list-disc flex flex-col gap-4">
            {[...Array(3)].map((_, i) => (
              <>
                <li key={i} className="text-light">
                  {t(`Projects.second.chalenges.chalenge${i + 1}`)}
                </li>
                <li key={i} className="text-light">
                  {t(`Projects.second.chalenges.solution${i + 1}`)}
                </li>
              </>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold ltr:border-l-4 rtl:border-r-4 p-2">
            {t("Projects.titles.demo")}
          </h2>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold ltr:border-l-4 rtl:border-r-4 p-2">
            {t("Projects.titles.lessons")}
          </h2>
          <ul className="list-inside list-disc flex flex-col gap-4">
            {[...Array(4)].map((_, i) => (
              <li key={i} className="text-light">
                {t(`Projects.second.lessons.${i + 1}`)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Hesamsanat;
