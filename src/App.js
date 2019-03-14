import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import dummyText from "./DummyText";


class App extends Component {

  sections = [
    { id: "section1", title: "Section 1", isDark: true },
    { id: "section2", title: "Section 2", isDark: false },
    { id: "section3", title: "Section 3", isDark: true },
    { id: "section4", title: "Section 4", isDark: false },
    { id: "section5", title: "Section 5", isDark: true },

  ];

  render() {
    return (
      <div className="App">
        <Navbar />
          {this.sections.map((section) => {
              return (<Section
                        title={section.title}
                        subtitle={dummyText}
                        dark={section.isDark}
                        id={section.id}
                        key={section.id}
                      />
              );

          })}
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