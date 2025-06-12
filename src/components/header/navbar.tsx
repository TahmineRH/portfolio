import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";

export default function Navbar() {
  const location = useLocation();
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 50) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed m-4 left-1/2 top-0 -translate-x-1/2 w-96 z-30 transition-transform duration-1000 rounded-lg bg-foreground/5 backdrop-blur-md",
        show ? "translate-y-0" : "-translate-y-32"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
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
      </div>
    </nav>
  );
}
