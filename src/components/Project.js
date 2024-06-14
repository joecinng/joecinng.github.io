import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import Screenshot from "../assets/image/screenshot.png"; // Example image, replace as needed

const data = [
  {
    image: Screenshot,
    featured: "Featured Project",
    title: "Join Me!",
    description: "This application provides a feature-rich communication platform where users can register, invite friends, and engage in text chat, video chat, and group video chat. It combines a user-friendly interface, Real-time communication technologies, and robust backend functionality to create an immersive and interactive experience.",
    demoAccounts: [
      { email: "test2@test.com", password: "test123" },
      { email: "test3@test.com", password: "test123" }
    ],
    note: "The Back-End of this application is hosted on a free server, it takes about 20 seconds to respond to the initial request."
  },
  {
    image: require('../assets/image/600x600.jpg'), 
    featured: "Another Featured Project",
    title: "Project Two",
    description: "Description of the second project.",
    demoAccounts: [],
    note: ""
  },
  {
    image: require('../assets/image/600x600.jpg'), 
    featured: "Yet Another Project",
    title: "Project Three",
    description: "Description of the third project.",
    demoAccounts: [],
    note: ""
  } 
];

const Project = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
  };

  return (
      <section id="projects" className="projects section text-white">
          <Container fluid>
              <h1 className="py-5 text-center">My Projects</h1>
              <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
                  {data.map((project, idx) => (
                      <Carousel.Item key={idx}>
                          <div className="project-section">
                              <div className="project-image">
                                  <img src={project.image} alt={`Screenshot of ${project.title}`} />
                              </div>
                              <div className="project-container">
                                  <h5 className="project-featured">{project.featured}</h5>
                                  <h2 className="project-title">
                                      {project.title} <button href=""><i className="bi bi-box-arrow-up-right"></i></button>
                                  </h2>
                                  <div className="project-info">
                                      <p className="project-description">
                                          {project.description}
                                      </p>
                                      {project.demoAccounts.length > 0 && (
                                          <div className="project-demo-accounts">
                                              <p><b>Demo Accounts:</b></p>
                                              {project.demoAccounts.map((account, index) => (
                                                  <p key={index}>Email: {account.email} Pass: {account.password}</p>
                                              ))}
                                          </div>
                                      )}
                                      {project.note && (
                                          <p><span className="project-note">Note:</span> {project.note}</p>
                                      )}
                                  </div>
                              </div>
                          </div>
                      </Carousel.Item>
                  ))}
              </Carousel>
          </Container>
      </section>
  );
}

export default Project;
