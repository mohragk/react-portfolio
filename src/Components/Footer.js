import React, {Component} from "react";

class Footer extends Component {
    render() {
        let footerStyle = {
            backgroundColor: '#CCC',
            padding: '20px 40px'
        };

        return (
            <div style={footerStyle}>
                <p>copyright Sander Vermeer {(new Date().getFullYear())} (c).</p>
            </div>
        );
    }
}

export default Footer;