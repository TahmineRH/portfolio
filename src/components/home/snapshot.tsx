import { useTranslation } from "react-i18next";
import ZoomDialogCards from "./div";

function SnapshotProject() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-10 mt-10 lg:h-svh">
      <div className="flex flex-col gap-4 max-md:gap-1 justify-center">
        <h1 className="2xl:text-5xl text-4xl max-md:text-3xl font-medium">
          {t("snapshot.title")}
        </h1>
        <h1 className="text-lg font-light max-md:text-base max-md:text-foreground/90">{t("snapshot.description")}</h1>
      </div>
      <div className="flex-grow-1 h-6/12">
        <ZoomDialogCards />
      </div>
    </div>
  );
}

export default SnapshotProject;
