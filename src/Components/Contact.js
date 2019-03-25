import React, {Component} from "react";
import {Container, Row, Col} from "reactstrap";

import "./NavBar.css";
import "./Contact.css";

const ContactSnippet = props => (
    <div>
        <h3>{props.title}</h3>
        {props.links.map(
            (link) => {
                return <a key={link.url} className="contactButton" href={link.url}><h4>{link.info}</h4></a>
            } 
        )}
        
    </div>
);

class Contact extends Component {
    render() {

        const socialLinks = [
            
            {
                info: 'github',
                url: 'https://www.github.com/mohragk/'
            },
            {
                info: 'codepen',
                url: 'https://codepen.io/sander-vermeer/'
            },
            {
                info: 'linkedin',
                url: 'https://www.linkedin.com/in/sahvermeer/'
            },

        ];

        const emailLinks = [{
            info: 'hello@sander-vermeer.nl',
            url: 'mailto:hello@sander-vermeer.nl'
        },];

        return (
            <div className="d-flex"  style={{ minHeight: 'calc(100vh - 240px)'}}>
            <Container className="align-self-center" >
                <Row className="m-4">
                    <Col > 
                        <h2>Realizing simple or broad solutions using modern methods and solutions is my cup of tea. Feel free to simply say hello or discuss your ambitions.</h2>
                    </Col>
                </Row>
                
                <Row className="m-4" >
                    <Col style={{marginBottom: '20px'}}>   
                        <ContactSnippet title="email." links={emailLinks} />
                    </Col>
                    <Col >  
                        <ContactSnippet  title="social." links={socialLinks} /> 
                    </Col>
                </Row>
            </Container>  
            </div>
        );
    }
}

export default Contact;