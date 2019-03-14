import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Card from "./Components/Card";
import Contact from "./Components/Contact";
import dummyText from "./DummyText";

const SectionList = (props) => {
  const sections = [
    { id: "section1", title: "Section 1", isDark: true },
    

  ];

  const items = sections.map( (section) =>
    <Section 
      title={section.title}
      subtitle={dummyText}
      dark={section.isDark}
      id={section.id}
      key={section.id}
    />
  );

  return (
    <React.Fragment>
    {items}
    </React.Fragment>
  );

}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
          <SectionList />
          <Section 
            title="Projects"
            dark={false}
            id="sectionCard1"
            >
          <Card id="cardSection" />
          <Card id="cardSection2" />
          </Section>
          <Section 
            title="Contact"
            dark={false}
            id="contactSection"
          >
          <Contact />
          </Section>
      </div>
    );
  }
}

export default App;

/*
        <Section
          title="Section 1"
          subtitle={dummyText}
          dark={true}
          id="section1"
        />
        <Section
          title="Section 2"
          subtitle={dummyText}
          dark={false}
          id="section2"
        />
        <Section
          title="Section 3"
          subtitle={dummyText}
          dark={true}
          id="section3"
        />
        <Section
          title="Section 4"
          subtitle={dummyText}
          dark={false}
          id="section4"
        />
        <Section
          title="Section 5"
          subtitle={dummyText}
          dark={true}
          id="section5"
        />
  */