import React, { Component } from 'react';

export default class Header extends Component {

    onMouseOver = () => {
        const link = document.querySelector(".headerLink");
        const arrow = document.querySelector(".fa-arrow-right");
        link.style.color = "white"
        arrow.style.color = "white"
    }

    onMouseOut = (e) => {
        const link = document.querySelector(".headerLink");
        const arrow = document.querySelector(".fa-arrow-right");
        if (this.props.dark) {
            link.style.color = "white"
            arrow.style.color = "white"
        } else {
            link.style.color = "#F20530"
            arrow.style.color = "#F20530"
        }
    }

    render() {
        return (
            <header id="header" className="unselectable">
                <h1>
                    <span>JUAN <br /> SÁNCHEZ</span>
                </h1>
                <h2>Front-End Developer / UI Designer</h2>
                <a onMouseOut={this.onMouseOut} onMouseOver={this.onMouseOver} rel="noopener noreferrer" id="headerLink" href="#information" onClick={this.move} className="unselectable headerLink">Who's this guy?<i onMouseOut={this.onMouseOut} onMouseOver={this.onMouseOver} className="fas fa-arrow-right"></i> </a>
                <a className="contact" id="contactMe" onClick={this.move} href="#contact">Contact Me <i className="fas fa-arrow-right"></i></a>
                {/* <div className="scrollDown">
                    <i className="fas fa-long-arrow-alt-down"></i> Scroll
                </div> */}
            </header>
        )
    }
}