import React, { Component } from 'react';

export default class Nav extends Component {

    render() {
        return (
            <nav className="unselectable">
                <ul>
                    <li>
                        <a className="brand" href="/">
                            <span className="logo">js</span> <span id="textSpan" className="text">Juan Sánchez</span>
                        </a>
                    </li>
                    <li>
                        <label className="switch">
                            <input type="checkbox" disabled={this.props.disabled} />
                            <span onClick={this.props.onClick} value={this.props.dark} className="slider round"></span>
                        </label>
                    </li>
                    <li className="contact">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        )
    }
}