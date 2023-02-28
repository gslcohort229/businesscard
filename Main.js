import React from "react"
import emailLogo from "../images/Mail.png"
import GitHubIcon from "../images/GitHub Icon.png"

export default function Main() {
    return (
        <div className="main--container">
            <h3 className="main--heading main--content">
                Gabino Sandoval
            </h3>
            <h4 className="main--h4--one main--content">
                Developer
            </h4>
            <span className="main--span--two main--content">
            https://www.push2stand.com/
            </span>


            <div className="btn--class">
            <button className="main--btn btn--email">
                <img src={emailLogo} className="email" alt=""/>Email
            </button>
            <button className="main--btn btn--github">
                <img src={GitHubIcon} className="github" alt=""/>GitHub
            </button>
            </div>


            <div className="main--about--interest">
                <h3>About</h3>
                <p> i like to design in the digital/physical world </p>
                <h3>Interests</h3>
                <p> all things digital signal process related </p>
            </div>

        </div>
    )
}