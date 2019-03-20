import React, {Component} from "react";
import {Container, Row, Col} from "reactstrap";

import "./NavBar.css";
import "./Contact.css";

const ContactSnippet = props => (
    <div>
        <h3>{props.title}</h3>
        {props.links.map(
            (link) => {
                return <a className="contactButton" href={link.url}><h4>{link.info}</h4></a>
            } 
        )}
        
    </div>
);

class Contact extends Component {
    render() {

        const socialLinks = [
            {
                info: 'linkedin',
                url: 'https://www.linkedin.com/in/sahvermeer/'
            },
            {
                info: 'github',
                url: 'https://www.github.com/mohragk/'
            },

        ];

        const emailLinks = [{
            info: 'info@sander-vermeer.nl',
            url: 'mailto:info@sander-vermeer.nl'
        },];

        return (
            <div className="d-flex"  style={{ minHeight: 'calc(100vh - 240px)'}}>
            <Container className="align-self-center" >
                <Row className="m-4">
                    <Col > 
                        <h2>I'm available for work.</h2>
                    </Col>
                </Row>
                
                <Row className="m-4" >
                    <Col >   
                        <ContactSnippet title="email." links={emailLinks} info="info@sander-vermeer.nl" url="mailto:info@sander-vermeer.nl" />
                    </Col>
                    <Col >  
                        <ContactSnippet  title="social." links={socialLinks} info="linkedin" url="https://www.linkedin.com/in/sahvermeer/"/> 
                    </Col>
                </Row>
            </Container>  
            </div>
        );
    }
}

export default Contact;