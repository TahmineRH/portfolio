import { useTranslation } from "react-i18next";
import { Spotlight } from "../components/ui/spotlight";
import { ContactForm } from "../components/contact/form";

export default function ContactMe() {
  const { t } = useTranslation();

  return (
    <main className="w-full">
      <div className="relative flex h-96 max-md:h-72 w-full overflow-hidden md:items-center md:justify-center">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
          <h1 className="bg-opacity-50 bg-gradient-to-b from-foreground/10 h-22 to-foreground dark:from-foreground dark:to-foreground/10 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
            {t("contact.title")}
          </h1>
          <p className="transition-colors text-center mx-auto  bg-gradient-to-r pt-4  from-foreground/[35%]  via-foreground/90 to-foreground/[35%] bg-na dark:from-neutral-300/[35%] dark:via-neutral-300/90  dark:to-neutral-300/[35%] bg-clip-text text-transparent">
            {t("contact.description")}
          </p>
        </div>
      </div>
      <div className="w-full px-4 md:-mt-16">
        <ContactForm />
      </div>
    </main>
  );
}
