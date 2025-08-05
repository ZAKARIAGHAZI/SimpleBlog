import '../styles/Header.css'

const Header = () => {
    return (
      <>
        <header>
          <div className="container">
            <div className="logo">
              <p>SimpleBlog</p>
            </div>
            <nav className="links-section">
              <ul>
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
            </nav>
          </div>
        </header>
      </>
    );
}

export default Header