import React, {Component} from "react";
import {Container, Row, Col} from "reactstrap";

import "./NavBar.css";
import "./Contact.css";

const ContactSnippet = props => (
    <div style={{marginTop: '40px'}}>
        <h3>{props.title}</h3>
        <a className="contactButton" href={props.url}>
            <h4>{props.info}</h4>
        </a>
    </div>
);

class Contact extends Component {
    render() {
        return (
            <Container  style={{padding: '80px 40px'}} >
                
                <Row style={{ minHeight: 'calc(60vh - 240px)'}} >
                    <Col className="col-12">
                        <h1 className="display-3">I'm available for work.</h1>
                    </Col>
                    <Col>   
                        <ContactSnippet title="email." info="info@sandervermeer.nl" url="mail:info@sandervermeer.nl" />
                    </Col>
                    <Col>  
                        <ContactSnippet  title="social." info="linkedin" url="https://www.linkedin.com/in/sahvermeer/"/> 
                        
                    </Col>
                    <Col>   
                        <ContactSnippet  title="call." info="06 40 88 33 56 " url="tel:0640883356" />
                    </Col>
                </Row>
            </Container>  
        );
    }
}

export default Contact;