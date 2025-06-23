import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import travel from "@/assets/travel.png";
import hesamsanat from "@/assets/p1.png";
import treeD from "@/assets/3d.png";
import ai from "@/assets/AI.png";
import { cn } from "../../lib/utils";

const cards = [
  {
    id: 1,
    title: "Card One",
    content: "This is card one",
    col: 4,
    picture: treeD,
  },
  {
    id: 2,
    title: "Card Two",
    content: "This is card two",
    col: 3,
    picture: hesamsanat,
  },
  {
    id: 4,
    title: "Card Four",
    content: "This is card four",
    col: 3,
    picture: travel,
  },
  {
    id: 3,
    title: "Card Three",
    content: "This is card three",
    col: 4,
    picture: ai,
  },
];

type Card = { id: number; title: string; content: string; picture: string };

export default function ZoomDialogCards() {
  const [activeCard, setActiveCard] = useState<Card | null>(null);

  return (
    <div className="relative place-items-center 2xl:px-52 lg:px-40 2xl:py-4 h-full w-full">
      <div className="grid grid-cols-7 2xl:gap-8 gap-4 h-full w-full ">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            layoutId={`card-${card.id}`}
            className={cn(
              `rounded-lg bg-card max-lg:col-span-7 col-span-${card.col} flex items-center justify-center text-center overflow-hidden`
            )}
            onClick={() => setActiveCard(card)}
          >
            <img
              src={card.picture}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              className="w-full h-full max-lg:h-80 max-md:h-64 object-contain "
              alt={`project-${card.id}`}
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeCard && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCard(null)}
            />

            <motion.div
              layoutId={`card-${activeCard.id}`}
              className="fixed bg-background top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 w-3xl max-md:w-sm max-md:h-96 h-[80vh] rounded-xl shadow-2xl overflow-hidden"
              onClick={() => setActiveCard(null)}
            >
              <div className="relative w-full h-full px-12">
                <img
                  src={activeCard.picture}
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  className="w-full h-full object-contain object-top"
                  alt="preview"
                />
              </div>
              <motion.div
                className="fixed bottom-0 left-0 w-full h-52 bg-black/50 z-20"
                initial={{ y: 400 }}
                animate={{ y: 20 }}
                exit={{ y: 300 }}
                transition={{
                  type: "spring",
                  damping: 15,
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-sm">
                  <h2 className="text-3xl font-bold mb-2">
                    {activeCard.title}
                  </h2>
                  <p className="text-lg">{activeCard.content}</p>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
