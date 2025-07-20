import {
  EllipsisVertical,
  FolderOpen,
  Home,
  Info,
  Mail,
  Settings,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";
import LangToggle from "../locale/local";
import ToggleTheme from "../theme/theme";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import SlideTabs from "./slide-tabs";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const location = useLocation();

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (window.innerWidth < 768) return;
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShow(!(currentY > lastScrollY && currentY > 50));
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    {
      name: t("navbar.home"),
      path: "/",
      description: t("navbar.descriptions.home"),
      icon: <Home className="w-5 h-5" />,
    },
    {
      name: t("navbar.about"),
      path: "/about",
      description: t("navbar.descriptions.about"),
      icon: <Info className="w-5 h-5" />,
    },
    {
      name: t("navbar.projects"),
      path: "/projects",
      description: t("navbar.descriptions.projects"),
      icon: <FolderOpen className="w-5 h-5" />,
    },
    {
      name: t("navbar.contact"),
      path: "/contact",
      description: t("navbar.descriptions.contact"),
      icon: <Mail className="w-5 h-5" />,
    },
  ];

  return (
    <nav>
      {/* Desktop */}
      <div
        className={cn(
          "fixed hidden md:block m-4 left-1/2 top-0 -translate-x-1/2 w-fit z-30 transition-transform duration-1000 rounded-lg bg-foreground/5 backdrop-blur-md",
          show ? "translate-y-0" : "-translate-y-32"
        )}
      >
        <SlideTabs navLinks={navLinks} />
        {/* <div className="px-4 py-3 flex justify-between items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "hover:text-secondary transition-colors duration-500",
                location.pathname === link.path && "text-primary"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div> */}
      </div>

      {/* Mobile */}
      <div className="md:hidden fixed top-4 right-4 z-30">
        <NavigationMenu dir={i18n.language === "fa" ? "rtl" : "ltr"}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="rounded-lg bg-foreground/5 backdrop-blur-3xl px-4 py-2">
                {t("navbar.menu")}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-4 w-85">
                <div className="flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={cn(
                        "flex bg-foreground/10 backdrop-blur-2xl items-center gap-3 px-2 py-3 rounded-lg hover:bg-accent/20 transition-colors duration-300",
                        location.pathname === link.path && " text-primary"
                      )}
                    >
                      <div className="bg-background/20 rounded-2xl p-3">
                        {link.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium">{link.name}</span>
                        <span className="text-foreground/80 text-xs">
                          {link.description}
                        </span>
                      </div>
                    </Link>
                  ))}
                  <Popover>
                    <PopoverTrigger
                      className={cn(
                        " bg-foreground/10 backdrop-blur-2xl items-center  px-2 py-3 rounded-lg hover:bg-accent/20 transition-colors duration-300"
                      )}
                    >
                      <div className="flex items-center justify-between gap-3 w-full">
                        <div className="flex gap-3">
                          <div className="bg-background/20 rounded-2xl p-3">
                            <Settings className="w-5 h-5" />
                          </div>
                          <div className="flex flex-col items-start">
                            <span className="font-medium">
                              {t("navbar.settings")}
                            </span>
                            <span className="text-foreground/80 text-xs">
                              {t("navbar.descriptions.settings")}
                            </span>
                          </div>
                        </div>
                        <EllipsisVertical className="h-5 text-foreground/70" />
                      </div>
                    </PopoverTrigger>
                    <PopoverContent
                      side="bottom"
                      align="end"
                      className="w-40 space-y-2 bg-background/70 py-2 px-0"
                    >
                      {/* Theme toggle */}
                      <div className="flex items-center justify-between h-10 px-2">
                        <span className="text-sm">{t("navbar.theme")}</span>
                        <ToggleTheme variant="switch" />
                      </div>
                      <div className="border-t border-foreground/30"></div>
                      {/* Language switcher */}
                      <div className="flex items-center justify-between h-10 px-2">
                        <span className="text-sm">{t("navbar.language")}</span>
                        <LangToggle variant="switch" />
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
