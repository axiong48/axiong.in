import React from "react";
import "./Resume.css";
import { Fragment } from "react";

const Resume: React.FC = () => {
  return (
    <div>
      <div className="resume-download-outside">
        <a href="/AXRES.pdf" download className="download-btn">
          Download Resume
        </a>
      </div>

    <div className="resume-html-view">
      <h1>Aaron Xiong</h1>
      <p>3918 Alviso Dr | Merced, CA 95348 | (209) 500-8336 | aaronxiong1013@gmail.com</p>

      <h2>Education</h2>
      <h3>UC Merced – Computer Science (2022 – Current)</h3>
      <ul>
        <li>Expected Grad: 2026</li>
        <li>3.0 GPA</li>
        <li>Gateway Program – Program entitled to high academic achievement</li>
        <li>Languages: Python, C, C++, JavaScript, CSS, HTML</li>
        <li>
          <strong>Cryptobot Program</strong> – Reads ETH candlesticks to predict optimal buy/sell times using algorithmic techniques
        </li>
      </ul>

      <h3>El Capitan High (2018 – 2022)</h3>
      <ul>
        <li>Leadership Experience Opportunities Club – 100 hours community service</li>
        <li>Asian Culture Club (Public Relations 2021 – 2022)</li>
      </ul>

      <h2>Experience</h2>
      <h3>Ecommerce (2023 – Current)</h3>
      <ul>
        <li>Marketing products, email marketing, website building, editing, research</li>
        <li>TikTok Ads Manager</li>
        <li>Meta Ads Manager</li>
      </ul>

      <h3>Merced County Office of Education (2022 – Current)</h3>
      <ul>
        <li>Academic Advisor & Financial Aid/College Assistance</li>
        <li>Tutor students</li>
        <li>Advise seniors on Financial Aid & College readiness</li>
      </ul>

      <h3>Hackathon (2023)</h3>
      <ul>
        <li>Programmed data input/output system for cow health information</li>
      </ul>

      <h3>Hmong New Year Vendor (Yearly)</h3>
      <ul>
        <li>Money management & vendor logistics</li>
      </ul>

      <h2>Awards & Acknowledgements</h2>
      <ul>
        <li>Merced Breakfast Lions Club Leo – Community Service & Academic Excellence</li>
        <li>Club Mercedes – GPA 3.00 minimum recognition</li>
        <li>Southeast Asian – Outstanding academic achievement</li>
        <li>Mark & Lisa Levine – Innovation in public research & health</li>
        <li>Leo Club Recognition – Honored for outstanding community service</li>
      </ul>
    </div>
    </div>
  );
};

export default Resume;
