import React, { Component } from 'react';

export default class Information extends Component {

    //constructor (props) {
    //super(props)
    //}

    state = {

    }

    render() {
        return (
            <div className="unselectable" id="information">
                <div className="left">
                    <h1>Who <br /> am <br /><span>I?</span></h1>
                </div>
                <div className="img_container">
                    <img className="unselectable" src={window.location.origin + '/images/1.jpg'} alt="" />
                </div>
                <div className="right">
                    I'm a passionate Front-End Developer. <br /> I <span>love</span> what I do and I find myself learning new things every single day. <br /><br /> In every project I get into I <span>focus</span> in getting the <span>best design</span> and the best <span>interaction</span> possible with the final user.
                </div>
            </div>
        )
    }
}