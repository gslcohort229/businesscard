import React from "react"
import twitterLogo from "../images/Twitter Icon.png"
import instaLogo from "../images/Instagram Icon.png"
import linkedin from "../images/linkedin.png"

export default function Footer() {
    return(
        <div className="footer--container">
            <div className="footer--items">
            <img src={twitterLogo} alt="" className="footer--image" />
            <img src={instaLogo} alt="" className="footer--image" />
            <img src={linkedin} alt="" className="footer--image" />
            </div>
        </div>
    )
}