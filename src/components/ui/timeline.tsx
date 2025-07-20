import { motion, useScroll, useTransform } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full md:px-10" ref={containerRef}>
      <div ref={ref} className="relative mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pb-20 md:gap-10 ltr:max-md:pl-16 rtl:max-md:pr-16 max-md:px-6"
          >
            <div className="h-10 absolute rtl:right-3 ltr:left-3 w-10 rounded-full bg-primary/20 flex items-center justify-center z-10">
              <div className="h-4 w-4 rounded-full bg-primary  border border-secondary dark:border-neutral-700 p-2 " />
            </div>

            <h3 className="hidden md:block text-xl rtl:md:pr-20 ltr:md:pl-20 md:text-5xl font-bold text-card max-md:mt-4">
              {item.title}
            </h3>

            <div className="relative rtl:md:pr-4 ltr:md:pl-4 rtl:md:pl-20 ltr:md:pr-4 w-full">
              <h3 className="md:hidden block text-4xl mb-4 text-start font-bold text-card">
                {item.title}
              </h3>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute rtl:right-8 ltr:left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-secondary via-primary to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
