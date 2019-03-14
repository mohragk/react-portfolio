import React, { Component } from "react";


class Square extends Component {
    render () {
        let squareStyle = {
            display: 'flex',
            height: this.props.height,
            background: `url(${this.props.imgUrl})`,
            backgroundColor: '#FF6663',
        };

        let titleStyle = {
            color: 'gold',
            padding: `${this.props.height - 60}px 20px`,
            
        };
        return (
            <div style={squareStyle}>
                <h2 style={titleStyle}>Monosynth-1</h2>
            </div>
            
        );
    }
}

class Label extends Component {
    render() {
        let labelStyle = {
            fontFamily: "sans-serif",
            fontWeight: "bold",
            padding: 10,
            margin: 5,

        };
        return (
            <div style={labelStyle}>{this.props.text}</div>
        );
    }
}

class Card extends Component {

    getHeight = () => {
        return this.state.width + 20
    }

    state = {
        width: 300,
        height: 350
    };

    render() {
        let cardStyle = {
            height: this.state.height,
            width: this.state.width,
            padding: '0px 10px',
            marginRight: 20,
            marginBottom: 60,
            backgroundColor: "#FFF",
            float: 'left',
            background: "linear-gradient(to bottom, rgba(220, 220, 220, 0) 0%, rgba(220, 220, 220, 0) 62%, gold 62%, gold 100%)"
        };

        return (
            <div style={cardStyle} id={this.props.id} height={this.state.height} width={this.state.width}>
                <Square height={this.state.width} imgUrl="./img/monosynth-card.png" />
                <Label text="Project 1" />
            </div>
        );
    }
}

export default Card;