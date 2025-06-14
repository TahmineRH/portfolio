import Logo from "@/assets/logo.svg";
import LangToggle from "../locale/local";
import ToggleTheme from "../theme/theme";

const Header = () => {
  return (
    <div className="absolute px-12 top-0 right-0 flex justify-between w-full items-center z-10 bg-background/20 backdrop-blur-xl">
      <div>
        <div className="w-16 h-16">
          <img src={Logo} className="object-cover w-full" alt="logo" />
        </div>
      </div>
      <div className="flex items-center gap-8">
        <LangToggle />
        <ToggleTheme />
      </div>
    </div>
  );
};

export default Header;
