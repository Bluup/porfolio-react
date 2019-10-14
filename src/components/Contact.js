import React, { Component } from 'react';

export default class Contact extends Component {

    //constructor (props) {
    //super(props)
    //}

    state = {

    }

    render() {
        return (
            <div className="unselectable" id="contact">
                <div>
                    <h1>Have any questions?</h1>
                    <h1>Want to work together?</h1>
                    <h1>Send me a message!</h1>
                </div>
                <div className="social-media">
                    <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/juan-camilo-sanchez-651805188/">
                        <i className="fab fa-linkedin linkedin"></i>
                    </a> <br/>
                    <a href="mailto: juanc.sanchez.623@gmail.com">
                        <i className="far fa-envelope"></i>
                    </a>
                </div>
            </div>
        )
    }
}