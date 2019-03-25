import React, {Component} from "react";
import {Container, Row , Col} from "reactstrap";
import classnames from "classnames";
import "./Art.css";

import Lightbox from 'react-images';

export default class ImageBox extends React.Component {

    state = {
        lightboxIsOpen: false,
        currentImage: 0
    };
    lbItems = [
        {
            src: './img/meneervermeer_logo_80s.png',
        },
        {
            src: './img/telemetry_cover.png',
        },
        {
            src: './img/sacre-coeur-cover.png',
        },
        {
            src: './img/dusk_cover_alt.png',
        },
        {
            src: './img/periodic-layering-cover.png',
        },
        
       
    ];

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

    closeLightbox = () => {
        this.setState({lightboxIsOpen: false});
    }

    openLightBox = (clickedImage) => {
        console.log('trying to open');
        this.setState({
            lightboxIsOpen: true,
            currentImage: clickedImage
        });
    }

    handlePrev = () => {
        let current = this.state.currentImage;
        current = (--current) < 0 ? 0 : current;

        this.setState({currentImage: current});
    };

    handleNext = () => {
        let current = this.state.currentImage;
        current = (++current) > this.lbItems.length - 1 ? 0 : current;
        this.setState({currentImage: current});
    }

  render() {
    return (
        <div>
      <Lightbox
        images={this.lbItems}
        showCloseButton={false}
        isOpen={this.state.lightboxIsOpen}
        backdropClosesModal
        onClickPrev={this.handlePrev}
        onClickNext={this.handleNext}
        onClose={this.closeLightbox}
        currentImage={this.state.currentImage}
        imageCountSeparator=" / "
      />
      <Container style={{minHeight: 'calc(100vh - 360px)'}} >
                <Row >
                    <Col xs="6">
                        <a onClick={ () => this.openLightBox(0)} > <FadeImage imgUrl={this.items[0].imgUrl} title={this.items[0].title} /> </a>
                    </Col>
                    <Col xs="6" >
                        <a onClick={ () => this.openLightBox(1)} ><FadeImage imgUrl={this.items[1].imgUrl} title={this.items[1].title} /> </a>
                    </Col>
                    
                </Row>
                <Row >
                    <Col xs="6" sm="4">
                        <a onClick={ () => this.openLightBox(2)} > <FadeImage imgUrl={this.items[2].imgUrl} title={this.items[2].title} /> </a>
                    </Col>
                    <Col xs="6" sm="4">
                        <a onClick={ () => this.openLightBox(3)} ><FadeImage imgUrl={this.items[3].imgUrl} title={this.items[3].title} />   </a>                 
                    </Col>
                    <Col xs="6" sm="4">
                    <a onClick={ () => this.openLightBox(4)} ><FadeImage imgUrl={this.items[4].imgUrl} title={this.items[4].title} /> </a>
                    </Col>
                </Row>
            </Container>    
            </div>
    );
  }
}



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
        <div style={{marginBottom: '30px'}}>
            <img 
                onMouseEnter={this.onMouseEnterHandler}
                onMouseLeave={this.onMouseExitHandler}
                src={this.props.imgUrl} 
                className={classnames("img-fluid", "float-right", "art-image", {"faded": this.state.isFaded})} 
                style={{cursor: 'pointer'}}
                alt={this.props.title} />
        </div>  
        );
    }
}
