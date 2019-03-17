import React, { Component } from "react";
import "./Card.css";


class Square extends Component {
    render () {
        let squareStyle = {
            height: this.props.height,
            background: `url(${this.props.imgUrl})`,
            backgroundColor: '#FF6663',
        };

        let titleStyle = {
            position: 'relative',
            top: `${this.props.height -60}px`,
            left: '20px',
            color: 'gold',
            fontSize: '30px',
            backgroundColor: 'black',
            width: '100%'
            
        };
        return (
            <div style={squareStyle}>
                <h2 style={titleStyle}>{this.props.title}</h2>
                
            </div>
            
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
        
    };

    getHeight = () => {
        return this.state.width;
    }

    render() {
        let cardStyle = {
            height: this.state.height,
            width: this.state.width,
        };

        return (
            <div>
                <a href={this.props.targetUrl} target="_blank" rel="noopener noreferrer">
                <div className="card" style={cardStyle} id={this.props.id} height={this.state.height} width={this.state.width}>
                    <Square title={this.props.title} height={this.state.width * 0.65} imgUrl={this.props.imgUrl} />
                    <Label text={this.props.text} />
                </div>
                </a>
            </div>
        );
    }
}

export default Card;