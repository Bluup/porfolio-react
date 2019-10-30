import React from 'react'
import Footer from './Footer';

export default function Contact(props) {
    return (
        <div className="unselectable" id="contact">
            <div className="questions">
                <h1 className="getInTouch">Get In Touch</h1>
                <a aria-label="Linkedin Profile" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/juan-camilo-sanchez-651805188/">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a aria-label="Send personal message" href="mailto: juanc.sanchez.623@gmail.com">
                    <i className="far fa-envelope"></i>
                </a>
            </div>
            <Footer />
        </div>
    )
}