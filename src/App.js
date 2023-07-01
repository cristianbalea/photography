import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainNavigation from "./components/MainNavigation";
import NotFound from "./pages/NotFound";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ShopPage from "./pages/ShopPage";
import GoUp from "./components/GoUp";

function App() {
  return (
    <div>
      <MainNavigation />
      <Router>
        <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <GoUp />
    </div>
  );
}

export default App;
