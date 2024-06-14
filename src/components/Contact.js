import React, { useRef, useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const sendEmail = (e) => {
        
        setSubmitted(true);

        e.preventDefault();

        const public_key = "Gv8yIoRfLCfPDLlvH";
        const service_id = "service_8f0g2qr";
        const template_id = "template_j1rw5iw";

        const template_params = {
            from_name: name,
            from_email: email,
            to_name: 'Joe Cin NG',
            message: message
        };

        emailjs
        .send(service_id, template_id, template_params, public_key)
        .then(() => {
            alert("Thank you for reaching out to me, I will get back to you soon!");
            setEmail('');
            setName('');
            setMessage('');
            setSubmitted(false);
        }, (error) => {
            alert("Error sending email: " + error.text);
        }
        );
    };


    return (
        <section id="contact" className="container section text-white">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <h1 className="text-center">Contact</h1>
                        <Row className="mt-4">
                            <Col md={{ span: 8, offset: 2 }}>
                                <Form onSubmit={sendEmail}>
                                    <Form.Group controlId="formName" className="mb-3">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            name="user_name" 
                                            value={name} 
                                            onChange={(e) => setName(e.target.value)} 
                                            required 
                                            placeholder="Enter your name"
                                            autoComplete="false"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formEmail" className="mb-3">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control 
                                            type="email" 
                                            name="user_email" 
                                            value={email} 
                                            onChange={(e) => setEmail(e.target.value)} 
                                            required 
                                            placeholder="Enter your email"
                                            autoComplete="false"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formMessage" className="mb-3">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control 
                                            as="textarea" 
                                            rows={4} 
                                            name="message" 
                                            value={message} 
                                            onChange={(e) => setMessage(e.target.value)} 
                                            required 
                                            placeholder="Enter your message"
                                            autoComplete="false"
                                        />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        {submitted ? "Sending..." : "Submit"}
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                        <div className="social-icon text-center pt-4">
                            <a href="https://www.linkedin.com/in/joe-cin-ng-457a61243" target="_blank" rel="noreferrer">
                                <i className="bi bi-linkedin bigger-icon"></i>
                            </a>
                            <a href="https://github.com/joecinng" target="_blank" rel="noreferrer">
                                <i className="bi bi-github bigger-icon"></i>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;
