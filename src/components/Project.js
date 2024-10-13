import { Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';

const data = [
  {
    image: require('../assets/image/project-2.png'),
    featured: "Featured Project",
    title: "Feed Formulation Portal",
    description: "This application provides a platform for researchers to experiment with different feed formulations for marine species. It allows users to store raw ingredients and feeds, visualise the nutritional content of feeds, and have global collaboration.",
    demoAccounts: [
      /* {     email: "admin@gmail.com", password: "admin123" } */
    ], 
    link: "https://aquanutrition.deakin.edu.au/view_about.php",
    note: " As this website is for research purposes and live, the application is not open to the public. However, you can check out the website to view my contributions. To view design, you can access via this <a target='_blank' rel='noreferrer' href='https://www.figma.com/proto/2jBy94nexSF9RNyvkhT4Um/Feed-Formulation-Portal?node-id=156-492176&node-type=frame&t=yM9MVJdseUxrDkhq-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1'>link</a>." ,
    languages: ["UserSpice", "PHP", "MySQL"]
  },
  {
    image: require('../assets/image/prototype-1.png'),
    featured: "Featured Prototype Design",
    title: "Medication Management Portal",
    description: "This application allows users to manage their medication intake and set for notifications. Besides, this application also allows users to predict the sickness based on the symptoms they have.",
    demoAccounts: [
      /* {     email: "admin@gmail.com", password: "admin123" } */
    ], 
    link: "https://www.figma.com/proto/rhZ8ZMKwIfAQELdqvRF5vh/Medicine-Manager-and-Virus-Predictor?node-id=54-1042&node-type=canvas&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=47%3A28",
    note: " This is a prototype design for a medication management portal and the project will be posted soon. For now, you can view the design.",
    languages: ["Figma"]
  },
  {
    image: require('../assets/image/prototype-2.png'),
    featured: "Featured Prototype Design",
    title: "DeakinMates",
    description: "This application allows Deakin students to connect, attend events and message each other. It also provides the map navigation to buildings and rooms in Deakin University and allows students to sell or buy things from other students.",
    demoAccounts: [
      /* {     email: "admin@gmail.com", password: "admin123" } */
    ], 
    link: "https://www.figma.com/proto/vQDmYbiYFUG34sUKOZpxKK/DeakinMates?node-id=31-6589&node-type=canvas&scaling=contain&content-scaling=fixed&page-id=31%3A3923",
    note: " This is a prototype design for a social connection portal. For now, you can view the design.",
    languages: ["Figma"]
  },
  {
    image: require('../assets/image/devops-1.png'),
    featured: "Featured DevOps Project",
    title: "DevOps pipeline with AWS",
    description: "This pipeline is used to automate the creation of ECR, EKS, and EC2 on AWS using GitHub Action.",
    demoAccounts: [
      /* {     email: "admin@gmail.com", password: "admin123" } */
    ], 
    link: "https://github.com/joecinng/sit722_10.2HD.git",
    note: " This project is a part of my university project. You can view the code on GitHub and the demonstration video via this <a target='_blank' rel='noreferrer' href='https://youtu.be/AUDplOKCbAA'>link</a>. ",
    languages: ["AWS", "EKS", "EC2", "ECR", "GitHub Actions", "Terraform", "Python", "Docker"]
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
                    <p><span className="project-note">Note: </span><span dangerouslySetInnerHTML={{ __html: project.note }} /></p>
                  )}
                </div>
                <div className="project-languages">
                  {project.languages.map((language, index) => (
                    <div key={index}>{language}</div>
                  ))}
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
                    <span className="project-featured">{project.featured} <a href={project.link} target="_blank" rel="noreferrer"><i className="bi bi-box-arrow-up-right"></i></a></span>
                    <h5 className="project-title">
                      {project.title}
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
                        <p className="project-note-p"><span className="project-note">Note:</span><span dangerouslySetInnerHTML={{ __html: project.note }} /></p>
                      )}
                    </div>
                    <div className="project-languages">
                      {project.languages.map((language, index) => (
                        <div key={index}>{language}</div>
                      ))}
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
