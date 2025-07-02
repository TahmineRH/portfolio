import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { LinkIcon } from "lucide-react";

function Hesamsanat() {
  const { t } = useTranslation();
  return (
    <main className="px-4 mx-auto space-y-12 pt-32">
      <div className="mb-8 flex flex-col gap-4">
        <div className="font-bold text-4xl">{t("Projects.second.name")}</div>
        <div>{t("Projects.second.summary")}</div>
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
        <div>
          <h2 className="text-xl font-bold ltr:border-l-4 rtl:border-r-4 p-2">
            {t("Projects.titles.description")}
          </h2>
          <p>{t("Projects.second.description")}</p>
        </div>
        <div>
          <h2 className="text-xl font-bold ltr:border-l-4 rtl:border-r-4 p-2">
            {t("Projects.titles.goals")}
          </h2>
          <ul>
            {[...Array(5)].map((_, i) => (
              <li key={i}>{t(`Projects.second.goals.${i + 1}`)}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold ltr:border-l-4 rtl:border-r-4 p-2">
            {t("Projects.titles.tools")}
          </h2>
          <ul>
            {[...Array(4)].map((_, i) => (
              <li key={i}>{t(`Projects.second.tools.${i + 1}`)}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold ltr:border-l-4 rtl:border-r-4 p-2">
            {t("Projects.titles.features")}
          </h2>
          <ul>
            {[...Array(9)].map((_, i) => (
              <li key={i}>{t(`Projects.second.features.${i + 1}`)}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold ltr:border-l-4 rtl:border-r-4 p-2">
            {t("Projects.titles.chalenges")}
          </h2>
          <ul>
            {[...Array(3)].map((_, i) => (
              <>
                <li key={i}>
                  {t(`Projects.second.chalenges.chalenge${i + 1}`)}
                </li>
                <li key={i}>
                  {t(`Projects.second.chalenges.solution${i + 1}`)}
                </li>
              </>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold ltr:border-l-4 rtl:border-r-4 p-2">
            {t("Projects.titles.demo")}
          </h2>
          <ul>
            {[...Array(9)].map((_, i) => (
              <li key={i}>{t(`Projects.second.features.${i + 1}`)}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold ltr:border-l-4 rtl:border-r-4 p-2">
            {t("Projects.titles.lessons")}
          </h2>
          <ul>
            {[...Array(4)].map((_, i) => (
              <li key={i}>{t(`Projects.second.lessons.${i + 1}`)}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Hesamsanat;
