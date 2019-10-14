import React, { Component } from 'react';

export default class Languages extends Component {

    //constructor (props) {
        //super(props)
    //}

    state = {
        
    }

    render() {
        return(
            <div className="unselectable" id="languages">
                <i className="fab fa-react"></i>
                <i className="fab fa-js-square"></i>
                <i className="fab fa-sass"></i>
                <i className="fab fa-php"></i>
                <i className="fab fa-bootstrap"></i>
                <i className="fab fa-github"></i>
                <i className="fab fa-html5"></i>
                <i className="fab fa-css3-alt"></i>
            </div>
        )
    }
}