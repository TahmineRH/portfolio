import image from "@/assets/images/jase-bloor-oCZHIa1D4EU-unsplash.webp";
import { GlassDiv } from "liquid-glass-reactjs";
import { Sparkles } from "lucide-react";
import * as motion from "motion/react-client";

export default function LiquidGlassLive() {
  return (
    <div
      className="relative object-cover h-[80vh] rounded-lg w-full bg-cover bg-center flex justify-center items-center z-20"
      style={{ backgroundImage: `url(${image})` }}
    >
      <motion.div
        drag
        dragDirectionLock
        dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
        dragTransition={{ bounceStiffness: 1000, bounceDamping: 400 }}
        dragElastic={0.4}
        whileDrag={{ cursor: "grabbing" }}
        className="absolute h-[500px] w-full md:w-[400px]"
      >
        <div
          className={`max-md:w-full w-[400px] min-h-[500px] p-4 flex items-center justify-center transition-all duration-500`}
        >
          <GlassDiv className="rounded-3xl p-8 flex flex-col items-center justify-between h-full shadow-2xl gap-6">
            <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center shadow-inner backdrop-blur-sm z-10">
              <Sparkles className="text-white w-8 h-8" />
            </div>

            <h1 className="text-white text-3xl font-extrabold tracking-wide text-center z-10">
              LiquidGlass UI
            </h1>

            <h2 className="text-white text-lg opacity-80 font-medium text-center z-10">
              Glassmorphism for Modern React Apps
            </h2>

            <p className="text-white text-sm text-center z-10 leading-relaxed px-4">
              Elevate your UI with stunning frosted-glass panels. This component
              offers smooth blur, animated shine, and zero external CSS. Works
              out of the box with Tailwind or vanilla React styles. Fully
              customizable via props or classNames.
            </p>

            <div className="flex flex-col items-center gap-4 z-10 mt-2 w-full">
              <a
                href="https://www.npmjs.com/package/liquid-glass-reactjs"
                className="text-white/80 text-sm underline hover:text-white transition w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full py-2 bg-white/20 text-white font-semibold rounded-xl border border-white/30 hover:bg-white/30 transition duration-200">
                  Get Started
                </button>
              </a>
              <a
                href="https://github.com/TahmineRH/liquid-glass"
                className="text-white/80 text-sm underline hover:text-white transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </GlassDiv>
        </div>
      </motion.div>
    </div>
  );
}
