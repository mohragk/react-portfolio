import React, { Component } from "react";
import "./Downloads.css";
import {Link} from "react-router-dom"

class Downloads extends Component {

 

  render() {
    const {title, dark, id} = this.props;

    const sectionStyle = {
      minHeight: 'calc(100vh)',
      backgroundColor: dark ? '#eee' : '#fff',
    };

    const headerStyle = {
      textAlign: 'center',      
    };

    const sectionContentStyle = {
        position: 'relative',
        maxWidth: "calc(70vw)",
        margin: '0px auto',
        padding: '48px 0px'
    };

    const colorStyle = {
      color: this.props.color
    };

    return (
      <div style={sectionStyle} id={id}>
        <div style={{paddingTop: '40px', paddingBottom: '0px'}}>
          <h1 className="section-header" style={headerStyle}>{title}<span style={colorStyle}>.</span></h1>
        </div>
        
      <div style={sectionContentStyle} >
        <ul>
            <li><Link style={{fontSize: "2rem"}} to="/files/Paardensprong-Game.zip" target="_blank" download>Paardensprong Game</Link></li>
        </ul>
      </div>
    </div>
    )

  }
}


export default Downloads;
