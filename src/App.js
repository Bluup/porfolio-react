import React, { Component } from 'react';
import './css/main.css';

//Components
import Header from './components/Header'
import Nav from './components/Nav'
import Information from './components/Information'
import Projects from './components/Projects'
import Contact from './components/Contact';
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

    const body = document.querySelector("body")
    const links = document.querySelectorAll('a');
    const spanText = document.querySelector("#textSpan");
    const singleLink = document.querySelectorAll(".link");

    //h2 header
    const h2Header = document.querySelectorAll("h2");
    const contactMeLinkHeader = document.getElementById("contactMe");
    const headerLink = document.querySelector("#headerLink");
    const arrow = document.querySelector(".fa-arrow-right");

    //Card
    const cards = document.querySelectorAll(".card_container");
    const card = document.querySelectorAll(".card")
    console.log(card)

    //Information
    const informationRight = document.getElementById("rightInformation");

    //Contact
    const getInTouch = document.querySelector(".getInTouch");

    //Footer
    const footer = document.getElementById("footer");

    if (this.state.dark) {
      
      for (let i = links.length; i--;) {
        links[i].style.color = "white";
      }

      for (let i = singleLink.length; i--;) {
        singleLink[i].style.color = "#F20530"
      }
      
      for (let i = h2Header.length; i--;) {
        h2Header[i].style.color = "white"
      }

      for (let i = cards.length; i--;) {
        cards[i].style.background = "#1C1C1C"
      }

      for (let i = card.length; i--;) {
        card[i].children[0].style.background = "#292929"
        card[i].children[1].style.color = "white"
        card[i].children[3].style.background = "#292929"
        card[i].children[3].style.color = "white"
      }

      informationRight.style.background = "#1C1C1C"
      informationRight.style.color = "white"

      body.style.background = "#1C1C1C"
      body.style.color = "white"

      spanText.style.color = "white"

      headerLink.style.color = "white"
      headerLink.style.border = "2px solid white"
      contactMeLinkHeader.style.color ="white"

      arrow.style.color = "white"

      getInTouch.style.color = "white"

      footer.style.color = "white"

    } else {
      for (let i = links.length; i--;) {
        links[i].style.color = "#2E2E2E";
      }
      for (let j = singleLink.length; j--;) {
        singleLink[j].style.color = "#F20530"
      }
      for (let k = h2Header.length; k--;) {
        h2Header[k].style.color = "#2E2E2E"
      }

      for (let i = cards.length; i--;) {
        cards[i].style.background = "white"
      }

      for (let i = card.length; i--;) {
        card[i].children[0].style.background = "#2E2E2E"
        card[i].children[1].style.color = "black"
        card[i].children[3].style.background = "rgb(240, 240, 240)"
        card[i].children[3].style.color = "#2E2E2E"
      }

      body.style.background = "white"
      body.style.color = "#2E2E2E"

      spanText.style.color = "#2E2E2E"

      informationRight.style.background = "white"
      informationRight.style.color = "#1C1C1C"

      headerLink.style.color = "#F20530"
      headerLink.style.border = "2px solid #F20530" 
      contactMeLinkHeader.style.color ="#F20530"

      arrow.style.color = "#F20530"

      getInTouch.style.color = "#F20530"

      footer.style.color = "#1C1C1C"
    }

    await this.setState({ disabled: false })
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
        <Nav disabled={this.state.disabled} onClick={this.onClick} dark={this.state.dark} />
        <Header dark={this.state.dark} />
        <Information />
        <Projects />
        <Contact />
      </div>
    )
  }
}