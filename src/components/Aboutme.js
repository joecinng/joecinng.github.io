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
                    <Col xs={12} md={12} xl={8}>
                        <p>
                            Hello! I'm a dedicated Software Developer based in Melbourne, Australia. 
                            I started my tech journey with a Bachelor of Computer Science in Malaysia and graduated from Swinburne University of Technology in July 2022. 
                            Currently, I'm pursuing a Master of IT at Deakin University, set to graduate in July 2025.
                        </p>
                        <p>
                            I'm passionate about creating innovative software that solves real-world problems. 
                            I love learning new technologies and building applications that make life easier for users.
                            As a Software Developer, I possess diverse skill set that allows me to develop mobile and web applications. 
                            Besides, I have a passion in UX/UI design and enjoy turning complex problems into simple, user-friendly solutions.
                        </p>
                        <Tabs
                            id="uncontrolled-tab-example"
                            className="mb-3"
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
                                        <div>Cisco: Network Switching & Routing</div>
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