import React, {Component} from "react";
import Card from "./Card";

class Projects extends Component {
    render() {
        return (
            <div >
                <Card 
                    id="card1" 
                    title="Monosynth-1 (c++)" 
                    text="An analogue modelled VST synthesizer made with the Juce framework." 
                    imgUrl="./img/monosynth-card.png"
                    targetUrl="https://github.com/mohragk/VermeerMonosynth-1"
                />
                <Card 
                    id="card2" 
                    title="Fouries Serial Visualisation (P5.js)" 
                    text="A visualisation of the Fouries Series, made with P5.js." 
                    imgUrl="./img/fourier-card.png"
                    targetUrl="https://editor.p5js.org/mohragk/full/BkMiw4KxV"
                />
                <Card 
                    id="card3" 
                    title="Matrix Effect (P5.js)" 
                    text="A remake of a classic." 
                    imgUrl="./img/matrix-card.png"
                    targetUrl="https://editor.p5js.org/mohragk/full/Sk2QPOsWE"
                />
                <Card 
                    id="card4" 
                    title="Wordy Clock (P5.js)" 
                    text="A clock that literally tells time." 
                    imgUrl="./img/wordyclock-card.png"
                    targetUrl="https://editor.p5js.org/mohragk/full/cuRLIK3Pq"
                />
                
            </div>
        );
    }
}

export default Projects;