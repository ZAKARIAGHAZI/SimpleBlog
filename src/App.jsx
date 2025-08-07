import "./App.css";
import { Routes, Route , useLocation} from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Blogs from "./components/Blogs";
import BlogDetail from "./pages/BlogDetail";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/"
  return (
    <>
      <Header />
      {isHome && <HeroSection />}
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/blog/:index" element={<BlogDetail />} />
      </Routes>
    </>
  );
}

export default App;
