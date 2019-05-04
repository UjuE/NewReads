import React from "react";
import "../component-styles/WelcomeText.css"

class WelcomeText extends React.Component {
    render() {
        return (
            <div id="welcome-block">
                <h1 id="title">Next Reads</h1>
                <p id="sub-title">A simple generator to determine the next book to read</p>
            </div>
        )
    }
}
export default WelcomeText