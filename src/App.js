import React, { useState, useEffect } from "react";
import "./css/main.css";

//Components
import Header from "./components/Header";
import Nav from "./components/Nav";
import Information from "./components/Information";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import sr from "./components/ScrollReveal";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    sr.reveal("header", {
      duration: 2000,
      scale: 0.95,
    });
    sr.reveal("nav", {
      duration: 2000,
      scale: 0.95,
    });
    sr.reveal("#information", {
      duration: 2000,
      scale: 0.95,
    });
    sr.reveal("#languages", {
      duration: 2000,
      scale: 0.8,
      origin: "bottom",
      distance: "80px",
    });
    sr.reveal("#projectsLeft", {
      duration: 2000,
      origin: "left",
      distance: "80px",
    });
    sr.reveal("#projectsRight", {
      duration: 2000,
      scale: 0.8,
      origin: "left",
      distance: "80px",
    });
  }, []);

  const toggleTheme = () => {
    // setDisableButton(true);
    setDarkTheme(!darkTheme);
    changeTheme();
  };

  const changeTheme = () => {
    const isDarkTheme = darkTheme;
    if (!isDarkTheme) {
      document.documentElement.style.setProperty("--font-color", "#fff");
      document.documentElement.style.setProperty("--bg-color", "#1C1C1C");
      document.querySelectorAll(".blackToWhite").forEach((element) => (element.style.color = "#fff"));
      document.querySelectorAll(".whiteToBlackBG").forEach((element) => (element.style.backgroundColor = "#1c1c1c"));
      document.querySelectorAll(".blackToGreyBG").forEach((element) => (element.style.backgroundColor = "#2e2e2e"));
      document.querySelectorAll(".blackerToBlackBG").forEach((element) => (element.style.backgroundColor = "#2e2e2e"));
      document.querySelectorAll(".redToWhite").forEach((element) => (element.style.color = "#fff"));
    } else {
      document.documentElement.style.setProperty("--font-color", "#2e2e2e");
      document.documentElement.style.setProperty("--bg-color", "#fff");
      document.querySelectorAll(".blackToWhite").forEach((element) => (element.style.color = "#2e2e2e"));
      document.querySelectorAll(".whiteToBlackBG").forEach((element) => (element.style.backgroundColor = "#fff"));
      document.querySelectorAll(".blackToGreyBG").forEach((element) => (element.style.backgroundColor = "rgb(240, 240, 240)"));
      document.querySelectorAll(".blackerToBlackBG").forEach((element) => (element.style.backgroundColor = "#1c1c1c"));
      document.querySelectorAll(".redToWhite").forEach((element) => (element.style.color = "#f20530"));
    }
  };

  return (
    <div className="" id="app">
      <Nav disableButton={disableButton} toggleTheme={toggleTheme} darkTheme={darkTheme} />
      <Header darkTheme={darkTheme} />
      <Information />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
