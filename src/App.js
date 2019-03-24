import React, { Component } from "react";
import "./App.css";
import Navibar from "./Components/Navbar";
import Section from "./Components/Section";
import Contact from "./Components/Contact";
import Hello from "./Components/Hello";
import Footer from "./Components/Footer";
import ProjectCarousel from "./Components/Carousel";
import ImageBox from "./Components/Art";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navibar />
          <Section
            title="sander vermeer"
            dark={false}
            color="skyblue"
            id="hello"
          >
            <Hello />
          </Section>
          <Section 
            title="projects"
            dark={true}
            color='gold'
            id="projects"
            >
            <ProjectCarousel />
          </Section>
          <Section
            title="art"
            dark={false}
            color='MediumSpringGreen'
            id="art"
          >
            <ImageBox />

          </Section>
          <Section 
            title="contact"
            dark={true}
            color="crimson"
            id="contact"
          >
            <Contact />
          </Section>
          
          <Footer />
      </div>
    );
  }
}

export default App;

