import quote from "@/assets/icons/quote.svg";
import { Dot } from "lucide-react";
import { useTranslation } from "react-i18next";

function Testimonials() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-10 mt-10">
      <div className="flex flex-col gap-4 max-md:gap-1 justify-center">
        <h1 className="2xl:text-5xl text-4xl max-md:text-3xl font-medium">
          {t("Testimonials.title")}
        </h1>
        <h1 className="text-lg font-light max-md:text-base max-md:text-foreground/90">
          {t("Testimonials.description")}
        </h1>
      </div>
      <div className="flex flex-col gap-12  justify-center text-foreground/80">
        <div className="flex justify-start gap-8">
          <img src={quote} alt="Theme icon" className="w-12 h-12" />
          <div>
            <p className="mb-2 font-light">{t("Testimonials.arshia.testimonial")}</p>
            <span className="font-semibold text-lg">
              {t("Testimonials.arshia.name")}
            </span>{" "}
            <Dot className="inline-block w-4 h-4" />
            <span>{t("Testimonials.arshia.role")}</span>
            <span>{t("Testimonials.arshia.company")}</span>
          </div>
        </div>
        <div className="flex justify-start gap-8">
          <img src={quote} alt="Theme icon" className="w-12 h-12" />
          <div>
            <p className="mb-2 font-light">{t("Testimonials.alza.testimonial")}</p>
            <span className="font-semibold text-lg">
              {t("Testimonials.alza.name")}
            </span>{" "}
            <Dot className="inline-block w-4 h-4" />
            <span>{t("Testimonials.alza.role")}, </span>
            <span>{t("Testimonials.alza.company")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
