import Pic from "@/assets/images/4044.png";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

function NotFound() {
  const { t } = useTranslation();
  return (
    <main className="mt-10 max-md:mt-0 max-md:mx-auto mx-8 flex flex-col justify-center items-center">
      <img
        src={Pic}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        className=" w-full h-screen max-md:h-96 object-contain "
        alt="404 Not Found"
      />
      <div className="absolute top-5/7 left-2/7 max-md:static max-md:w-full max-md:left-auto max-md:px-8 text-center flex flex-col gap-4 mt-12">
        <p className="w-96 text-xs font-mono max-md:w-full">
          {t("notFound.description")}
        </p>
        <Link to="/" className="w-full flex justify-center">
          <Button className="flex items-center justify-center ">
            {t("notFound.buttonText")} <ArrowRight className="rtl:rotate-180" />
          </Button>
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
