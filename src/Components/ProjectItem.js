import React, {Component} from "react";
import {Container, Row, Col} from "reactstrap";
import "./ProjectItem.css";

export default class ProjectItem extends Component {

    render() {
        const {title, text, imgUrl, button1Url, button1Text, button2Url, button2Text} = this.props;

        const imgStyle = {
            maxHeight: '700px',
            padding: '2%',
            background: 'linear-gradient(to bottom, rgba(220, 220, 220, 0) 0%, rgba(220, 220, 220, 0) 22%, gold 22%, gold 100%)',
        };

        return (
            <Container fluid style={{ minHeight: 'calc(100vh - 260px)'}}>
                <Row style={{minHeight: '72vh'} } className="d-flex flex-wrap align-items-center m-4">
                    <Col style={{padding:'2vw 0px 2vw 2vw'}}>
                        
                         <img src={imgUrl} className="img-fluid float-right projectImage" alt={title} style={imgStyle} />
  
                    </Col>
                    <Col style={{marginLeft: '2vw', marginRight:'4vw'}}>
                    
                        <h1>{title}</h1>
                        <p className="lead">{text}</p>
                        <a className="projectButton" href={button1Url} target="_blank" rel="noopener noreferrer"><h4>{button1Text}</h4></a>
                        <a className="projectButton" href={button2Url} target="_blank" rel="noopener noreferrer"><h4>{button2Text}</h4></a>
             

                        
                       
                    </Col>
                </Row>
            </Container>
        );
    }
}