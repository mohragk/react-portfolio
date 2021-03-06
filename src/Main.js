import React, { Component } from "react";
import ScrollProgressBar from "./Components/ScrollProrgress"
import Navibar from "./Components/Navbar";
import Section from "./Components/Section";
import Contact from "./Components/Contact";
import Hello from "./Components/Hello";
import Footer from "./Components/Footer";
import ProjectCarousel from "./Components/Carousel";




class Main extends Component {
  render() {
    return (
      <div className="App">
        <ScrollProgressBar />
        
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
          title="contact"
          dark={false}
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

export default Main;