import React, { Component } from "react";

export default class Projects extends Component {
  //constructor (props) {
  //super(props)
  //}

  state = {};

  render() {
    return (
      <div className="unselectable" id="projects">
        <div className="left" id="projectsLeft">
          <h1>
            Some of my <span>personal</span> projects are...
          </h1>
        </div>
        <div className="right" id="projectsRight">
          <div className="card_container">
            <div className="card">
              <div className="title">
                <img
                  src={window.location.origin + "/images/projects/1.png"}
                  className="logo unselectable"
                  alt=""
                />
                <h4>MyBudget</h4>
              </div>
              <p className="text">
                Platform to carry a functional and organized credit system.
              </p>
              <a
                title="Link to my project"
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.mybudget.com.co"
                className="link"
              >
                <i className="fas fa-external-link-alt"></i>
              </a>
              <div className="footer">
                <i className="fab fa-php"></i>
                <i className="fab fa-sass"></i>
                <i className="fab fa-html5"></i>
                <i className="fab fa-js-square"></i>
              </div>
            </div>
          </div>
          <div className="card_container">
            <div className="card">
              <div className="title">
                <img
                  src={window.location.origin + "/images/projects/2.png"}
                  className="logo unselectable"
                  alt=""
                />
                <h4>Pocket MyBudget</h4>
              </div>
              <p className="text">Simple list of daily household expenses.</p>
              <a
                title="Link to my project"
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.pocket.mybudget.com.co"
                className="link"
              >
                <i className="fas fa-external-link-alt"></i>
              </a>
              <div className="footer">
                <i className="fab fa-php"></i>
                <i className="fab fa-sass"></i>
                <i className="fab fa-html5"></i>
                <i className="fab fa-js-square"></i>
              </div>
            </div>
          </div>
          <div className="card_container">
            <div className="card">
              <div className="title">
                <img
                  src={window.location.origin + "/images/projects/3.png"}
                  className="logo unselectable"
                  alt=""
                />
                <h4>GameSphere</h4>
              </div>
              <p className="text">Build in games using matrix of arrays.</p>
              <a
                title="Link to my project"
                rel="noopener noreferrer"
                target="_blank"
                href="https://keen-swirles-c4e894.netlify.com/"
                className="link"
              >
                <i className="fas fa-external-link-alt"></i>
              </a>
              <div className="footer">
                <i className="fab fa-react"></i>
                <i className="fab fa-sass"></i>
                <i className="fab fa-js-square"></i>
              </div>
            </div>
          </div>
          <div className="card_container">
            <div className="card">
              <div className="title">
                <img
                  src={window.location.origin + "/images/projects/4.png"}
                  className="logo unselectable"
                  alt=""
                />
                <h4>NoteMe</h4>
              </div>
              <p className="text">
                Advance Todoist using React Hooks API and global state
                management.
              </p>
              <a
                title="Link to my project"
                rel="noopener noreferrer"
                target="_blank"
                href="https://musing-borg-5ba488.netlify.com/"
                className="link"
              >
                <i className="fas fa-external-link-alt"></i>
              </a>
              <div className="footer">
                <i className="fab fa-react"></i>
                <i className="fab fa-sass"></i>
                <i className="fab fa-js-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
