import { useTranslation } from "react-i18next";
import ProjectsList from "../components/projects/projects-list";
import { Spotlight } from "../components/ui/spotlight";

function Projects() {
  const { t } = useTranslation();

  return (
    <main className="space-y-14 lg:space-y-32 px-4 mx-auto ">
      <div className="relative flex md:h-96 h-80 w-full overflow-hidden md:items-center md:justify-center">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-10 md:pt-0">
          <h1 className="md:h-22 h-12 bg-opacity-50 bg-gradient-to-tr from-foreground from-20% via-foreground/50 via-50% to-80% to-foreground dark:from-foreground/10 dark:via-foreground dark:to-foreground/10  bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
            {t("Projects.title")}
          </h1>
          <p className="transition-colors text-center mx-auto  bg-gradient-to-r pt-4  from-foreground/[35%]  via-foreground/90 to-foreground/[35%] bg-na dark:from-neutral-300/[35%] dark:via-neutral-300/90  dark:to-neutral-300/[35%] bg-clip-text text-transparent">
            {t("Projects.description")}
          </p>
        </div>
      </div>
      <ProjectsList />
    </main>
  );
}

export default Projects;
