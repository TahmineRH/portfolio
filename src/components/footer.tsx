import cat from "@/assets/cat.png";
import CVdark from "@/assets/icons/cv-dark.svg";
import CV from "@/assets/icons/cv.svg";
import GitHubdark from "@/assets/icons/github-dark.svg";
import GitHub from "@/assets/icons/github.svg";
import Instagramdark from "@/assets/icons/instagram-dark.svg";
import Instagram from "@/assets/icons/instagram.svg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useThemeStore } from "../store/theme";

export default function Footer() {
  const { t } = useTranslation();

  const theme = useThemeStore((state) => state.theme);

  return (
    <footer className="relative mt-32 h-96 overflow-hidden ">
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-yellow-600  dark:bg-yellow-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2 + Math.random() * 2, repeat: Infinity }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
        <motion.p
          className="text-lg mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {t("footer.slogan")}
        </motion.p>
        <motion.p
          className="text-sm opacity-70 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="flex items-center justify-center gap-1">
            <span className="transition-colors bg-gradient-to-r  from-foreground/[35%]  via-foreground/90 to-foreground/[35%] dark:from-neutral-300/[35%] dark:via-neutral-300/90  dark:to-neutral-300/[35%] bg-clip-text text-transparent">
              {t("footer.footerNote")}
            </span>
            ✨
          </div>
        </motion.p>
        {/* ناوبری Cute */}
        <div className="flex justify-center gap-6 text-lg mb-8 font-semibold">
          <Link to="/" className="hover:text-primary transition-all">
            {t("navbar.home")}
          </Link>
          <Link to="/about" className="hover:text-primary transition-all">
            {t("navbar.about")}
          </Link>
          <Link to="/projects" className="hover:text-primary transition-all">
            {t("navbar.projects")}
          </Link>
          <Link to="/contact" className="hover:text-primary transition-all">
            {t("navbar.contact")}
          </Link>
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-6 text-xl">
          <a
            href="https://github.com/yourname"
            target="_blank"
            className="hover:text-[#84594d] transition"
          >
            <img
              src={theme === "light" ? GitHub : GitHubdark}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              className=" w-6 h-6 object-contain"
              alt="GitHub"
            />
          </a>
          <a
            href="https://instagram.com/yourname"
            target="_blank"
            className="hover:text-[#84594d] transition"
          >
            <img
              src={theme === "light" ? CV : CVdark}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              className=" w-6 h-6 object-cover"
              alt="CV"
            />
          </a>
          <a
            href="mailto:you@example.com"
            className="hover:text-[#84594d] transition"
          >
            <img
              src={theme === "light" ? Instagram : Instagramdark}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              className=" w-6 h-6 object-cover"
              alt="Instagram"
            />
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 w-full h-80 bg-gradient-to-t from-[#e3d0c4] dark:from-primary/20 dark:via-primary/9 to-transparent pointer-events-none" />

      <img
        src={cat}
        alt="A cozy Ghibli-style cat"
        className="absolute bottom-6 left-6 w-12 h-12 animate-float z-10 pointer-events-none"
      />
    </footer>
  );
}
