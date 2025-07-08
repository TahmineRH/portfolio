import { Link } from "react-router-dom";
import Logo from "../../assets/icons/logo";
import LangToggle from "../locale/local";
import ToggleTheme from "../theme/theme";

const Header = () => {
  return (
    <div className="max-md:hidden absolute px-12 top-0 right-0 flex justify-between w-full items-center z-10 bg-background/20 backdrop-blur-xl">
      <div>
        <div className="w-12 h-12 p-2">
          <Link to={"/"}>
            <Logo className="w-full h-full rounded-md" />
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <LangToggle variant="icon" />
        <ToggleTheme variant="icon" />
      </div>
    </div>
  );
};

export default Header;
