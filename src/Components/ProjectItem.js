import React, {Component} from "react";
import {Container, Row, Col} from "reactstrap";
import "./ProjectItem.css";

export default class ProjectItem extends Component {
    render() {
        const {title, text, imgUrl, buttons} = this.props;

        return (
            <Container fluid style={{ minHeight: 'calc(100vh - 260px)'}}>
                <Row style={{minHeight: '72vh'} } className="d-flex flex-wrap align-items-center m-4">
                    <Col style={{padding:'2vw 0px 2vw 2vw'}}>
                        
                         <img src={imgUrl} className="img-fluid float-right projectImage" alt={title} />
  
                    </Col>
                    <Col style={{marginLeft: '2vw', marginRight:'4vw'}}>
                    
                        <h2>{title}</h2>
                        <p className="lead" style={{padding: '3vh 0px'}}>{text}</p>
                        
                        { 
                            buttons.map(
                                (btn) => {
                                    if (btn.download) {
                                        return(<a className="projectButton" href={btn.url} download><h4>{btn.name}</h4> </a>);
                                    } else {
                                        return(<a className="projectButton" href={btn.url} target="_blank" rel="noopener noreferrer"><h4>{btn.name}</h4> </a>);
                                    }
                                }
                            )       
                        }
                       
                    </Col>
                </Row>
            </Container>
        );
    }
}