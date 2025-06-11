import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import childhood from "@/assets/me/newww.png";
import teen from "@/assets/me/teen2.png";
import young from "@/assets/me/young.png";
import programmer from "@/assets/me/programmer.png";
import Title from "./title";
import { useTranslation } from "react-i18next";

const sectionVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

interface SectionProps {
  title: string;
  text: string;
  image: string;
  reverse: boolean;
  maskDirection: string;
}

function Section({ title, text, image, reverse, maskDirection }: SectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div className="w-full h-fit justify-center flex flex-col items-center">
      <Title>{title}</Title>
      <motion.div
        ref={ref}
        variants={sectionVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className={`w-full flex justify-between items-center ${
          reverse ? "flex-row-reverse rtl:flex-row" : "rtl:flex-row-reverse"
        }`}
      >
        <motion.img
          src={image}
          alt="section"
          className="w-96 max-h-100 object-contain"
          style={{
            maskImage: maskDirection,
            WebkitMaskImage: maskDirection,
          }}
        />
        <p className="w-96 min-h-100 text-center flex items-center">{text}</p>
      </motion.div>
    </div>
  );
}

function TimeLine() {
  const { t } = useTranslation();

  return (
    <div className="px-32 w-full mt-32 relative ">
      <svg
        className="absolute left-1/2 top-0 -translate-x-1/2 max-md:hidden"
        width="40"
        height="100%"
        viewBox="0 0 40 1600"
        preserveAspectRatio="none"
      >
        <path
          d="M20,0 Q-20,100 20,200 Q60,300 20,400 Q-20,500 20,600 Q60,700 20,800 Q-20,900 20,1000 Q60,1100 20,1200 Q-20,1300 20,1400 Q60,1500 20,1600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="15, 20"
        />
      </svg>

      <Section
        title={t("childhood.title")}
        text={t("childhood.paragraph")}
        image={childhood}
        reverse={false}
        maskDirection="linear-gradient(to top, black 0%, black 20%, black 90%, transparent 100%)"
      />
      <Section
        title={t("adolescence.title")}
        text={t("adolescence.paragraph")}
        image={teen}
        reverse={true}
        maskDirection="linear-gradient(to top, black 0%, black 20%, black 90%, transparent 100%)"
      />
      <Section
        title={t("university.title")}
        text={t("university.paragraph")}
        image={young}
        reverse={false}
        maskDirection="linear-gradient(to bottom, black 0%, black 20%, black 90%, transparent 100%)"
      />
      <Section
        title={t("now.title")}
        text={t("now.paragraph")}
        image={programmer}
        reverse={true}
        maskDirection="linear-gradient(to left, black 0%, black 20%, black 90%, transparent 100%)"
      />
    </div>
  );
}

export default TimeLine;
