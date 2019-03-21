import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';
import ProjectItem from "./ProjectItem";



const items = [
  {
    imgUrl: './img/monosynth-card.png',
    title: "Monosynth-1, an analogue modelled synthesizer VST (C++)",
    text: `This is a software synthesizer, made to be used as a VST plug-in or standalone application. It's realised in C++ using the Juce framework. It features 3 oscillators, 3 different filter models, 3 envelope generators, an LFO and a simple yet powerfull sequencer. `,
    button1Text: 'demo song',
    button1Url: 'https://soundcloud.com/meneervermeer/telemetry',
    button2Text: 'github',
    button2Url: 'https://github.com/mohragk/VermeerMonosynth-1',
  },
  {
    imgUrl: './img/fourier-card.png',
    title: "A visualisation of the Fourier Series in P5.js",
    text: "A rendering of harmonics in audio signals. Switch between square wave, saw wave and triangle wave and add harmonics. Use the keyboard to play some notes.",
    button1Url: 'https://editor.p5js.org/mohragk/full/BkMiw4KxV',
    button1Text: 'demo',
    button2Url: 'https://editor.p5js.org/mohragk/sketches/BkMiw4KxV',
    button2Text: 'edit',
  },
  {
    imgUrl: './img/shifter-card.png',
    title: "DIY sequential shifter using Arduino",
    text: "A simple, robust up-down shifter, designed to work with racing games. The control board is programmed in Arduino and extended to work with a (future) handbrake. A GUI was created for setting different variables for said handbrake.",
    button1Url: 'https://www.youtube.com/watch?v=0ZPwsYKEWEM',
    button1Text: 'youtube',
    button2Url: 'https://github.com/mohragk/Shifter_Handbrake_DIY',
    button2Text: 'github',
  },
  {
    imgUrl: './img/wordyclock-card.png',
    title: "Wordy Clock",
    text: "A clock that literally tells time.",
    button1Url: 'https://editor.p5js.org/mohragk/full/cuRLIK3Pq',
    button1Text: 'demo',
    button2Url: 'https://editor.p5js.org/mohragk/sketches/cuRLIK3Pq',
    button2Text: 'edit',

  },
  {
    imgUrl: './img/matrix-card.png',
    title: "Matrix Effect made in P5.js",
    text: "A contemporary remake of a classic.",
    button1Url: 'https://editor.p5js.org/mohragk/full/Sk2QPOsWE',
    button1Text: 'demo',
    button2Url: 'https://editor.p5js.org/mohragk/sketches/Sk2QPOsWE',
    button2Text: 'edit',

  },
];

class ProjectCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.imgUrl}
        >
          <ProjectItem
            imgUrl={item.imgUrl}
            title={item.title}
            text={item.text}
            button1Text={item.button1Text}
            button1Url={item.button1Url}
            button2Text={item.button2Text}
            button2Url={item.button2Url}
            key={item.title}
          />
          </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        interval={false}
        
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} className=".hide-600-up" id="1" />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} id="2" />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} id="3" />
      </Carousel>
    );
  }
}


export default ProjectCarousel;