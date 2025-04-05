import React from "react";
import "./Contact.css";
import { Building, Mail, Phone } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <div className="contact">
      <h1 className="contact-title">Please Get in Touch!</h1>
      <p className="contact-paragraph">
        Feel free to contact me however you like! <br /><br />
        Reach out to me for opportunities, questions, interesting ideas, etc.
        I'm always trying to meet new people and excited for the journey ahead.
        <br /><br />
        <strong>Contact Information:</strong>
      </p>

      <div className="contact-info">
        <div className="contact-row">
          <Building className="contact-icon" />
          <span>Merced, California</span>
        </div>
        <div className="contact-row">
          <Mail className="contact-icon" />
          <a href="mailto:aaronxiong1013@gmail.com">aaronxiong1013@gmail.com</a>
        </div>
        <div className="contact-row">
          <Phone className="contact-icon" />
          <a href="tel:2095008336">(209)-500-8336</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
