import React, {Component} from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Card from "./Card";


class ProjectsAlt extends Component {
    render() {
        return (

            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={50}
                totalSlides={3}
            >
            <Slider>
                <Slide index={0}>
                
                <Image src="./img/monosynth-card.png" isBgImage />
                
                </Slide>
                <Slide index={1}>I am the second Slide.</Slide>
                <Slide index={2}>I am the third Slide.</Slide>
            </Slider>
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
            </CarouselProvider>

        );
    }
}

export default ProjectsAlt;