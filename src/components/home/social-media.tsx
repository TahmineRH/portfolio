import CVdark from "@/assets/icons/cv-dark.svg";
import CV from "@/assets/icons/cv.svg";
import GitHubdark from "@/assets/icons/github-dark.svg";
import GitHub from "@/assets/icons/github.svg";
import Instagramdark from "@/assets/icons/instagram-dark.svg";
import Instagram from "@/assets/icons/instagram.svg";
import { useThemeStore } from "../../store/theme";

export const SocialMedia = () => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <div className="flex gap-6 max-md:gap-4">
      <img
        src={theme === "light" ? GitHub : GitHubdark}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        className="w-6 h-6 object-contain max-md:w-5 max-md:h-5"
        alt="GitHub"
      />
      <img
        src={theme === "light" ? CV : CVdark}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        className="w-6 h-6 object-cover max-md:w-5 max-md:h-5"
        alt="CV"
      />
      <img
        src={theme === "light" ? Instagram : Instagramdark}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        className="w-6 h-6 object-cover max-md:w-5 max-md:h-5"
        alt="Instagram"
      />
    </div>
  );
};
