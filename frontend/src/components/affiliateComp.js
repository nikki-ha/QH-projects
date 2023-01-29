import React from "react";
import "../styles/affiliateComp.css"

const AffiliateComp = () => {
    return (
        <div className="affiliate-comp">
            <img id="affiliate-img" src="https://illustoon.com/photo/4536.png" alt="affiliate-img"/>
            <div className="org-text">
                <h3 id="org-name">Org Name</h3>
                <p id="org-description">Org description.</p>
            </div>
        </div>
    )
}

export default AffiliateComp;