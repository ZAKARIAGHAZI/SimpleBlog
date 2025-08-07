import "../styles/AboutUs.css";
import aboutus from '../assets/aboutus.jpeg'
const AboutUs = () => {
  return (
    <section className="about-section" id="AboutUS">
      <h1>About Us</h1>
      <div className="about-container">
        <div className="about-text">
          <p>
            Welcome to <strong>SimpleBlog</strong> – your go-to destination for
            the latest tech insights and updates. We’re passionate about sharing
            valuable knowledge, tools, and trends in the tech world.
          </p>
          <p>
            Our mission is to keep you informed, inspired, and connected.
            Whether you're a beginner or a tech enthusiast, you'll find content
            tailored for you.
          </p>
        </div>

        <div className="about-image">
          <img
            src={aboutus}
            alt="About us"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
