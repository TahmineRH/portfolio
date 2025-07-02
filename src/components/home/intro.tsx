import { useTranslation } from "react-i18next";
import Drag from "../drag";
import { Button } from "../ui/button";
import { SocialMedia } from "./social-media";
import { Link } from "react-router-dom";

function Intro() {
  const { t } = useTranslation();

  return (
    <div className="w-full flex max-md:flex-col max-md:items-center max-md:justify-center justify-between gap-20 max-md:gap-10 items-start md:h-dvh 2xl:pt-72 pt-52 max-md:pt-32 max-xl:flex-wrap-reverse">
      <div className="flex flex-col gap-10 max-md:gap-4">
        <h1 className="2xl:text-7xl text-6xl max-md:text-4xl w-200 max-md:w-auto font-medium max-md:leading-8 leading-20">
          {t("name")}
        </h1>
        <h1 className="max-md:py-4 text-lg max-md:text-base leading-8 max-md:leading-6  w-200 md:font-light max-md:text-foreground/80 max-md:w-full">
          {t("intro")}
        </h1>
        <div className="flex gap-4">
          <Button className="w-36 duration-500 hover:text-background bg-foreground/5 text-foreground ">
            {t("projects")}
          </Button>
          <Link to="/about">
            <Button
              className="w-36 duration-500 hover:text-white bg-secondary/50 text-foreground"
              variant={"secondary"}
            >
              {t("about")}
            </Button>
          </Link>
        </div>
        <SocialMedia />
      </div>
      <div className="relative 2xl:w-96 2xl:h-96 h-80 w-80  max-md:h-108 max-md:w-fit">
        <Drag />
      </div>
    </div>
  );
}

export default Intro;
