import React from "react";
import WelcomeText from "./WelcomeText";

class App extends React.Component {
    render() {
        return (
            <div className="component-app">
                <WelcomeText/>
            </div>
        );
    }
}

//Why? Is this React's way of making a class public?
export default App;