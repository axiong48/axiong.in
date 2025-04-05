import React from "react";
import "./Footer.css"
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        &copy; {new Date().getFullYear()} Aaron Xiong. All rights reserved.
      </div>
      <form
        action="mailto:aaronxiong1013@gmail.com"
        method="POST"
        encType="text/plain"
        className="footer-right"
      >
        <span className="footer-label">Get in touch:</span>
        <div className="footer-input-group">
          <Mail className="footer-mail-icon" size={20} />
          <input
            type="text"
            name="body"
            placeholder="Your message"
            className="footer-email-input"
            required
          />
        </div>
        <button type="submit" className="footer-button">
          Send Message
        </button>
      </form>
    </footer>
  );
};

export default Footer;
