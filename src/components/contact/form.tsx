import emailjs from "emailjs-com";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "../../lib/utils";
import { BottomGradient } from "../ui/bottom-Gradient";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export function ContactForm() {
  const { t } = useTranslation();

  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    const name = (form.current.elements.namedItem("name") as HTMLInputElement)
      .value;
    const email = (form.current.elements.namedItem("email") as HTMLInputElement)
      .value;

    // ارسال به admin
    emailjs
      .sendForm(
        "service_yjxq9pc",
        "template_2pdmfbj",
        form.current,
        "OYxw0XzQJ1YnGEJkm"
      )
      .then(() => {
        // ارسال auto-reply برای کاربر
        return emailjs.send(
          "service_yjxq9pc",
          "template_i2fxnms",
          { name, to_email: email },
          "OYxw0XzQJ1YnGEJkm"
        );
      })
      .then(() => {
        setSent(true);
        setError(false);
        form.current?.reset();
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setSent(false);
      });
  };

  return (
    <div className="shadow-input mx-auto w-full max-w-lg max-md:w-full bg-card p-4 rounded-lg md:p-8">
      <h2 className="text-xl font-bold">
        {t("contact.form.title")}
      </h2>
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
          className="group/btn relative block w-full bg-foreground/90 duration-500 text-background hover:bg-foreground/5 hover:text-foreground"
        >
          {t("contact.form.submit")}
          <BottomGradient />
        </Button>

        {sent && (
          <p className="text-green-500 text-sm">
            {t("contact.form.name.succes")}
          </p>
        )}
        {error && (
          <p className="text-red-500 text-sm">{t("contact.form.name.error")}</p>
        )}
      </form>
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
