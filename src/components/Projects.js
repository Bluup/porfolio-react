import React, { Component } from 'react';

export default class Projects extends Component {

    //constructor (props) {
    //super(props)
    //}

    state = {

    }

    render() {
        return (
            <div className="unselectable" id="projects">
                <div className="left" id="projectsLeft">
                    <h1>Some of my <span>personal</span> projects are...</h1>
                </div>
                <div className="right" id="projectsRight">
                    <div className="card_container">
                            <div className="card">
                                <div className="title">
                                    <img src={window.location.origin + '/images/projects/1.png'} className="logo unselectable" alt="" />
                                    <h4>MyBudget</h4>
                                </div>
                                <p className="text">Platform to carry a functional and organized credit system.</p>
                                <a rel="noopener noreferrer" target="_blank" href="https://www.mybudget.com.co" className="link">mybudget.com.co</a>
                            </div>
                    </div>
                    <div className="card_container">
                        <div className="card">
                            <div className="title">
                                <img src={window.location.origin + '/images/projects/2.png'} className="logo unselectable" alt="" />
                                <h4>Pocket MyBudget</h4>
                            </div>
                            <p className="text">Simple list of daily household expenses.</p>
                            <a rel="noopener noreferrer" target="_blank" href="https://www.pocket.mybudget.com.co"
                                className="link">pocket.mybudget.com.co</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}