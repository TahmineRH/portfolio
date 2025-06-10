import { useTranslation } from "react-i18next";
import Drag from "../drag";
import { Button } from "../ui/button";
import { SocialMedia } from "./social-media";
import { Link } from "react-router-dom";

function Intro() {
  const { t } = useTranslation();

  return (
    <div className="w-full flex max-md:flex-col-reverse justify-center gap-20 items-start 2xl:py-52 py-40 max-md:px-4">
      <div className="flex flex-col gap-10">
        <h1 className="2xl:text-7xl text-6xl max-md:text-5xl w-200 font-medium max-md:leading-8 leading-20 max-md:w-full">
          {t("name")}
        </h1>
        <h1 className="text-lg leading-8 w-200 font-light max-md:w-full">
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
      <div className="relative 2xl:w-96 2xl:h-96 h-80 w-80 ">
        <Drag />
      </div>
    </div>
  );
}

export default Intro;
