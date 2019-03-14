import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import dummyText from "./DummyText";



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
          <Section 
            title="projects"
            dark={true}
            id="projectsSection"
            >
            <Projects />
          </Section>
          <Section 
            title="contact"
            dark={false}
            id="contactSection"
          >
            <Contact />
          </Section>
          <Section
            title="empty"
            dark={true}
            id="dummySection"
          />
      </div>
    );
  }
}

export default App;

