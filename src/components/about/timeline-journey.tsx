import childhood from "@/assets/me/newww.png";
import programmer from "@/assets/me/programmer.png";
import adolescence from "@/assets/me/teen2.png";
import young from "@/assets/me/young.png";
import { useTranslation } from "react-i18next";
import { Timeline } from "../ui/timeline";

function TimelineJourney() {
  const { t } = useTranslation();

  const data = [
    {
      title: t("about.childhood.title"),
      content: (
        <div>
          <p className="mb-8 text-sm text-foreground/80">
            {t("about.childhood.paragraph")}
          </p>
          <div className="w-full bg-card rounded-lg">
            <img
              src={childhood}
              alt="childhood"
              className="max-h-96 w-full rounded-lg object-contain"
            />
          </div>
        </div>
      ),
    },
    {
      title: t("about.adolescence.title"),
      content: (
        <div>
          <p className="mb-8 text-sm text-foreground/80">
            {t("about.adolescence.paragraph")}
          </p>
          <div className="w-full bg-card rounded-lg">
            <img
              src={adolescence}
              alt="adolescence"
              className="max-h-96 w-full rounded-lg object-contain"
            />
          </div>
        </div>
      ),
    },
    {
      title: t("about.university.title"),
      content: (
        <div>
          <p className="mb-8 text-sm text-foreground/80">
            {t("about.university.paragraph")}
          </p>
          <div className="w-full bg-card rounded-lg">
            <img
              src={young}
              alt="young"
              className="w-full rounded-lg object-contain"
            />
          </div>
        </div>
      ),
    },
    {
      title: t("about.now.title"),
      content: (
        <div>
          <p className="mb-8 text-sm text-foreground/80">
            {t("about.now.paragraph")}
          </p>
          <div className="w-full bg-card rounded-lg">
            <img
              src={programmer}
              alt="programmer"
              className="w-full rounded-lg object-contain"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
export default TimelineJourney;
