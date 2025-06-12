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
              className="w-full h-full object-cover "
              alt={`project-${card.id}`}
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeCard && (
          <>
            {/* بک‌گراند تار */}
            <motion.div
              className="fixed inset-0 bg-black/70 z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCard(null)}
            />

            {/* کارت وسط صفحه */}
            <motion.div
              layoutId={`card-${activeCard.id}`}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 w-2xl h-[80vh] rounded-lg shadow-2xl overflow-hidden"
              onClick={() => setActiveCard(null)}
            >
              <div className="relative w-full h-full">
                <img
                  src={me1}
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  className="w-full h-full object-cover"
                  alt="preview"
                />
              </div>
              <motion.div
                className="fixed bottom-0 left-0 w-full h-52 bg-background/50 z-20 text-background"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                exit={{ y: 100 }}
                transition={{
                  type: "tween",
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

            {/* نوار مشکی پایین صفحه */}
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
