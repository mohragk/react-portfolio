import React, { Component } from "react";
import "./Section.css";

class Section extends Component {

 

  render() {
    const {title, dark, id} = this.props;

    const sectionStyle = {
      minHeight: 'calc(100vh - 20px)',
      backgroundColor: dark ? '#eee' : '#fff',
    };

    const headerStyle = {
      textAlign: 'center',      
    };

    const sectionContentStyle = {
      position: 'relative',
        margin: '0px auto',
        padding: '0px'
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
        {this.props.children}
      </div>
    </div>
    )

  }
}


export default Section;
