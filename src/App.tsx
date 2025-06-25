import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header/header";
import Navbar from "./components/header/navbar";
import About from "./pages/about";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <div className="mx-auto antialiased max-w-6xl">
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Home />} />
          <Route path="/contact" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
