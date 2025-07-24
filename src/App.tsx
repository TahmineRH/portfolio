import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header/header";
import Navbar from "./components/header/navbar";
import AppRoutes from "./route";
import { ToastContainer, Bounce } from "react-toastify";

function App() {
  return (
    <Router>
      <div className="mx-auto antialiased max-w-6xl">
        <Navbar />
        <Header />
        <AppRoutes />
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          limit={3}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          pauseOnFocusLoss
          stacked
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
