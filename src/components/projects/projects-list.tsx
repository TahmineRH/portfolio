import { useTranslation } from "react-i18next";
import { useTechIcons, type ToolName } from "./tech-icons";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { ChevronRight, LinkIcon } from "lucide-react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import hesamsanat from "@/assets/hesamsanat.png";
function ProjectsList() {
  const { t } = useTranslation();

  const techIcons = useTechIcons();

  const cards = [
    {
      id: 1,
      title: t("Projects.first.name"),
      summary: t("Projects.first.summary"),
      tools: t("Projects.first.tools")
        .split(",")
        .map((tool) => tool.trim() as ToolName),
      col: 4,
      picture: hesamsanat,
      link: "https://app.hesamsanat.com",
      more: "/projects/design-system",
    },
    {
      id: 2,
      title: t("Projects.second.name"),
      summary: t("Projects.second.summary"),
      tools: t("Projects.second.tools")
        .split(",")
        .map((tool) => tool.trim() as ToolName),
      col: 3,
      picture: "/images/hesamsanat.jpg",
      link: "https://hesamsanat.com/en",
      more: "/projects/hesamsanat",
    },
    {
      id: 3,
      title: t("Projects.third.name"),
      summary: t("Projects.third.summary"),
      tools: t("Projects.third.tools")
        .split(",")
        .map((tool) => tool.trim() as ToolName),
      col: 3,
      picture: "/images/travel.jpg",
    },
    {
      id: 4,
      title: t("Projects.fourth.name"),
      summary: t("Projects.fourth.summary"),
      tools: t("Projects.fourth.tools")
        .split(",")
        .map((tool) => tool.trim() as ToolName),
      col: 4,
      picture: "/images/ai.jpg",
      link: "https://silicontechai.ir",
      more: "/projects/ai",
    },
  ];

  return (
    <div className="flex flex-col gap-12 ">
      {cards.map((project, i) => (
        <div
          key={project.id}
          className={`flex flex-col md:flex-row items-center md:items-stretch gap-6 h-72 ${
            i % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="w-full h-full md:w-1/3 bg-background  border rounded-lg border-black/5 p-2">
            <img
              src={project.picture}
              alt={project.title}
              className="rounded-lg object-contain w-full h-full"
            />
          </div>
          <HoverBorderGradient
            key={project.id}
            containerClassName="rounded-lg"
            as="div"
            className="w-full bg-background text-foreground flex items-center px-8 h-72"
          >
            <div className="w-full flex flex-col justify-center">
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

              <div className="mt-4 flex gap-6">
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
                {project.more && (
                  <Link to={project.more}>
                    <Button className="flex items-center justify-center gap-2">
                      {t("Projects.titles.view")}{" "}
                      <ChevronRight className="rtl:rotate-180" />
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </HoverBorderGradient>
        </div>
      ))}
    </div>
  );
}

export default ProjectsList;
