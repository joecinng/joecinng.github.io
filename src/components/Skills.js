import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Skills = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const renderContent = () => {
        switch (selectedTab) {
            case 0:
                return (
                    <Container>
                        <Row className="d-flex justify-content-center">
                            <Col lg={3} md={3} sm={12} className="skills-box active-skills-box">
                                <h4>Frontend Development</h4>
                                <div className="icon-container">
                                    <img src={require('../assets/icons/react-icon.png')} alt="react icon" width={50} className="icon" />
                                    <span className="tooltip">React</span>
                                </div>
                                <div className="icon-container">
                                    <img src={require('../assets/icons/vue-icon.png')} alt="vue icon" width={50} className="icon" />
                                    <span className="tooltip">Vue</span>
                                </div>
                                <div className="icon-container">
                                    <img src={require('../assets/icons/bootstrap-icon.png')} alt="bootstrap icon" width={50} className="icon" />
                                    <span className="tooltip">Bootstrap</span>
                                </div>
                                <div className="icon-container">
                                    <img src={require('../assets/icons/html-5-icon.png')} alt="html-5 icon" width={50} className="icon" />
                                    <span className="tooltip">HMTL 5</span>
                                </div>
                                <div className="icon-container">
                                    <img src={require('../assets/icons/css-3-icon.png')} alt="css icon" width={50} className="icon" />
                                    <span className="tooltip">CSS</span>
                                </div>
                            </Col>
                            <Col lg={3} md={3} sm={12} className="skills-box">
                                <h4>Backend Development</h4>
                                <div className="icon-container">
                                    <img src={require('../assets/icons/nodejs-icon.png')} alt="nodejs icon" width={50} className="icon" />
                                    <span className="tooltip">NodeJS</span>
                                </div>
                                <div className="icon-container">
                                    <img src={require('../assets/icons/php-icon.png')} alt="PHP icon" width={50} className="icon" />
                                    <span className="tooltip">PHP</span>
                                </div>
                                <div className="icon-container">
                                    <img src={require('../assets/icons/express-icon.png')} alt="ExpressJS icon" width={50} className="icon" />
                                    <span className="tooltip">ExpressJS</span>
                                </div>
                                <div className="icon-container">
                                    <img src={require('../assets/icons/mysql-icon.png')} alt="MySQL icon" width={50} className="icon" />
                                    <span className="tooltip">MySQL</span>
                                </div>
                                <div className="icon-container">
                                    <img src={require('../assets/icons/mongodb-icon.png')} alt="MongoDB icon" width={50} className="icon" />
                                    <span className="tooltip">MongoDB</span>
                                </div>
                            </Col>
                            <Col lg={3} md={3} sm={12} className="skills-box">
                                <h4>Development Tools</h4>
                                <div className="icon-container">
                                    <img src={require('../assets/icons/vscode-icon.png')} alt="VSCode icon" width={50} className="icon" />
                                    <span className="tooltip">Visual Studio Code</span>
                                </div>
                                <div className="icon-container">
                                    <img src={require('../assets/icons/postman-icon.png')} alt="Postman icon" width={50} className="icon" />
                                    <span className="tooltip">Postman</span>
                                </div>
                                <div className="icon-container">
                                    <img src={require('../assets/icons/github-icon.png')} alt="GitHub icon" width={50} className="icon" />
                                    <span className="tooltip">GitHub</span>
                                </div>
                                <div className="icon-container">
                                    <img src={require('../assets/icons/trello-icon.png')} alt="Trello icon" width={50} className="icon" />
                                    <span className="tooltip">Trello</span>
                                </div>
                                <div className="icon-container">
                                    <img src={require('../assets/icons/android-studio-icon.png')} alt="Android Studio icon" width={50} className="icon" />
                                    <span className="tooltip">Android Studio</span>
                                </div>
                            </Col>
                        </Row>
                        <Row className="d-flex justify-content-center">
                            <Col lg={3} md={3} sm={12} className="skills-box">
                                <h4>UX/UI Design</h4>
                                <div className="icon-container">
                                    <img src={require('../assets/icons/adobe-xd-icon.png')} alt="AdobeXD icon" width={50} className="icon" />
                                    <span className="tooltip">Adobe XD</span>
                                </div>
                                <div className="icon-container">
                                    <img src={require('../assets/icons/figma-icon.png')} alt="Figma icon" width={60} className="icon" />
                                    <span className="tooltip">Figma</span>
                                </div>
                            </Col>
                            <Col lg={3} md={3} sm={12} className="skills-box">
                                <h4>Mobile Development</h4>
                                <div className="icon-container">
                                    <img src={require('../assets/icons/kotlin-icon.png')} alt="Kotlin icon" width={50} className="icon" />
                                    <span className="tooltip">Kotlin</span>
                                </div>
                            </Col>
                            <Col lg={3} md={3} sm={12} className="skills-box">
                                <h4>Deployment and Hosting</h4>
                                <div className="icon-container">
                                    <img src={require('../assets/icons/jenkins-icon.png')} alt="Jenkins icon" width={50} className="icon" />
                                    <span className="tooltip">Jenkins</span>
                                </div>
                                <div className="icon-container">
                                    <img src={require('../assets/icons/aws-icon.png')} alt="AWS icon" width={50} className="icon" />
                                    <span className="tooltip">AWS</span>
                                </div>
                                <div className="icon-container">
                                    <img src={require('../assets/icons/docker-icon.png')} alt="Docker icon" width={50} className="icon" />
                                    <span className="tooltip">Docker</span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                );
            case 1:
                return (
                    <Container>
                        <Row className="d-flex justify-content-center">
                            <Col lg={3} md={3} sm={12} className="skills-box active-skills-box">
                                <i class="bi bi-chat-fill soft-skills-icon"></i>
                                <h4>Communication</h4>
                                <p><b>Effective communication in team projects</b></p>
                            </Col>
                            <Col lg={3} md={3} sm={12} className="skills-box">
                                <i class="bi bi-people-fill soft-skills-icon"></i>
                                <h4>Collaboration</h4>
                                <p><b>Working effectively in a team environment</b></p>
                            </Col>
                            <Col lg={3} md={3} sm={12} className="skills-box">
                                <i class="bi bi-puzzle-fill soft-skills-icon"></i>
                                <h4>Problem Solving</h4>
                                <p><b>Analytical thinking to solve problems</b></p>
                            </Col>
                        </Row>
                        <Row className="d-flex justify-content-center">
                            <Col lg={3} md={3} sm={12} className="skills-box">
                                <i class="bi bi-person-raised-hand soft-skills-icon"></i>
                                <h4>Leadership</h4>
                                <p><b>Leading projects to successful outcomes</b></p>
                            </Col>
                            <Col lg={3} md={3} sm={12} className="skills-box">
                                <i class="bi bi-clock soft-skills-icon"></i>
                                <h4>Time Management</h4>
                                <p><b>Effectively organizing and prioritizing tasks</b></p>
                            </Col>
                            <Col lg={3} md={3} sm={12} className="skills-box">
                                <i class="bi bi-arrow-left-right soft-skills-icon"></i>
                                <h4>Adaptability</h4>
                                <p><b>Flexibility to adapt and learn new technologies</b></p>
                            </Col>
                        </Row>
                        
                    </Container>
                );
            default:
                return <p>Tab 1 content</p>;
        }
    };

    return (
        <section id="skills" className="skills section text-white">
            <Container>
                <h1 className="py-3 text-center">Skills</h1>
                <div className="mt-3 px-5 d-flex justify-content-center">
                    <Button
                        className={`mx-2 px-4 py-2 button ${selectedTab === 0 ? 'active' : ''}`}
                        onClick={() => setSelectedTab(0)}
                    >
                        Coding Skills
                    </Button>
                    <Button
                        className={`mx-2 px-4 py-2 button ${selectedTab === 1 ? 'active' : ''}`}
                        onClick={() => setSelectedTab(1)}
                    >
                        Soft Skills
                    </Button>
                </div>
                <div className="py-3">
                    {renderContent()}
                </div>
            </Container>
        </section>
    );
}

export default Skills;
