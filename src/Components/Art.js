import React, {Component} from "react";
import {Container, Row , Col} from "reactstrap";
import classnames from "classnames";
import "./Art.css";





class FadeImage extends Component {
    state = {
        isFaded: true
    };

    onMouseEnterHandler = () => {
        this.setState(
            {  isFaded: false }
        );
    };


    onMouseExitHandler = () => {
        this.setState(
            {  isFaded: true }
        );
    };


    render() {
        return (
        <div>
            <img 
                onMouseEnter={this.onMouseEnterHandler}
                onMouseLeave={this.onMouseExitHandler}

                src={this.props.imgUrl} 
                className={classnames("img-fluid", "float-right", "art-image", {"faded": this.state.isFaded})} 
                alt={this.props.title} />
        </div>  
        );
    }
}

class Art extends Component {

    items = [
        {
            imgUrl: './img/meneervermeer_logo_80s.png',
            title: 'Meneer Vermeer logo',
        },
        {
            imgUrl: './img/telemetry_cover.png',
            title: 'Cover art Telemetry',
        },
        {
            imgUrl: './img/sacre-coeur-cover.png',
            title: 'Cover art Sacre Coeur',
        },
        {
            imgUrl: './img/dusk_cover_alt.png',
            title: 'Cover art Dusk EP',
        },
        {
            imgUrl: './img/periodic-layering-cover.png',
            title: 'Cover art Periodic Layering',
        },
        
       
    ];

    render() {

        return (
            <Container style={{minHeight: 'calc(100vh - 360px)'}} >
                <Row style={{paddingBottom: '30px'}}>
                    <Col xs="6">
                        <FadeImage imgUrl={this.items[0].imgUrl} title={this.items[0].title} />
                    </Col>
                    <Col xs="6" >
                    <FadeImage imgUrl={this.items[1].imgUrl} title={this.items[1].title} />
                    </Col>
                    
                </Row>
                <Row style={{paddingBottom: '30px'}}>
                    <Col xs="6" sm="4">
                        <FadeImage imgUrl={this.items[2].imgUrl} title={this.items[2].title} /> 
                    </Col>
                    <Col xs="6" sm="4">
                        <FadeImage imgUrl={this.items[3].imgUrl} title={this.items[3].title} />                    
                    </Col>
                    <Col xs="6" sm="4">
                        <FadeImage imgUrl={this.items[4].imgUrl} title={this.items[4].title} />                    
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default Art;