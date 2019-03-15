import React, {Component} from "react";
import {Jumbotron, Button} from "reactstrap";
import { Link, animateScroll as scroll } from "react-scroll";

class Hello extends Component {
    render() {
        let contactStyle = {
            minHeight: '500px',
            maxWidth: ' 1200px',
            margin: '0px auto',
            marginTop: '200px'
        };

        return (
            <div style={contactStyle}>
                <h1 className="display-3">I'm Sander Vermeer.</h1>
                <p className="lead">I'm a Dutch based developer, designer and allround tinkerer.</p>
                <p>I specialise in C++, Java, JavaScript and also like to fool around with Arduino. Check out some of my projects <Link
                        activeClass="activeGold"
                        to="projectsSection"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        style={{cursor: 'pointer'}}
                > 
                    <span style={{textDecoration: 'underline'}}>below.</span>
                </Link> </p>
                <p className="lead">
                
                </p>
            </div>    
        );
    }
}

export default Hello;