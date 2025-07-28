import { Container, Form, Button, Row, Col } from "react-bootstrap";

const Contact = () => {

    return (
        <section id="contact" className="section text-white">
            <Container>
                <h3 className="text-center">Contact</h3>
                <div className="social-icon text-center pt-3">
                    <a href="https://www.linkedin.com/in/joe-cin-ng-457a61243" className="mx-3" target="_blank" rel="noreferrer">
                        <i className="bi bi-linkedin bigger-icon"></i>
                    </a>
                    <a href="https://github.com/joecinng" className="mx-3" target="_blank" rel="noreferrer">
                        <i className="bi bi-github bigger-icon"></i>
                    </a>
                </div>
            </Container>
        </section>
    );
}

export default Contact;
