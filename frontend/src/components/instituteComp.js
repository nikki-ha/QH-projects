import React from "react";
import "../styles/instituteComp.css"

const InstituteComponent = ({name}) => {
    return (
        <div className="institute-comp">
            <img id="institute-img" src="https://content.sportslogos.net/logos/35/882/full/4821_ucla_bruins-alternate-1996.png" alt="affiliate-img"/>
            <div className="org-text">
                <h3 id="org-name">{name}</h3>
                <p id="org-description">#1 Public University</p>
            </div>
        </div>
    )
}

export default InstituteComponent;