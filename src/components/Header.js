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
            <header id="" className="unselectable">
                <h1>
                    Hi, I'm <span>Juan</span> <br />
                    I'm a Front-End Developer.
                </h1> <br />
                <a onMouseOut={this.onMouseOut} onMouseOver={this.onMouseOver} rel="noopener noreferrer" id="headerLink" href="#information" className="unselectable headerLink">Who's this guy?<i onMouseOut={this.onMouseOut} onMouseOver={this.onMouseOver} className="fas fa-arrow-right"></i> </a>
            </header>
        )
    }
}