import treeD from "@/assets/3d.png";
import ai from "@/assets/AI.png";
import hesamsanat from "@/assets/p1.png";
import travel from "@/assets/travel.png";
import { ChevronRight, LinkIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import { useTechIcons, type ToolName } from "../projects/tech-icons";
import { Button } from "../ui/button";
import { MovingBorderWrapper } from "../ui/moving-border";

type Card = {
  id: number;
  title: string;
  summary: string;
  picture: string;
  link?: string;
  more: string;
  tools: string[];
  col: number;
};

export default function ProjectCards() {
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
      picture: treeD,
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
      picture: hesamsanat,
      link: "https://hesamsanat.com/en",
      more: "/projects/hesamsanat",
    },
    {
      id: 4,
      title: "Card Four",
      summary: "This is card four",
      tools: [],
      col: 3,
      picture: travel,
      more: "/projects",
    },
    {
      id: 3,
      title: "Card Three",
      summary: "This is card three",
      tools: [],
      col: 4,
      picture: ai,
      more: "/projects",
    },
  ];

  const [activeCard, setActiveCard] = useState<Card | null>(null);

  return (
    <div className="relative flex justify-start h-full w-full overflow-hidden p-1">
      <div className="grid grid-cols-7 2xl:gap-8 gap-4 h-full w-full z-10">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.id}`}
            key={card.id}
            className={cn(
              `rounded-[0.75rem]  h-full  flex items-center justify-center text-center overflow-hidden max-lg:col-span-7 col-span-${card.col}`
            )}
            onClick={() => setActiveCard(card)}
          >
            <MovingBorderWrapper
              duration={10000}
              initialProgress={Math.random() * 10000}
              borderRadius="0.75rem"
              containerClassName="w-full h-full "
              key={card.id}
            >
              <img
                src={card.picture}
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                className="w-full h-full max-lg:h-80 max-md:h-64 object-contain bg-card/40 rounded-[0.75rem]"
                alt={`project-${card.id}`}
              />
            </MovingBorderWrapper>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeCard && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCard(null)}
            />

            <motion.div
              layoutId={`card-${activeCard.id}`}
              className="fixed bg-background top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 w-3xl max-md:w-sm max-md:h-[50vh] h-[80vh] rounded-xl shadow-2xl overflow-hidden"
              onClick={() => setActiveCard(null)}
            >
              <div className="relative w-full h-full px-12">
                <img
                  src={activeCard.picture}
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  className="w-full h-full object-contain object-top"
                  alt="preview"
                />
              </div>
              <motion.div
                className="fixed bottom-0 left-0 w-full h-72 max-md:h-80 bg-black/60 z-20"
                initial={{ y: 400 }}
                animate={{ y: 20 }}
                exit={{ y: 300 }}
                transition={{
                  type: "spring",
                  damping: 15,
                }}
              >
                <div className="absolute inset-0 flex flex-col justify-around backdrop-blur-lg p-4 md:p-8">
                  <div className="flex flex-col gap-6">
                    <h2 className="text-2xl font-bold">{activeCard.title}</h2>
                    <p className="text-balance ">{activeCard.summary}</p>
                    <div className="text-sm flex items-center gap-4">
                      {t("Projects.titles.tools")}:
                      <ul className="flex flex-wrap gap-2 items-end">
                        {activeCard.tools.map((tool, i) => (
                          <li key={i}>{techIcons[tool as ToolName] || null}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex justify-between mt-6">
                    <Link to={activeCard.more}>
                      <Button className="flex items-center justify-center gap-2">
                        {t("Projects.titles.view")}{" "}
                        <ChevronRight className="rtl:rotate-180" />
                      </Button>
                    </Link>
                    {activeCard.link && (
                      <Link
                        to={activeCard.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant={"link"}
                          className="group flex items-center justify-center gap-2"
                        >
                          <LinkIcon className="group-hover:text-secondary " />
                          {t("Projects.titles.live")}
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
