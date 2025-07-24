import ChallengDark from "@/assets/icons/challeng-dark.svg";
import Challeng from "@/assets/icons/challeng.svg";
import SolutionDark from "@/assets/icons/solution-dark.svg";
import Solution from "@/assets/icons/sulotion.svg";
import {
  Check,
  ChevronRight,
  Copy,
  Dot,
  Github,
  LinkIcon,
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useThemeStore } from "../../store/theme";
import { Button } from "../ui/button";
import LiquidGlassLive from "./liquid-glass-demo";
import SectionNav from "./section-nav";
import { useTechIcons, type ToolName } from "./tech-icons";

function LiquidGlass() {
  const { t } = useTranslation();

  const techIcons = useTechIcons();

  const theme = useThemeStore((state) => state.theme);

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npm i liquid-glass-reactjs");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tools = t("Projects.fifth.tools")
    .split(",")
    .map((tool) => tool.trim() as ToolName);

  return (
    <main className="px-4 mx-auto pt-32 space-y-12">
      <div className="mb-8 flex flex-col gap-4">
        <div className="font-bold text-4xl">{t("Projects.fifth.name")}</div>
        <div className="text-light">{t("Projects.fifth.summary")}</div>
      </div>
      <div className="w-full border-y border-foreground/20 py-1 flex justify-end">
        <div className="flex gap-2">
          <Link
            to="https://github.com/TahmineRH/Liquid-Glass"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant={"link"}
              className="group flex items-center justify-center gap-2 text-primary"
            >
              <Github className="group-hover:text-secondary " />
              {t("Projects.titles.repository")}
            </Button>
          </Link>
          <Link
            to="https://www.npmjs.com/package/liquid-glass-reactjs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant={"link"}
              className="group flex items-center justify-center gap-2 text-primary"
            >
              <LinkIcon className="group-hover:text-secondary " />
              {t("Projects.titles.live")}
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-row-reverse justify-between gap-8">
        <SectionNav />
        <div className="space-y-12">
          <div className="flex flex-col space-y-14">
            <div id="description" className="flex flex-col gap-6">
              <h2 className="text-xl font-bold ltr:border-l-4 rtl:border-r-4 p-2">
                {t("Projects.titles.description")}
              </h2>
              <p className="text-light">{t("Projects.fifth.description")}</p>
            </div>
            <div id="goals" className="flex flex-col gap-6">
              <h2 className="text-xl font-bold ltr:border-l-4 rtl:border-r-4 p-2">
                {t("Projects.titles.goals")}
              </h2>
              <ul className="list-inside list-disc flex flex-col gap-4">
                {[...Array(3)].map((_, i) => (
                  <li key={i} className="text-light">
                    {t(`Projects.fifth.goals.${i + 1}`)}
                  </li>
                ))}
              </ul>
            </div>
            <div
              id="tools"
              className="text-xl font-bold ltr:border-l-4 rtl:border-r-4 px-2 flex flex-col gap-2"
            >
              <h2>{t("Projects.titles.tools")}</h2>
              <ul className="flex flex-wrap gap-2 items-end">
                {tools.map((tool, i) => (
                  <li key={i}>{techIcons[tool as ToolName] || null}</li>
                ))}
              </ul>
            </div>
            <div id="features" className="flex flex-col gap-6">
              <h2 className="text-xl font-bold ltr:border-l-4 rtl:border-r-4 p-2">
                {t("Projects.titles.features")}
              </h2>
              <ul className="list-inside list-disc flex flex-col gap-4">
                {[...Array(4)].map((_, i) => (
                  <li key={i} className="text-light">
                    {t(`Projects.fifth.features.${i + 1}`)}
                  </li>
                ))}
              </ul>
            </div>
            <div id="chalenges" className="flex flex-col gap-6 ">
              <h2 className="text-xl font-bold ltr:border-l-4 rtl:border-r-4 p-2">
                {t("Projects.titles.chalenges")}
              </h2>
              <ul className="flex flex-col gap-10">
                {[...Array(4)].map((_, i) => (
                  <div className="flex flex-col gap-2" key={i}>
                    <li className="text-light flex items-center gap-2">
                      <img
                        src={theme === "light" ? Challeng : ChallengDark}
                        draggable={false}
                        onContextMenu={(e) => e.preventDefault()}
                        className="w-5 h-5 object-contain max-md:w-5 max-md:h-5"
                        alt="CV"
                      />
                      {t(`Projects.fifth.chalenges.chalenge${i + 1}`)}
                    </li>
                    <li className="text-light flex items-center gap-2">
                      <img
                        src={theme === "light" ? Solution : SolutionDark}
                        draggable={false}
                        onContextMenu={(e) => e.preventDefault()}
                        className="w-5 h-5 object-contain max-md:w-5 max-md:h-5"
                        alt="CV"
                      />
                      {t(`Projects.fifth.chalenges.solution${i + 1}`)}
                    </li>
                  </div>
                ))}
              </ul>
            </div>
            <div id="demo" className="flex flex-col gap-6">
              <h2 className="text-xl font-bold ltr:border-l-4 rtl:border-r-4 p-2">
                {t("Projects.titles.demo2")}
              </h2>
              <LiquidGlassLive />
              <p className="-mt-4 text-foreground/50 text-sm flex items-center">
                <Dot /> {t(`Projects.fifth.installation.action`)}
              </p>
              <h3 className="mt-10 text-xl font-bold ltr:border-l-4 rtl:border-r-4 p-2">
                {t(`Projects.fifth.installation.title`)}
              </h3>
              <p> {t(`Projects.fifth.installation.description`)}</p>
              <div className="relative bg-card p-4 rounded-lg flex gap-2 items-center">
                <ChevronRight className="w-4 h-4 rtl:rotate-180" />
                <pre className="text-sm text-secondary overflow-x-auto">
                  <code>npm i liquid-glass-reactjs</code>
                </pre>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleCopy}
                  className="absolute top-2 ltr:right-2 rtl:left-2"
                >
                  {copied ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>
            <div id="lessons" className="flex flex-col gap-6">
              <h2 className="text-xl font-bold ltr:border-l-4 rtl:border-r-4 p-2">
                {t("Projects.titles.lessons")}
              </h2>
              <ul className="list-inside list-disc flex flex-col gap-4">
                {[...Array(2)].map((_, i) => (
                  <li key={i} className="text-light">
                    {t(`Projects.fifth.lessons.${i + 1}`)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LiquidGlass;
