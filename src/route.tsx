import { Route, Routes } from "react-router-dom";
import AI from "./components/projects/ai";
import DesignSystem from "./components/projects/design-system";
import Hesamsanat from "./components/projects/hesmasanat";
import LiquidGlass from "./components/projects/liquid-glass";
import About from "./pages/about";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import Projects from "./pages/projects";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/hesamsanat" element={<Hesamsanat />} />
      <Route path="/projects/design-system" element={<DesignSystem />} />
      <Route path="/projects/ai" element={<AI />} />
      <Route path="/projects/liquid-glass" element={<LiquidGlass />} />
      <Route path="/contact" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
