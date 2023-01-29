import React from "react";
import "../styles/instituteComp.css"

const InstituteComponent = ({name, location}) => {
    return (
        <div className="institute-comp">
            <img id="institute-img" src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uc_seal_black.png" alt="UC seal"/>
            <div className="org-text">
                <h3 id="org-name">{name}</h3>
                <p id="org-description">{location}</p>
            </div>
        </div>
    )
}

export default InstituteComponent;