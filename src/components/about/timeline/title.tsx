import flagLight from "@/assets/flag-light.png";
import flag from "@/assets/flag2.png";
import { useThemeStore } from "../../../store/theme";

type TitleProps = {
  children: React.ReactNode;
};

function Title({ children }: TitleProps) {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div
      className="w-80 h-25 relative bg-background"
      style={{
        backgroundImage: `url(${theme === "light" ? flagLight : flag})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 text-4xl font-[Signature] rtl:font-[PlaypenSansArabic]">
        {children}
      </span>
    </div>
  );
}

export default Title;
