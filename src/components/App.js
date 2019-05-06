import React from "react";
import WelcomeText from "./WelcomeText";
import BookGenerator from "./BookGenerator";
import Footer from "./Footer";

class App extends React.Component {
    render() {
        return (
            <div className="component-app">
                <WelcomeText/>
                <BookGenerator />
                <Footer />
            </div>
        );
    }
}

//Why? Is this React's way of making a class public?
export default App;