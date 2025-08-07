import "../styles/HeroSection.css";
import heroSection from "../assets/heroSection.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="text-content">
          <h1>Welcome to SimpleBlog</h1>
          <p>
            Discover insightful articles, share your thoughts, and become part
            of our growing blogging community.
          </p>
          <button className="add-blog-btn">Add Blog</button>
        </div>
        <div className="image-content">
          <img src={heroSection} alt="Blog hero" />
        </div>
      </div>
    </section>
  );
};


export default HeroSection