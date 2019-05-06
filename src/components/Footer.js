import React, {Component} from "react"
import poweredby_nytimes from "../images/poweredby_nytimes_150a.png"
import "../component-styles/Footer.css"

class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <div className="poweredby">
                    <a href="https://developer.nytimes.com"  target="_blank" rel="noopener noreferrer"><img src={poweredby_nytimes} alt="Powered by NyTimes"/></a>
                </div>
            </div>
        )
    }
}

export default Footer