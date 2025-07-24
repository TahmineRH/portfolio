import AI from "@/assets/images/projects/ai/main.png";
import design from "@/assets/images/projects/design-system/main.png";
import hesamsanat from "@/assets/images/projects/hesam/main.png";
import travel from "@/assets/images/projects/travel-main.png";
import { GlassDiv } from "liquid-glass-reactjs";
import { ChevronRight, Github, LinkIcon, Sparkles } from "lucide-react";
import * as motion from "motion/react-client";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { BackgroundBeams } from "../ui/background-beams";
import { Button } from "../ui/button";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { TextEffect } from "../ui/text-hover-effect";
import { useTechIcons, type ToolName } from "./tech-icons";

function ProjectsList() {
  const { t } = useTranslation();

  const techIcons = useTechIcons();

  const cards = [
    {
      id: 0,
      name: "LIQUI",
      title: t("Projects.fifth.name"),
      summary: t("Projects.fifth.summary"),
      tools: t("Projects.fifth.tools")
        .split(",")
        .map((tool) => tool.trim() as ToolName),
      col: 4,
      picture: design,
      link: "https://www.npmjs.com/package/liquid-glass-reactjs",
      repo: "https://github.com/TahmineRH/Liquid-Glass",
      more: "/projects/liquid-glass",
    },
    {
      id: 1,
      name: "DESIG",
      title: t("Projects.first.name"),
      summary: t("Projects.first.summary"),
      tools: t("Projects.first.tools")
        .split(",")
        .map((tool) => tool.trim() as ToolName),
      col: 4,
      picture: design,
      link: "https://app.hesamsanat.com",
      more: "/projects/design-system",
    },
    {
      id: 2,
      name: "HESA",
      title: t("Projects.second.name"),
      summary: t("Projects.second.summary"),
      tools: t("Projects.second.tools")
        .split(",")
        .map((tool) => tool.trim() as ToolName),
      col: 3,
      picture: hesamsanat,
      link: "https://hesamsanat.com/en",
      more: "/projects/hesamsanat",
    },
    {
      id: 3,
      name: "TRAVE",
      title: t("Projects.third.name"),
      summary: t("Projects.third.summary"),
      tools: t("Projects.third.tools")
        .split(",")
        .map((tool) => tool.trim() as ToolName),
      col: 3,
      picture: travel,
    },
    {
      id: 4,
      name: "SILICON AI",
      title: t("Projects.fourth.name"),
      summary: t("Projects.fourth.summary"),
      tools: t("Projects.fourth.tools")
        .split(",")
        .map((tool) => tool.trim() as ToolName),
      col: 4,
      picture: AI,
      link: "https://silicontechai.ir",
      more: "/projects/ai",
    },
  ];

  return (
    <div className="flex flex-col gap-12 -mt-40 ">
      {cards.map((project, i) => (
        <div
          key={project.id}
          className={`flex flex-col md:flex-row items-center md:items-stretch gap-6 md:h-72 ${
            i % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="max-md:hidden relative w-full h-72 md:w-1/3 pt-12 overflow-hidden border rounded-lg border-black/5 dark:border-white/5 ">
            {i === 4 && <BackgroundBeams />}
            <div className="absolute top-12 max-md:top-2 -z-10 w-full">
              <TextEffect text={project.name} />
            </div>
            {i === 0 ? (
              <div className="flex justify-center">
                <BackgroundBeams />
                <div className="w-full h-full absolute top-0 left-0">
                  <div>
                    <div className="rounded-full h-20 w-20 bg-secondary/50 absolute top-20 left-20"></div>
                    <div className="rounded-full h-10 w-10 bg-primary/50 absolute top-35 left-60"></div>
                    <div className="rounded-full h-10 w-10 bg-foreground/50 absolute top-50 left-30"></div>
                  </div>
                </div>
                <motion.div
                  drag
                  dragDirectionLock
                  dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
                  dragTransition={{
                    bounceStiffness: 1000,
                    bounceDamping: 15,
                  }}
                  dragElastic={0.4}
                  whileDrag={{ cursor: "grabbing" }}
                  style={{
                    width: 320,
                    height: 208,
                    position: "absolute",
                  }}
                >
                  <div
                    className={`w-80 h-52 p-4 flex items-center justify-center transition-all duration-500`}
                  >
                    <GlassDiv className="rounded-xl p-8 h-full shadow-2xl w-full flex justify-center">
                      <div className="flex items-center justify-center gap-2 h-full w-full">
                        <h3 className="text-xl font-medium">Liquid Glass UI</h3>
                        <Sparkles className="w-5 h-5 text-foreground" />
                      </div>
                    </GlassDiv>
                  </div>
                </motion.div>
              </div>
            ) : (
              <img
                src={project.picture}
                alt={project.title}
                className="rounded-lg object-cover w-full h-full z-10"
              />
            )}
          </div>
          <HoverBorderGradient
            key={project.id}
            containerClassName="rounded-lg"
            as="div"
            className="w-full bg-background text-foreground flex max-md:flex-col items-center md:px-8 max-md:p-0 md:h-72"
          >
            <div className="md:hidden relative w-full overflow-hidden ">
              {i === 4 && <BackgroundBeams />}
              <div className="absolute top-2 -left-1 -z-10 w-full">
                <TextEffect text={project.name} />
              </div>
              {i === 0 ? (
                <div className="flex w-full h-72 justify-center p-4">
                  <BackgroundBeams />
                  <div className="w-full h-full absolute top-0 left-0">
                    <div>
                      <div className="rounded-full h-20 w-20 bg-secondary/50 absolute top-10 left-30"></div>
                      <div className="rounded-full h-10 w-10 bg-primary/50 absolute top-15 left-70"></div>
                      <div className="rounded-full h-10 w-10 bg-foreground/50 absolute top-40 left-40"></div>
                    </div>
                  </div>
                  <motion.div
                    drag
                    dragDirectionLock
                    dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
                    dragTransition={{
                      bounceStiffness: 1000,
                      bounceDamping: 15,
                    }}
                    dragElastic={0.4}
                    whileDrag={{ cursor: "grabbing" }}
                    style={{
                      width: 320,
                      height: 208,
                      position: "absolute",
                    }}
                  >
                    <div
                      className={`w-80 h-52 p-4 flex items-center justify-center transition-all duration-500`}
                    >
                      <GlassDiv className="rounded-xl p-8 h-full shadow-2xl w-full flex justify-center">
                        <div className="flex items-center justify-center gap-2 h-full w-full">
                          <h3 className="text-xl font-medium">
                            Liquid Glass UI
                          </h3>
                          <Sparkles className="w-5 h-5 text-foreground" />
                        </div>
                      </GlassDiv>
                    </div>
                  </motion.div>
                </div>
              ) : (
                <img
                  src={project.picture}
                  alt={project.title}
                  className="rounded-lg object-cover w-full h-72 z-10 p-4"
                />
              )}
            </div>
            <div className="w-full flex flex-col justify-center max-md:p-4 ">
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-foreground/80">{project.summary}</p>
              <div className="text-sm flex items-center gap-4 my-8">
                {t("Projects.titles.tools")}:
                <div className="flex flex-wrap gap-2 items-end">
                  {project.tools.map((tool) => (
                    <div key={tool} className="flex items-center gap-1">
                      {techIcons[tool]}
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:mt-4 flex justify-between flex-wrap max-md:gap-4">
                {project.more && (
                  <Link to={project.more}>
                    <Button className="flex items-center justify-center gap-2">
                      {t("Projects.titles.view")}{" "}
                      <ChevronRight className="rtl:rotate-180" />
                    </Button>
                  </Link>
                )}
                <div className="flex gap-2">
                  {project.repo && (
                    <Link
                      to={project.repo}
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
                  )}
                  {project.link && (
                    <Link
                      to={project.link}
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
                  )}
                </div>
              </div>
            </div>
          </HoverBorderGradient>
        </div>
      ))}
    </div>
  );
}

export default ProjectsList;
