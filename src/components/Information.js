import React from "react";

const Information = () => {
  return (
    <div className="unselectable" id="information">
      <div className="left" id="whoAmI">
        <h1 className="blackToWhite">
          Who <br /> Am <br />
          <span>I</span>
        </h1>
      </div>
      <div className="img_container" id="imgContainerMe">
        <img className="unselectable" src="/images/1.jpg" alt="" />
      </div>
      <div className="right blackToWhite whiteToBlackBG" id="rightInformation">
        I'm a passionate Front-End Developer. <br /> I <span>love</span> what I do and I find myself learning new things every single day. <br />
        <br /> In every project I get into I <span>focus</span> in getting the <span>best design</span> and the <span>best interaction</span> possible
        with the <span>final user.</span> <br /> <br />
        I have experience with... <br /> <br />
        <div className="languagesContainer">
          <i className="fab fa-react"></i>
          <i className="fab fa-angular"></i>
          <i className="fab fa-js-square"></i>
          <i className="fab fa-sass"></i>
          <i className="fab fa-php"></i>
          <i className="fab fa-bootstrap"></i>
          <i className="fab fa-github"></i>
          <i className="fab fa-html5"></i>
          <i className="fab fa-css3-alt"></i>
        </div>
      </div>
    </div>
  );
};

export default Information;
