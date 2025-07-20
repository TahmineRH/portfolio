import { motion } from "framer-motion";
import type { Dispatch, SetStateAction } from "react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

export default function SlideTabs({
  navLinks,
}: {
  navLinks: { name: string; path: string }[];
}) {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit p-0.5"
    >
      {navLinks.map((link) => (
        <Link
          to={link.path}
          className={cn(
            "hover:text-secondary transition-colors duration-500 z-30",
            location.pathname === link.path && "text-primary"
          )}
        >
          <Tab setPosition={setPosition}>{link.name}</Tab>
        </Link>
      ))}

      <Cursor position={position} />
    </ul>
  );
}

import type { ReactNode } from "react";

const Tab = ({
  children,
  setPosition,
}: {
  children: ReactNode;
  setPosition: Dispatch<SetStateAction<Position>>;
}) => {
  const ref = useRef<null | HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-20 block cursor-pointer  px-5 py-3"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-md bg-background md:h-12"
    />
  );
};

type Position = {
  left: number;
  width: number;
  opacity: number;
};
