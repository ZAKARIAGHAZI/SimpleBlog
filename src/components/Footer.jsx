import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <p>SimpleBlog</p>
        </div>

        <ul className="footer-links">
          <li>
            <a href="#Hhome">Home</a>
          </li>
          <li>
            <a href="#Blogs">Blogs</a>
          </li>
          <li>
            <a href="#AboutUS">About Us</a>
          </li>
        </ul>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} SimpleBlog. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
