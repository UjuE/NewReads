import React from "react";
import "../component-styles/WelcomeText.css"
import NextReadLogo from "../images/CNextReadLogo.png"

class WelcomeText extends React.Component {
    render() {
        return (
            <div id="welcome-block">
                <div id="welcome-block-contents">
                    <img src={NextReadLogo} alt="Next Read Logo" width="140px"/>
                    <p>A simple random generator to determine the next book to read.</p>
                </div>
            </div>
        )
    }
}

export default WelcomeText