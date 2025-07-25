import emailjs from "emailjs-com";
import { RotateCw } from "lucide-react";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { cn } from "../../lib/utils";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import { BottomGradient } from "../ui/bottom-Gradient";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export function ContactForm() {
  const { t } = useTranslation();

  const form = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);

    // const name = (form.current.elements.namedItem("name") as HTMLInputElement)
    //   .value;
    // const email = (form.current.elements.namedItem("email") as HTMLInputElement)
    //   .value;

    emailjs
      .sendForm(
        "service_yjxq9pc",
        "template_2pdmfbj",
        form.current,
        "OYxw0XzQJ1YnGEJkm"
      )
      // .then(() => {
      //   return emailjs.send(
      //     "service_yjxq9pc",
      //     "template_i2fxnms",
      //     { name, email },
      //     "OYxw0XzQJ1YnGEJkm"
      //   );
      // })
      .then(() => {
        toast.success(t("contact.form.succes"));
        form.current?.reset();
      })
      .catch((err) => {
        console.error(err);
        toast.error(t("contact.form.error"));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="mx-auto w-full max-w-lg max-md:w-full border rounded-lg border-black/5 dark:border-white/5 overflow-hidden">
      <BackgroundBeamsWithCollision>
        <div className="p-4 md:p-8 z-20">
          <h2 className="text-xl font-bold">{t("contact.form.title")}</h2>
          <p className="mt-2 max-w-sm text-xs text-foreground/70">
            {t("contact.form.description")}
          </p>
          <form ref={form} onSubmit={sendEmail} className="mt-8 mb-2 space-y-4">
            <LabelInputContainer>
              <Label htmlFor="name">{t("contact.form.name.title")}</Label>
              <Input
                id="name"
                name="name"
                placeholder={t("contact.form.name.placeholder")}
                type="text"
                required
              />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="email">{t("contact.form.email.title")}</Label>
              <Input
                id="email"
                name="email"
                placeholder={t("contact.form.email.placeholder")}
                type="email"
                required
              />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="message">{t("contact.form.message.title")}</Label>
              <Textarea
                placeholder={t("contact.form.message.placeholder")}
                name="message"
                required
              />
            </LabelInputContainer>

            <Button
              type="submit"
              disabled={loading}
              className="group/btn relative disabled:bg-foreground/80 block w-full bg-foreground duration-500 text-background hover:bg-foreground/5 hover:text-foreground"
            >
              {loading ? (
                <RotateCw className="animate-spin" />
              ) : (
                t("contact.form.submit")
              )}
              <BottomGradient />
            </Button>
          </form>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex w-full flex-col space-y-2", className)}>
    {children}
  </div>
);
