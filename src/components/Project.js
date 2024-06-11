import { Container, Row, Col } from "react-bootstrap";
import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import Screenshot from "../assets/image/screenshot.png"

const data = [
  {
   image: require('../assets/image/600x600.jpg'), 
   caption:"Caption",
   description:"Description Here"
  },
  {
    image:require('../assets/image/600x600.jpg'), 
    caption:"Caption",
    description:"Description Here"
   },
   {
    image:require('../assets/image/600x600.jpg'), 
    caption:"Caption",
    description:"Description Here"
   } 
]

const Project = () => {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <section id="projects" class="projects section text-white">
            <Container>
                <h1 className="py-5 text-center">My Projects</h1>
                <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
                    <Carousel.Item>
                        <div className="project-section">
                            <div className="project-image">
                                <img src={Screenshot} alt="Project Screenshot"></img>
                            </div>
                            <div className="project-container">
                                <h5 className="project-featured">Featured Project</h5>
                                <h2 className="project-title">Join Me! <button href=""><i class="bi bi-box-arrow-up-right"></i></button></h2>
                                <div className="project-info">
                                    <p className="project-description">
                                        This application provides a feature-rich communication platform where users can register, invite friends, and engage in text chat, video chat, and group video chat. It combines a user-friendly interface, Real-time communication technologies, and robust backend functionality to create an immersive and interactive experience.
                                    </p>
                                    <div className="project-demo-accounts">
                                        <p><b>Demo Accounts:</b><br/>
                                        Email: test2@test.com Pass: test123 <br/>
                                        Email: test3@test.com Pass: test123</p>
                                    </div>
                                    <p>
                                        <span className="project-note">Note:</span> The Back-End of this application is hosted on a free server, it takes about 20 seconds to respond to the initial request.
                                    </p>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        
                        <Carousel.Caption>
                            <h3>Another Project</h3>
                            <p>Brief description of another project.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </section>
    )

}

export default Project;