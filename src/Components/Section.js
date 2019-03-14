import React, { Component } from "react";


class Section extends Component {
  render() {
    const {title, subtitle, dark, id} = this.props;

    const headerStyle = {
      background: 'linear-gradient(to bottom, rgba(220, 220, 220, 0) 0%, rgba(220, 220, 220, 0) 82%, gold 82%, gold 100%)',
      margin: 0, 
      paddingTop: 60, 
      textAlign: 'center'
    };

    return (
      <div className={"section" + (dark ? " section-dark" : "")}>
        <h1 style={headerStyle}>{title}</h1>
      <div className="section-content" id={id}>
        
        <p>{subtitle}</p>
        {this.props.children}
      </div>
    </div>
    )

  }
}


export default Section;
