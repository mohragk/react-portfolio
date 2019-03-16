import React, {Component} from "react";
import {Container, Row, Col, Button} from "reactstrap";
import "./ProjectItem.css";

export default class ProjectItem extends Component {

    render() {
        const {title, text, imgUrl, button1Url, button1Text, button2Url, button2Text} = this.props;


        const imgStyle = {
            backgroundImage: `url(${imgUrl})`,
            backgroundSize: 'contain',
            position: 'absolute',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%',
            minWidth: '150px',
            
        };

        const buttonStyle = {
            border: 'none',
            color: 'black',
            padding: '0px 5px',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-block',
            background: 'linear-gradient(to bottom, rgba(220, 220, 220, 0) 0%, rgba(220, 220, 220, 0) 90%, gold 90%, gold 100%)' 
        };

        
        return (
            <Container fluid style={{ minHeight: '72vh', maxHeight: '72vh'}}>
                <Row style={{minHeight: '72vh'} } noGutters>
                    <Col style={{margin:'60px'}}>
                            <div style={imgStyle} />
                    </Col>
                    <Col style={{marginLeft: '0px', marginRight:'160px'}}>
                    <div style={{position: 'relative', top: '50%', transform: 'translateY(-50%)', minHeight: '50%'}}>
                        <h1>{title}</h1>
                        <p className="lead">{text}</p>
                        <a className="projectButton" href={button1Url} target="_blank" ><h4>{button1Text}</h4></a>
                        <a className="projectButton" href={button2Url} target="_blank" ><h4>{button2Text}</h4></a>
                    </div>

                        
                       
                    </Col>
                </Row>
            </Container>
        );
    }
}