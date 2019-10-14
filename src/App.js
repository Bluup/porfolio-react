import React, { Component } from 'react';
import './css/main.css';

//Components
import Header from './components/Header'
import Nav from './components/Nav'
import Information from './components/Information'
import Projects from './components/Projects'
import Languages from './components/Languages';
import Contact from './components/Contact';
import Footer from './components/Footer';
import sr from './components/ScrollReveal'

export default class App extends Component {

  state = {
    dark: false,
    disabled: false
  }

  onClick = async () => {
    const newMode = !this.state.dark;
    await this.setState({ dark: newMode, disabled: true })
    this.changeMode();
  }

  async changeMode() {
    await this.setState({ disabled: false })
    const body = document.querySelector("body")
    const links = document.querySelectorAll('a');
    const spanText = document.querySelector("#textSpan");
    const singleLink = document.querySelectorAll(".link");

    const headerLink = document.querySelector("#headerLink");
    const arrow = document.querySelector(".fa-arrow-right");

    if (this.state.dark) {
      for (let i = links.length; i--;) {
        links[i].style.color = "white";
      }
      for (let j = singleLink.length; j--;) {
        singleLink[j].style.color = "#F20530"
      }
      body.style.background = "#1C1C1C"
      body.style.color = "white"
      spanText.style.color = "white"
      headerLink.style.color = "white"
      headerLink.style.border = "2px solid white"
      arrow.style.color = "white"

    } else {
      for (let i = links.length; i--;) {
        links[i].style.color = "#2E2E2E";
      }
      for (let j = singleLink.length; j--;) {
        singleLink[j].style.color = "#F20530"
      }
      body.style.background = "white"
      body.style.color = "#2E2E2E"
      spanText.style.color = "#2E2E2E"
      headerLink.style.color = "#F20530"
      headerLink.style.border = "2px solid #F20530"
      arrow.style.color = "#F20530"
    }
  }

  componentDidMount() {
    sr.reveal('header', {
      duration: 2000,
      scale: 0.95
    })
    sr.reveal('nav', {
      duration: 2000,
      scale: 0.95
    })
    sr.reveal('#information', {
      duration: 2000,
      scale: 0.95
    })
    sr.reveal('#languages', {
      duration: 2000,
      scale: 0.8,
      origin: 'bottom',
      distance: '80px'
    })
    sr.reveal('#projectsLeft', {
      duration: 2000,
      // scale: 0.8,
      origin: 'left',
      distance: '80px'
    })
    sr.reveal('#projectsRight', {
      duration: 2000,
      scale: 0.8,
      origin: 'left',
      distance: '80px'
    })
  }

  render() {
    return (
      <div className="" id="">
        <div style={{ "minHeight": "100vh" }}>
          <Nav disabled={this.state.disabled} onClick={this.onClick} dark={this.state.dark} />
          <Header dark={this.state.dark} />
        </div>
        <Information />
        <Languages />
        <Projects />
        <Contact />
        <Footer />
      </div>
    )
  }
}