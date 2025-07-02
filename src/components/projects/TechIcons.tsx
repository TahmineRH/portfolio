import { ReactComponent as MotionLib } from "@/assets/icons/motion.svg";
import { ReactComponent as NextIcon } from "@/assets/icons/nextjs.svg";
import { ReactComponent as Shadcn } from "@/assets/icons/shadcn.svg";
import { ReactComponent as Tailwind } from "@/assets/icons/tailwindcss.svg";
import { ReactComponent as Threejs } from "@/assets/icons/threejs.svg";
import { useMemo, type JSX } from "react";
import JavaScript from "../../assets/icons/javaScript";
import TinyMCE from "../../assets/icons/tinymce";
import TypeScript from "../../assets/icons/typescript";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export type ToolName =
  | "Next.js"
  | "TypeScript"
  | "Tailwind"
  | "Shadcn/UI"
  | "JavaScript"
  | "CMS (TinyMCE)"
  | "Motion"
  | "Three.js";

export const useTechIcons = () => {
  const techIcons = useMemo<Record<ToolName, JSX.Element>>(
    () => ({
      "Next.js": (
        <Tooltip>
          <TooltipTrigger>
            <NextIcon className="h-4 w-4 text-foreground rounded-full" />
          </TooltipTrigger>
          <TooltipContent>
            <p>Next.js</p>
          </TooltipContent>
        </Tooltip>
      ),
      TypeScript: (
        <Tooltip>
          <TooltipTrigger>
            <TypeScript className="h-4 w-4 text-foreground rounded-sm" />
          </TooltipTrigger>
          <TooltipContent>
            <p>TypeScript</p>
          </TooltipContent>
        </Tooltip>
      ),
      Tailwind: (
        <Tooltip>
          <TooltipTrigger>
            <Tailwind className="h-4 w-4 text-foreground" />
          </TooltipTrigger>
          <TooltipContent>
            <p>Tailwind CSS</p>
          </TooltipContent>
        </Tooltip>
      ),
      "Shadcn/UI": (
        <Tooltip>
          <TooltipTrigger>
            <Shadcn className="h-4 w-4 text-foreground" />
          </TooltipTrigger>
          <TooltipContent>
            <p>Shadcn/UI</p>
          </TooltipContent>
        </Tooltip>
      ),
      JavaScript: (
        <Tooltip>
          <TooltipTrigger>
            <JavaScript className="h-4 w-4 text-foreground rounded-sm" />
          </TooltipTrigger>
          <TooltipContent>
            <p>JavaScript</p>
          </TooltipContent>
        </Tooltip>
      ),
      "CMS (TinyMCE)": (
        <Tooltip>
          <TooltipTrigger>
            <TinyMCE className="h-4 w-4 text-foreground" />
          </TooltipTrigger>
          <TooltipContent>
            <p>TinyMCE</p>
          </TooltipContent>
        </Tooltip>
      ),
      Motion: (
        <Tooltip>
          <TooltipTrigger>
            <MotionLib className="h-4 text-foreground" />
          </TooltipTrigger>
          <TooltipContent>
            <p>Motion</p>
          </TooltipContent>
        </Tooltip>
      ),
      "Three.js": (
        <Tooltip>
          <TooltipTrigger>
            <Threejs className="h-4 w-4 text-foreground" />
          </TooltipTrigger>
          <TooltipContent>
            <p>Three.js</p>
          </TooltipContent>
        </Tooltip>
      ),
    }),
    []
  );

  return techIcons;
};
