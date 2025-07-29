import { Container, Row, Col } from "react-bootstrap";
import MyPicture from "../assets/image/my_picture.jpg";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Aboutme = () => {
    return (
        <section id="aboutme" class="section text-white">
            <Container>
                <Row className="d-flex justify-content-center align-items-center">
                    <Col xs={12} md={12} xl={4} className="text-center mx-auto">
                        <h3 className="py-3">About Me</h3>
                        <img src={MyPicture} alt="My profile picture" className="profile-pic"></img>
                    </Col>
                    <Col xs={12} md={12} xl={8} className="aboutme-col">
                        <p className="fs-6">
                            Hello! A little bit about myself, I love creating innovative software that solves real-world problems.
                            I love learning new technologies and building applications that make life easier for users.
                            As a Software Developer, I have diverse skillsets that allow me to develop mobile and web applications.
                            Besides, I have a passion for UX/UI design and enjoy turning complex problems into simple, user-friendly solutions.
                        </p>
                        <Tabs
                            id="uncontrolled-tab-example"
                            className="mb-3 fs-6"
                        >
                            <Tab eventKey="education" title="Education">
                                <ul>
                                    <li>
                                        <div>Bachelor of Computer Science (Software Development)</div>
                                        <div className="text-grey">2021 - 2023 | Swinburne University of Technology</div>
                                    </li>
                                    <li>
                                        <div>Master of Information Technology</div>
                                        <div className="text-grey">2024 - 2025 | Deakin University</div>
                                    </li>
                                </ul>
                            </Tab>
                            <Tab eventKey="certificate" title="Certificate">
                                <ul>
                                    <li>
                                        <div className="mb-2">Cisco CCNA: Introduction to Networks</div>
                                    </li>
                                    <li>
                                        <div className="mb-2">Cisco CCNA: Switching, Routing, and Wireless Essentials</div>
                                    </li>
                                    <li>
                                        <div className="mb-2">Microsoft: Deploy cloud-native apps using Azure Container Apps</div>
                                    </li>
                                </ul>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Aboutme;