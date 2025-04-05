import React from "react";
import "./Projects.css";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Portfolio Website (including algorithm visualizer)",
      description: "Using react, my code for building this whole website including: home page, algorithm page, and all the components used for the website",
      link: "https://github.com/axiong48/Website/tree/main"
    },
    {
      title: "Crypto Bot",
      description: "Made in python, this tool uses an algorithm to find when to buy crypto coin and when to opt-out of a crypto coin using an API",
      link: "https://github.com/axiong48/Crypto-Bot"
    },
    {
        title: "Cow Data",
        description: "Moooo, this program is designed to check cow health and keep track of cow inputs and feeds back potential infections and sickness",
        link: "https://github.com/axiong48/cow-data"
    }
  ];

  return (
    <div className="projects-page">
      <h1 className="projects-title">My CSE Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <a
            key={index}
            className="project-box"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
      <br /><br />
      <h1 className="projects-title">Business Portfolios</h1>
      <img src="/public/bus1.jpeg" alt="shopify earnings" className="bus-box">
      </img>
      <img src="/public/bus2.jpeg" alt="shopify earnings" className="bus-box">
      </img>
      <img src="/public/bus3.jpeg" alt="shopify earnings" className="bus-box">
      </img>
      <img src="/public/bus4.jpeg" alt="shopify earnings" className="bus-box">
      </img>
    </div>
  );
};

export default Projects;
