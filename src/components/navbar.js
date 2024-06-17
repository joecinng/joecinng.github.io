import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const CustomNavbar = () => {

    const [ activeLink, setActiveLink ] = useState('home');
    const [ scrolled ] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(updateActiveNavLink, {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        });

        document.querySelectorAll('.section').forEach(section => {
            observer.observe(section);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    const updateActiveNavLink = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActiveLink(entry.target.id);
            }
        });
    };

    const onUpdateActiveLink = (value) => {
        setActiveLink("");      
        const targetSection = document.getElementById(value);
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const offsetPosition = targetSection.offsetTop - navbarHeight;

        document.querySelector('.scroll-container').scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    };

    return (
        <Navbar bg="black" variant="dark" expand="lg" fixed="top" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-center">
                    <Nav className="mx-auto">
                        <Nav.Link 
                            href="#home" 
                            className={activeLink === 'home' ? 'active navbar-link mx-4 home-btn' : 'navbar-link mx-4 home-btn'}
                            onClick={() => onUpdateActiveLink('home')}
                        >
                            <i class="bi bi-house-fill navbar-icon"></i>
                        </Nav.Link>
                        <Nav.Link 
                            href="#aboutme" 
                            className={activeLink === 'aboutme' ? 'active navbar-link mx-4 aboutme-btn' : 'navbar-link mx-4 aboutme-btn'}
                            onClick={() => onUpdateActiveLink('aboutme')}
                        >
                            <i className="bi bi-person-fill navbar-icon"></i>
                        </Nav.Link>
                        <Nav.Link 
                            href="#projects" 
                            className={activeLink === 'projects' ? 'active navbar-link mx-4 projects-btn' : 'navbar-link mx-4 projects-btn'}
                            onClick={() => onUpdateActiveLink('projects')}
                        >
                            <i className="bi bi-box navbar-icon"></i>
                        </Nav.Link>
                        <Nav.Link 
                            href="#work-experiences" 
                            className={activeLink === 'work-experiences' ? 'active navbar-link mx-4 work-experiences-btn' : 'navbar-link mx-4 work-experiences-btn'}
                            onClick={() => onUpdateActiveLink('work-experiences')}
                        >
                            <i className="bi bi-lightbulb-fill navbar-icon"></i>
                        </Nav.Link>
                        <Nav.Link 
                            href="#contact" 
                            className={activeLink === 'contact' ? 'active navbar-link mx-4 contact-btn' : 'navbar-link mx-4 contact-btn'}
                            onClick={() => onUpdateActiveLink('contact')}
                        >
                            <i className="bi bi-envelope-fill navbar-icon"></i>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;
