import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header/header";
import Navbar from "./components/header/navbar";
import AppRoutes from "./route";

function App() {
  return (
    <Router>
      <div className="mx-auto antialiased max-w-6xl">
        <Navbar />
        <Header />
        <AppRoutes />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
