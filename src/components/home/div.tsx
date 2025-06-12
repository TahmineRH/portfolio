import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import me1 from "@/assets/a.jpg";
import { cn } from "../../lib/utils";

const cards = [
  { id: 1, title: "Card One", content: "This is card one", col: 3 },
  { id: 2, title: "Card Two", content: "This is card two", col: 2 },
  { id: 4, title: "Card Four", content: "This is card four", col: 4 },
  { id: 3, title: "Card Three", content: "This is card three", col: 1 },
];

type Card = { id: number; title: string; content: string };

export default function ZoomToCenterCard() {
  const [activeCard, setActiveCard] = useState<Card | null>(null);

  return (
    <div className="relative place-items-center px-40 py-10 h-screen w-full">
      <div className="grid grid-cols-5 gap-2 h-full w-full">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            layoutId={`card-${card.id}`}
            className={cn(
              `col-span-${card.col}`,
              "rounded-lg shadow-lg flex items-center justify-center text-center hover:cursor-pointer overflow-hidden"
            )}
            onClick={() => setActiveCard(card)}
          >
            <img
              src={me1}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              className=" w-full h-full object-cover"
              alt={`project-${card.id}`}
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeCard && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/80 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCard(null)}
            />
            <motion.div
              layoutId={`card-${activeCard.id}`}
              className="fixed bg-background top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-3xl h-[80vh] rounded-xl shadow-xl overflow-hidden"
              onClick={() => setActiveCard(null)}
            >
              <motion.div
                className="w-full h-full"
                  initial={{ y: 0, scale: 0.99 }}
                animate={{ y: -200, scale: 1.1 }}
                exit={{ y: 0, scale: 1 }}
                transition={{
                  type: "tween",
                  delay: 0.05,
                }}
              >
                <img
                  src={me1}
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  className=" w-full h-full object-cover"
                  alt={`project`}
                />
              </motion.div>

              <motion.div
                className="w-full h-96 text-center "
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: -100, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{
                  type: "tween",
                  delay: 0.05,
                }}
              >
                <h2 className="text-xl font-bold mb-1">{activeCard.title}</h2>
                <p className="text-sm text-background">{activeCard.content}</p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
