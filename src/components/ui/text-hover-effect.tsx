import { motion } from "motion/react";

export const TextEffect = ({ text }: { text: string }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 300 120"
      xmlns="http://www.w3.org/2000/svg"
      className="select-none"
    >
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent font-[helvetica] text-9xl font-bold stroke-foreground/30"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.3"
        mask="url(#textMask)"
        className="fill-transparent font-[helvetica] text-9xl font-bold"
      >
        {text}
      </text>
    </svg>
  );
};
