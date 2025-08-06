import { useState } from "react";
import "../styles/Header.css";4
import logoIcon from "../assets/blogsIcon.png"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={logoIcon} alt="" />
          <p>SimpleBlog</p>
        </div>

        <nav className={`links-section ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#home" onClick={() => setIsOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#blogs" onClick={() => setIsOpen(false)}>
                Blogs
              </a>
            </li>
            <li>
              <a href="#aboutus" onClick={() => setIsOpen(false)}>
                About Us
              </a>
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
