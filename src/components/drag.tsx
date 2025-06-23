import * as motion from "motion/react-client";
import { MyPic } from "./home/my-pic";

export default function Drag() {
  return (
    <div className="relative 2xl:w-96 2xl:h-96 h-80 w-80 max-md:h-108 max-md:w-96">
      <motion.div
        drag
        dragDirectionLock
        dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
        dragTransition={{ bounceStiffness: 1000, bounceDamping: 15 }}
        dragElastic={0.1}
        whileDrag={{ cursor: "grabbing" }}
        style={{
          width: 300,
          height: 320,
          position: "absolute",
        }}
      >
        <MyPic />
      </motion.div>
    </div>
  );
}
