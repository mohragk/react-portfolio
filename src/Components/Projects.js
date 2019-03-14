import React, {Component} from "react";
import Card from "./Card";

class Projects extends Component {
    render() {
        return (
            <div style={{overflow: 'hidden'}}>
                <Card id="card1" />
                <Card id="card2" />
                <Card id="card1" />
                <Card id="card2" />
                <Card id="card1" />
                <Card id="card2" />
            </div>
        );
    }
}

export default Projects;