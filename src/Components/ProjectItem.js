import React, {Component} from "react";
import {Container, Row, Col, Button} from "reactstrap";

export default class ProjectItem extends Component {

    render() {
        const {title, text, imgUrl} = this.props;


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

        
        return (
            <Container fluid style={{ minHeight: '72vh', maxHeight: '72vh'}}>
                <Row style={{minHeight: '72vh'} } noGutters>
                    <Col style={{margin:'60px'}}>
                            <div style={imgStyle} />
                    </Col>
                    <Col style={{marginLeft: '0px', marginRight:'60px'}}>
                    <div style={{position: 'relative', top: '50%', transform: 'translateY(-50%)', minHeight: '50%'}}>
                        <h1>{title}</h1>
                        <p className="lead">{text}</p>
                        <Button color="primary" href="www.google.com" target="_blank">BUTTON</Button>
                    </div>

                        
                       
                    </Col>
                </Row>
            </Container>
        );
    }
}