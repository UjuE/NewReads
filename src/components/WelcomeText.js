import React from "react";
import "../component-styles/WelcomeText.css"
import NextReadLogo from "../images/CNextReadLogo.png"
import ujustoys from "../images/ujustoys.png";

class WelcomeText extends React.Component {
    render() {
        return (
            <div id="welcome-block">
                <div id="welcome-block-contents">
                    <img src={NextReadLogo} alt="Next Read Logo" width="140px"/>
                    <p>A simple random generator to determine the next book to read.</p>
                </div>
                <div className="creator">
                    <a href="https://ujuezeoke.com" target="_blank" rel="noopener noreferrer"><img src={ujustoys} alt="One of Uju's Toys"/></a>
                </div>
            </div>
        )
    }
}

export default WelcomeText