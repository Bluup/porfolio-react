import React from 'react'

export default function Nav(props) {
    return (
        <nav id="nav" className="unselectable">
            <ul>
                <li>
                    <a className="brand" href="/">
                        <span className="logo">js</span>
                        <span id="textSpan" className="text">Juan Sánchez</span>
                    </a>
                </li>
                <li className="switchLi">
                    <label htmlFor="slideCheckBox" className="switch">
                        <input id="slideCheckBox" type="checkbox" disabled={props.disabled} />
                        {/* <span value={props.dark} className="slider round"></span> */}
                        <span onClick={props.onClick} value={props.dark} className="slider round"></span>
                    </label>
                </li>
                {/* <li className="contact">
                    <a href="#contact">Contact</a>
                </li>
                <li className="contact">
                    <a href="#information">About</a>
                </li> */}
            </ul>
        </nav>
    )
}