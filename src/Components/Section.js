import React, { Component } from "react";


class Section extends Component {

 

  render() {
    const {title, subtitle, dark, id} = this.props;

    const sectionStyle = {
      minHeight: '100vh',
      backgroundColor: dark ? '#eee' : '#fff',
    };

    const headerStyle = {
      textAlign: 'center',
      fontSize: '62px',
      
    };

    const sectionContentStyle = {
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '40px'
    };

    return (
      <div style={sectionStyle} id={id}>
        <div style={{paddingTop: '60px', paddingBottom: '60px'}}>
          <h1 style={headerStyle}>{title}</h1>
        </div>
        
      <div style={sectionContentStyle} >
        {this.props.children}
      </div>
    </div>
    )

  }
}


export default Section;
