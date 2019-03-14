import React, { Component } from "react";


class Section extends Component {
  render() {
    const {title, subtitle, dark, id} = this.props;
    return (
      <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {this.props.children}
      </div>
    </div>
    )

  }
}


export default Section;
