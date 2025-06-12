import CVRed from "@/assets/icons/cv-red.svg";
import CV from "@/assets/icons/cv.svg";
import GitHubRed from "@/assets/icons/github-red.svg";
import GitHub from "@/assets/icons/github.svg";
import InstagramRed from "@/assets/icons/instagram-red.svg";
import Instagram from "@/assets/icons/instagram.svg";
import { useThemeStore } from "../../store/theme";

export const SocialMedia = () => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <div className="flex gap-6 ">
      <img
        src={theme === "light" ? GitHub : GitHubRed}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        className=" w-6 h-6 object-contain"
        alt="GitHub"
      />
      <img
        src={theme === "light" ? CV : CVRed}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        className=" w-6 h-6 object-cover"
        alt="CV"
      />
      <img
        src={theme === "light" ? Instagram : InstagramRed}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        className=" w-6 h-6 object-cover"
        alt="Instagram"
      />
    </div>
  );
};
