import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="container section text-white">
            <div className="row align-items-center">
                <h1>Contact</h1>
                <p>Here is how you can contact me...</p>
                <div className="social-icon">
                    <a href="#">       
                        <i className="bi bi-linkedin bigger-icon"></i>
                    </a>
                    <a href="#">
                        <i class="bi bi-envelope-fill bigger-icon"></i>
                    </a>
                    <a href="#">
                        <i class="bi bi-github bigger-icon"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact;