import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Header.css";
import logoIcon from "../assets/blogsIcon.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (targetId) => {
    setIsOpen(false); // close mobile menu

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: targetId } });
    } else {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={logoIcon} alt="Logo" />
          <p>SimpleBlog</p>
        </div>

        <nav className={`links-section ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <button onClick={() => handleNavClick("home")}>Home</button>
            </li>
            <li>
              <button onClick={() => handleNavClick("Blogs")}>Blogs</button>
            </li>
            <li>
              <button onClick={() => handleNavClick("AboutUS")}>
                About Us
              </button>
            </li>
          </ul>
        </nav>

        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
