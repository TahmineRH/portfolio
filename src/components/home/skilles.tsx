import { useTranslation } from "react-i18next";

function Skilles() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-4 justify-center">
        <h1 className="2xl:text-5xl text-4xl max-md:text-3xl font-medium">
          {t("skills.title")}
        </h1>
        <h1 className="text-lg font-light">{t("skills.description")}</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <h3 className="font-medium text-xl">Languages</h3>
          <ul className="text-sm flex flex-col gap-4">
            <li>JavaScript & TypeScript</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-medium text-xl">Frameworks & Libraries</h3>
          <ul className="text-sm flex flex-col gap-4">
            <li>React, Next.js & CRA</li>
            <li>React Native</li>
            <li>Vue.js</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-medium text-xl">UI & Styling</h3>
          <ul className="text-sm flex flex-col gap-4">
            <li>Accessible HTML & CSS</li>
            <li>Tailwind</li>
            <li>CSS-in-JS</li>
            <li>UI Frameworks</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-medium text-xl">Other</h3>
          <ul className="text-sm flex flex-col gap-4">
            <li>Three.js</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skilles;
