import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import Card from "./Card";
import ProjectItem from "./ProjectItem";



const items = [
  {
    imgUrl: './img/monosynth-card.png',
    title: "Monosynth-1, an analogue modelled synthesizer VST (C++)",
    text: `This is a software synthesizer, made to be used as a VST plug-in or standalone application. It's realised in C++ using the Juce framework. It features 3 oscillators, 3 different filter models, 3 envelope generators, an LFO and a simple yet powerfull sequencer. `,
    button1Text: 'git',
    button1Url: 'https://github.com/mohragk/VermeerMonosynth-1',

    
  },
  {
    imgUrl: './img/fourier-card.png',
    title: "A visualisation of the Fourier Series in P5.js",
    text: "A rendering of harmonics in audio signals. Switch between square wave, saw wave and triangle wave and add harmonics. Use the keyboard to play some notes.",
    button1Url: 'https://editor.p5js.org/mohragk/full/BkMiw4KxV',
    button1Text: 'demo'

  },
  {
    title: "An anlogue modelled synthesizer VST, made with the Juce framework in C++.",
    text: "It features 3 oscillators, 3 filters and a simple, yet effective, sequencer."
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
          key={item.src}
        >
          <ProjectItem
            imgUrl={item.imgUrl}
            title={item.title}
            text={item.text}
            button1Text={item.button1Text}
            button1Url={item.button1Url}
            button2Text={item.button2Text}
            button2Url={item.button2Url}
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
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default ProjectCarousel;