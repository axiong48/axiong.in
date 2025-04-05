import React from "react";
import "./NavBar.css";
import { Search, Github, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">Aaron Xiong</Link>
        </div>
        <div className="navbar-mid">
        <ul className="navbar-links">
          <li><Link to="/Resume" className="nav-link">Resume</Link></li>
          <li><Link to="/Algorithms" className="nav-link">Algorithms</Link></li>
          <li><Link to="/Projects" className="nav-link">Projects</Link></li>
          <li><Link to="/Contact" className="nav-link">Contact</Link></li>
        </ul>
        </div>
      <div className="navbar-right">
        <div className="navbar-icons">
        <a href="https://www.instagram.com/aaronxiong13/" target="_blank" rel="noopener noreferrer">
  <Instagram size={20} />
</a>

<a href="https://github.com/axiong48" target="_blank" rel="noopener noreferrer">
  <Github size={20} />
</a>
<a href="https://www.linkedin.com/in/aaron-xiong-34b3b2268/" target="_blank" rel="noopener no referrer">
    <Linkedin size={20} />
</a>

        </div>
      </div>
    </nav>
  );
};
  
export default Navbar;
