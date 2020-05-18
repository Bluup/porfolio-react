import React from "react";

const Nav = ({ toggleTheme, disableButton, darkTheme }) => {
  return (
    <nav id="nav" className="unselectable">
      <ul>
        <li>
          <a className="brand" href="/">
            <span className="brand-logo">js</span>
            <span id="textSpan" className="brand-text">
              Juan Sánchez
            </span>
          </a>
        </li>
        <li className="switchLi">
          <i className="fas fa-sun switchLi-sun blackToWhite"></i>
          <label htmlFor="slideCheckBox" className="switch">
            <input id="slideCheckBox" type="checkbox" disabled={disableButton} />
            <span onClick={toggleTheme} value={darkTheme} className="slider round"></span>
          </label>
          <i className="far fa-moon switchLi-moon blackToWhite"></i>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
