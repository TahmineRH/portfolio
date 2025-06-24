import meme1 from "@/assets/memes/cheearz.webp";
import dicaprio from "@/assets/memes/dicaprio.webp";
import disaster from "@/assets/memes/disaster-girl.webp";
import dog from "@/assets/memes/dog.webp";
import drake1 from "@/assets/memes/drake1.webp";
import drake2 from "@/assets/memes/drake2.webp";
import { useTranslation } from "react-i18next";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

function Skilles() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4 justify-center max-md:gap-1">
        <h1 className="2xl:text-5xl text-4xl max-md:text-3xl font-medium">
          {t("skills.title")}
        </h1>
        <h1 className="text-lg font-light max-md:text-base max-md:text-foreground/90">
          {t("skills.description")}
        </h1>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 group">
        <div className="flex flex-col gap-4">
          <h3 className="font-medium text-xl max-md:text-lg">
            {t("skills.frameworks")}
          </h3>
          <ul className="text-sm flex flex-col gap-4 max-md:gap-6 max-md:text-foreground/80">
            <li>
              <Tooltip delayDuration={300}>
                <TooltipTrigger className="group-hover:text-secondary hover:!text-secondary focus:!text-secondary duration-300 hover:cursor-pointer">
                  React
                </TooltipTrigger>
                <TooltipContent className="p-0 rounded-lg overflow-hidden">
                  <img
                    src={meme1}
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                    className="w-52 h-52 object-cover"
                    alt="image1"
                  />
                </TooltipContent>
              </Tooltip>
              , Next.js {t("skills.and")} CRA
            </li>
            <li>React Native</li>
            <li>Vue.js</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-medium text-xl max-md:text-lg">
            {t("skills.ui")}
          </h3>
          <ul className="text-sm flex flex-col gap-4 max-md:gap-6 max-md:text-foreground/80">
            <li>Accessible HTML {t("skills.and")} CSS</li>
            <li>
              <Tooltip delayDuration={300}>
                <TooltipTrigger className="group-hover:text-secondary hover:!text-secondary focus:!text-secondary duration-300  hover:cursor-pointer transition-colors">
                  Tailwind
                </TooltipTrigger>
                <TooltipContent className="p-0 rounded-lg overflow-hidden">
                  <img
                    src={disaster}
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                    className="w-52 h-52 object-cover"
                    alt="image1"
                  />
                </TooltipContent>
              </Tooltip>
            </li>
            <li>CSS-in-JS</li>
            <li>
              <Tooltip delayDuration={300}>
                <TooltipTrigger className="group-hover:text-secondary hover:!text-secondary focus:!text-secondary duration-300 hover:cursor-pointer">
                  UI Frameworks
                </TooltipTrigger>
                <TooltipContent className="p-0 rounded-lg overflow-hidden">
                  <img
                    src={dicaprio}
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                    className="w-52 h-52 object-cover"
                    alt="image1"
                  />
                </TooltipContent>
              </Tooltip>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-medium text-xl max-md:text-lg">
            {t("skills.languages")}
          </h3>
          <ul className="text-sm flex flex-col gap-4 max-md:gap-6 max-md:text-foreground/80">
            <li>
              <Tooltip delayDuration={300}>
                <TooltipTrigger className="group-hover:text-secondary hover:!text-secondary focus:!text-secondary duration-300 hover:cursor-pointer">
                  JavaScript
                </TooltipTrigger>
                <TooltipContent className="p-0 rounded-lg overflow-hidden">
                  <img
                    src={drake1}
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                    className="w-52 h-52 object-cover"
                    alt="image1"
                  />
                </TooltipContent>
              </Tooltip>{" "}
              {t("skills.and")}{" "}
              <Tooltip delayDuration={300}>
                <TooltipTrigger className="group-hover:text-secondary hover:!text-secondary focus:!text-secondary duration-300 hover:cursor-pointer">
                  TypeScript
                </TooltipTrigger>
                <TooltipContent className="p-0 rounded-lg overflow-hidden">
                  <img
                    src={drake2}
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                    className="w-52 h-52 object-cover"
                    alt="image1"
                  />
                </TooltipContent>
              </Tooltip>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-medium text-xl max-md:text-lg">
            {t("skills.other")}
          </h3>
          <ul className="text-sm flex flex-col gap-4 max-md:gap-6 max-md:text-foreground/80">
            <li>
              <Tooltip delayDuration={300}>
                <TooltipTrigger className="group-hover:text-secondary hover:!text-secondary focus:!text-secondary duration-300 hover:cursor-pointer">
                  Three.js
                </TooltipTrigger>
                <TooltipContent className="p-0 rounded-lg overflow-hidden">
                  <img
                    src={dog}
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                    className="w-52 h-52 object-cover"
                    alt="image1"
                  />
                </TooltipContent>
              </Tooltip>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skilles;
