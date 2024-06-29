import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import MobileDev from "../assets/image/mobile-development.png";
import WebDev from "../assets/image/web-development.png";
import UxUi from "../assets/image/ux-ui.png";

const services = [
    {
        icon: MobileDev,
        title: "Mobile Development",
        description: "Developing mobile applications with effective communication in team projects. Specializing in Android app development using Kotlin."
    },
    {
        icon: WebDev,
        title: "Web Development",
        description: "Building responsive and user-friendly websites. Expertise in HTML, CSS, JavaScript and frameworks like React, Laravel PHP, Vue, and more."
    },
    {
        icon: UxUi,
        title: "UI/UX Design",
        description: "Designing intuitive user interfaces and experiences. Focus on creating seamless and engaging user experiences through design."
    }
];

const Service = () => {
    return (
        <section id="service" className="service section text-white">
            <Container>
                <h3 className="text-center py-4">Services</h3>
                <Row className="d-flex align-items-center justify-content-center">
                    {services.map((service, index) => (
                        <Col key={index} lg={3} md={3} sm={9} className="service-box skills-box mb-4">
                            <div className="p-3 h-100 w-100">
                                <img src={service.icon} alt="Header image" width={90} className="img-fluid mb-4"></img>
                                <h5 class="text-center">{service.title}</h5>
                                <p>{service.description}</p>
                                <Button variant="light"><a href="#contact">Inquire Now</a></Button>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Service;
