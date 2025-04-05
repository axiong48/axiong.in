import "./Home.css";
import { Github, Twitter, Instagram, Linkedin } from "lucide-react";

const Home = () => {
  return (
    <div className="split-home">
      {/* Left Floating Text */}
      <div className="home-text left">
        <h1 className="home-title">&lt;entrepreneur&gt;</h1>
        <p className="home-desc">
          Specialize in marketing & research, upscaling brands/businesses
        </p>
      </div>

      {/* Center Profile Image & Bio */}
      <div className="home-center">
        <div className="profile-icon">
          <a href="https://www.instagram.com/aaronxiong13/" target="_blank" rel="noopener noreferrer">
            <Instagram size={20} />
          </a>
          <a href="https://github.com/axiong48" target="_blank" rel="noopener noreferrer">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/aaron-xiong-34b3b2268/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} />
          </a>
        </div>

        <img src="/public/IMG_1393.jpeg" alt="Aaron Xiong Profile Pic" className="profile-pic" />

        <h5 className="profile-heading">
          <strong>3rd Year Computer Science Engineering At UC Merced</strong>
          <br /><br />
          Website Designed By Aaron Xiong
        </h5>

        <p className="profile-description">
          Computer Science Engineering student currently pursuing my B.S., with plans to continue into an M.S. program.
          What sparked my journey was a simple but powerful realization: <em>“I can make computers work for me.”</em> 
          That mindset has motivated me to build and design my own programs and projects, and continues to push me toward innovation and growth.
          <br /><br />
          I’m not just a programmer—I’m an entrepreneur at heart. I’ve developed hands-on experience in areas like marketing, product design, networking, and launching projects. 
          My goal is to build a successful business where I can turn ideas into impactful, real-world solutions.
          <br /><br />
          I’m always excited to collaborate, learn, and take on new challenges. If you have any questions, opportunities for me, or want to connect, don’t hesitate to reach out—I’ll respond as soon as possible!
        </p>
      </div>

      {/* Right Floating Text */}
      <div className="home-text right">
        <h1 className="home-title">&lt;coder&gt;</h1>
        <p className="home-desc">
          Front and Backend Developer designing programs making life easier.
        </p>
      </div>
    </div>
  );
};

export default Home;
