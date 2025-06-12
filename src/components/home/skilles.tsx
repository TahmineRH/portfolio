import { useTranslation } from "react-i18next";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import meme1 from "@/assets/memes/cheearz.webp";
import dicaprio from "@/assets/memes/dicaprio.webp";
import drake1 from "@/assets/memes/drake1.webp";
import drake2 from "@/assets/memes/drake2.webp";
import disaster from "@/assets/memes/disaster-girl.webp";
import dog from "@/assets/memes/dog.webp";

function Skilles() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-4 justify-center">
        <h1 className="2xl:text-5xl text-4xl max-md:text-3xl font-medium">
          {t("skills.title")}
        </h1>
        <h1 className="text-lg font-light">{t("skills.description")}</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 group">
        <div className="flex flex-col gap-4">
          <h3 className="font-medium text-xl">Languages</h3>
          <ul className="text-sm flex flex-col gap-4">
            <li>
              <Tooltip delayDuration={300}>
                <TooltipTrigger className="cursor-pointer group-hover:text-secondary duration-300">
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
              &{" "}
              <Tooltip delayDuration={300}>
                <TooltipTrigger className="cursor-pointer group-hover:text-secondary duration-300">
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
          <h3 className="font-medium text-xl">Frameworks & Libraries</h3>
          <ul className="text-sm flex flex-col gap-4">
            <li>
              <Tooltip delayDuration={300}>
                <TooltipTrigger className="cursor-pointer group-hover:text-secondary duration-300">
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
              , Next.js & CRA
            </li>
            <li>React Native</li>
            <li>Vue.js</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-medium text-xl">UI & Styling</h3>
          <ul className="text-sm flex flex-col gap-4">
            <li>Accessible HTML & CSS</li>
            <li>
              <Tooltip delayDuration={300}>
                <TooltipTrigger className="cursor-pointer group-hover:text-secondary duration-300">
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
                <TooltipTrigger className="cursor-pointer group-hover:text-secondary duration-300">
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
          <h3 className="font-medium text-xl">Other</h3>
          <ul className="text-sm flex flex-col gap-4">
            <li>
              <Tooltip delayDuration={300}>
                <TooltipTrigger className="cursor-pointer group-hover:text-secondary duration-300">
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
