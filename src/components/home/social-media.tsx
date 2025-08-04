import { Github } from "lucide-react";
import CV from "../../assets/icons/cv";
import Instagram from "../../assets/icons/instagram";

export const SocialMedia = () => {
  return (
    <div className="flex gap-6 max-md:gap-4">
      <a
        href="/Tahmine-Rahbar-Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:scale-110 overflow-visible duration-300"
      >
        <CV className="h-6 w-6 max-md:w-5 max-md:h-5  object-contain text-foreground dark:text-primary" />
      </a>
      <a
        href="https://github.com/TahmineRH"
        target="_blank"
        className="transition hover:scale-110 overflow-visible duration-300"
      >
        <Github className=" w-6 h-6 max-md:w-5 max-md:h-5 object-contain text-foreground dark:text-primary" />
      </a>
      <a
        href="https://instagram.com/tahmine_rhb"
        target="_blank"
        className="transition hover:scale-110 overflow-visible duration-300"
      >
        <Instagram className="h-6 w-6 max-md:w-5 max-md:h-5  text-foreground dark:text-primary" />
      </a>
    </div>
  );
};
