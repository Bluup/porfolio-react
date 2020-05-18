import React, { useRef } from "react";

const Header = ({ darkTheme }) => {
  const arrowRight = useRef(null);
  const headerLink = useRef(null);

  const onMouseOver = () => {
    headerLink.current.style.color = "white";
    arrowRight.current.style.color = "white";
  };

  const onMouseOut = () => {
    if (darkTheme) {
      headerLink.current.style.color = "white";
      arrowRight.current.style.color = "white";
    } else {
      headerLink.current.style.color = "#F20530";
      arrowRight.current.style.color = "#F20530";
    }
  };

  return (
    <header id="header" className="unselectable header">
      <h1 className="header-title">
        <span>
          JUAN <br /> SÁNCHEZ
        </span>
      </h1>
      <h2 className="header-subtitle">Front-End Developer / UI Designer / Javascript Developer</h2>
      <a
        onMouseOut={onMouseOut}
        onMouseOver={onMouseOver}
        id="headerLink"
        href="#information"
        className="unselectable header-headerLink redToWhite"
        ref={headerLink}
        onClick={(e) => e.target.blur()}
      >
        Who's this guy?
        <i onMouseOut={onMouseOut} onMouseOver={onMouseOver} className="fas fa-arrow-right redToWhite" ref={arrowRight}></i>
      </a>
      <br />
      <a className="header-contact redToWhite" id="contactMe" href="#contact">
        Contact Me <i className="fas fa-arrow-right"></i>
      </a>
    </header>
  );
};

export default Header;
