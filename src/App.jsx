import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AddBlog from "./pages/Addblog";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Blogs from "./components/Blogs";
import BlogDetail from "./pages/BlogDetail";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (location.state?.scrollTo) {
      const target = document.getElementById(location.state.scrollTo);
      if (target) {
        // Small delay ensures section is rendered before scrolling
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Header />
      {isHome && <HeroSection />}
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/add-blog" element={<AddBlog />} />
        <Route path="/blog/:index" element={<BlogDetail />} />
      </Routes>
      {isHome && <AboutUs />}
      <Footer />
    </>
  );
}

export default App;
