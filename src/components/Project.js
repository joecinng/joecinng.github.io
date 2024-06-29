import { Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';

const data = [
  {
    image: require('../assets/image/project-1.png'),
    featured: "Featured Project",
    title: "All Your Healthy Food",
    description: "This application provides an online ordering platform where users can register, add items to shopping cart, place order and download receipt. Besides, this application includes the use of Stripe for making secure transactions.",
    demoAccounts: [
      { email: "admin@gmail.com", password: "admin123" }
    ],
    link: "https://allyourhealthyfood.joecinng.com",
    note: "The Back-End of this application is hosted on a free server, it takes about 20 seconds to respond to the initial request."
  }
];

const Project = () => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 968);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const updateDimensions = () => {
    setIsMobile(window.innerWidth <= 968);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <section id="projects" className="projects section text-white">
      <Container fluid>
        <h3 className="text-center pt-3">My Projects</h3>
        {isMobile ? (
          data.map((project, idx) => (
            <div className="project-section" key={idx}>
              <div className="project-container">
                <span className="project-featured">{project.featured}</span>
                <h5 className="project-title">
                  {project.title} <a href={project.link} target="_blank" rel="noreferrer"><i className="bi bi-box-arrow-up-right"></i></a>
                </h5>
                <div className="project-info">
                  <p className="project-description">
                    {project.description}
                  </p>
                  {project.demoAccounts.length > 0 && (
                    <div className="project-demo-accounts">
                      <p><b>Demo Accounts:</b><br />
                        {project.demoAccounts.map((account, index) => (
                          <span key={index}>Email: {account.email} Pass: {account.password}<br /></span>
                        ))}
                      </p>
                    </div>
                  )}
                  {project.note && (
                    <p><span className="project-note">Note:</span> {project.note}</p>
                  )}
                </div>
                <div className="project-languages">
                  <div>Laravel</div>
                  <div>PHP</div>
                  <div>MySQL</div>
                  <div>Stripe</div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
            {data.map((project, idx) => (
              <Carousel.Item key={idx}>
                <div className="project-section">
                  <div className="project-image">
                    <img src={project.image} alt={`Screenshot of ${project.title}`} />
                  </div>
                  <div className="project-container">
                    <span className="project-featured">{project.featured}</span>
                    <h5 className="project-title">
                      {project.title} <a href={project.link} target="_blank" rel="noreferrer"><i className="bi bi-box-arrow-up-right"></i></a>
                    </h5>
                    <div className="project-info">
                      <p className="project-description">
                        {project.description}
                      </p>
                      {project.demoAccounts.length > 0 && (
                        <div className="project-demo-accounts">
                          <p><b>Demo Accounts:</b><br />
                            {project.demoAccounts.map((account, index) => (
                              <span key={index}>Email: {account.email} Pass: {account.password}<br /></span>
                            ))}
                          </p>
                        </div>
                      )}
                      {project.note && (
                        <p><span className="project-note">Note:</span> {project.note}</p>
                      )}
                    </div>
                    <div className="project-languages">
                      <div>Laravel</div>
                      <div>PHP</div>
                      <div>MySQL</div>
                      <div>Stripe</div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </Container>
    </section>
  );
}

export default Project;
