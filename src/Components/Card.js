import React, { Component } from "react";


class Square extends Component {
    render () {
        let squareStyle = {
            height: this.props.height,
            background: `url(${this.props.imgUrl})`,
            backgroundColor: '#FF6663',
        };

        let titleStyle = {
            position: 'relative',
            top: '220px',
            left: '20px',
            color: 'white',
            fontSize: '30px',
            
            
        };
        return (
            <div style={squareStyle}>
                <h2 style={titleStyle}>{this.props.title}</h2>
                <CardButton />
            </div>
            
        );
    }
}

class CardButton extends Component {
    render() {
        const buttonStyle = {
            position: 'relative',
            left: '10px',
            top: '10px',
            width: '100px',
            height: 30
        };

        return (
            
                <button style={buttonStyle} >BUTTON</button>
            
        );
    }
}

class Label extends Component {
    render() {
        let labelStyle = {
            fontFamily: "sans-serif",
            fontWeight: "bold",
            paddingTop: '1.5em',
            paddingBottom: '1.5em',
            paddingLeft: '10px',
            margin: 0,

        };
        return (
            <div style={labelStyle}>{this.props.text}</div>
        );
    }
}

class Card extends Component {



    state = {
        width: 600,
        height: this.getHeight
    };

    getHeight = () => {
        return this.state.width + 20;
    }

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
                <Square title={this.props.title} height={this.state.width} imgUrl="./img/monosynth-card.png" />
                <Label text={this.props.text} />
            </div>
        );
    }
}

export default Card;