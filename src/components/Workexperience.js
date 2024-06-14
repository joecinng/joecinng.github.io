import React from "react";
import Stack from 'react-bootstrap/Stack';
import { Container, Row, Col } from "react-bootstrap";

const Workexperience = () => {
    return (
        <section id="work-experiences" class="work-experiences section text-white">
            <Container>
                <h1 className="py-5 text-center">Work Experiences</h1>
                    <Stack gap={3} className="d-flex align-items-center justify-content-center">
                        <div className="p-2 d-flex align-item-center">
                            <Row>
                                <Col md={1} sm={12}>
                                    <span className="work-icon">
                                        <span class="vertical-line-icon" >
                                            <i class="bi bi-person-fill navbar-icon" aria-hidden="true"></i>
                                        </span>
                                    </span>
                                </Col>
                                <Col md={11} sm={12}>
                                    <span className="work-box">
                                        <Row>
                                            <Col md={7} sm={12}><h4>Inverloch Bike Hire</h4></Col>
                                            <Col md={{ span: 4, offset: 1 }} sm={12}><span class="text-grey">Jan - Mar 2024</span></Col>
                                        </Row>
                                        <h6>Summer Tech Internship</h6>
                                        <ul>
                                            <li>Developed a WordPress plugin for bike rental management.</li>
                                        </ul>
                                    </span>
                                </Col>
                            </Row>
                        </div>
                        <div className="p-2 d-flex align-item-center">
                            <Row>
                                <Col md={1} sm={12}>
                                    <span className="work-icon">
                                        <span class="vertical-line-icon last-vertical-line" >
                                            <i class="bi bi-person-fill navbar-icon" aria-hidden="true"></i>
                                        </span>
                                    </span>
                                </Col>
                                <Col md={11} sm={12}>
                                    <span className="work-box">
                                        <Row>
                                            <Col md={5} sm={12}><h4>Virtetic</h4></Col>
                                            <Col md={{ span: 3, offset: 4 }} sm={12}><span class="grey-text">Jan 2023</span></Col>
                                        </Row>
                                        <h6>Summer Software Developer Internship</h6>
                                        <ul>
                                            <li>Implemented a game menu and used Scrum Agile for SDLC.</li>
                                        </ul>
                                    </span>
                                </Col>
                            </Row>
                        </div>
                    </Stack>
            </Container>
        </section>
    )
}

export default Workexperience;