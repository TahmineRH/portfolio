import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "motion/react";
import React, { useRef } from "react";
import { cn } from "../../lib/utils";

export function BorderWrapper({
  children,
  borderRadius = "0.25rem",
  duration = 3000,
  containerClassName,
  borderClassName,
}: {
  children: React.ReactNode;
  borderRadius?: string;
  duration?: number;
  initialProgress?: number;
  containerClassName?: string;
  borderClassName?: string;
  rx?: string;
  ry?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden p-[1px] ",
        containerClassName
      )}
      style={{ borderRadius }}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder
          duration={duration}
          rx={"0%"}
          ry={"0%"}
          initialProgress={0}
        >
          <div
            className={cn(
              "h-22 w-96 bg-[radial-gradient(#00FF00_40%,transparent_60%)] opacity-[0.8]",
              borderClassName
            )}
          />
        </MovingBorder>
        <MovingBorder
          duration={duration}
          rx={"0%"}
          ry={"0%"}
          initialProgress={4000}
        >
          <div
            className={cn(
              "h-22 w-196 bg-[radial-gradient(#00FF00_40%,transparent_60%)] opacity-[0.8]",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      <div
        className="relative z-10 w-full h-full  backdrop-blur-3xl"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        {children}
      </div>
    </div>
  );
}

export const MovingBorder = ({
  children,
  duration = 900,
  rx,
  ry,
  initialProgress = 0,
  svgProps,
  rectProps,
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  initialProgress?: number;
  svgProps?: React.SVGProps<SVGSVGElement>;
  rectProps?: React.SVGProps<SVGRectElement>;
}) => {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue<number>(initialProgress);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMs = length / duration;
      progress.set(((time + initialProgress) * pxPerMs) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val)?.x
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val)?.y
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...svgProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
          {...rectProps}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
