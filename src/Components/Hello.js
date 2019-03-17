import React, {Component} from "react";
import {Container, Row} from "reactstrap";
import { Link } from "react-scroll";
import "./Hello.css";

class Hello extends Component {
    render() {

        return (
            <Container className="d-flex" style={{minHeight: 'calc(100vh - 360px)'}} >
                <Row  className="align-self-center m-4">
                <h2 style={{marginBottom: '40px'}}>is a Netherlands based developer, designer and allround tinkerer.</h2>
                <h2>I specialise in
                    <span className="display-4">
                        <span style={{color: 'skyblue'}}><strong> &#123;</strong></span> 
                        <span style={{fontSize: '32px'}}>C++, Java, JavaScript</span>
                        <span style={{color: 'skyblue'}}><strong>&#125; </strong></span> 
                    </span>
                            and also like to fool around with Arduino. Check out some of my projects <Link
                            activeClass="helloButton"
                            className="helloButton"
                            to="projectsSection"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            style={{cursor: 'pointer'}}
                    > 
                        below.
                    </Link> 
                </h2>
                </Row>
            </Container>    
        );
    }
}

export default Hello;