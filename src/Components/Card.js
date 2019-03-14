import React, { Component } from "react";


class Square extends Component {
    render () {
        let squareStyle = {
            height: this.props.height,
            backgroundColor: '#FF6663'
        };
        return (
            <div style={squareStyle}></div>
        );
    }
}

class Label extends Component {
    render() {

        let labelStyle = {
            fontFamily: "sans-serif",
            fontWeight: "bold",
            padding: 13,
            margin: 0
        };
        return (
            <div style={labelStyle}>{this.props.text}</div>
        );
    }
}

class Card extends Component {
    state = {
        width: 200,
        height: 300
    };

    render() {
        let cardStyle = {
            height: this.props.height,
            width: this.props.width,
            padding: 0,
            backgroundColor: "#FFF",
            WebkitFilter: "drop-shadow(0px 0px 5px #666)",
            filter: "drop-shadow(0px 0px 5px #666)"
        };

        return (
            <div style={cardStyle} id={this.props.id} height={this.state.height} width={this.state.width}>
                <Square height={this.state.width} />
                <Label text="Project 1" />
            </div>
        );
    }
}

export default Card;