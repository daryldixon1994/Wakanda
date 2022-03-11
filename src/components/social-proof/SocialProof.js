import React from "react";
import Airbnb from "../../assets/logos/Airbnb.svg";
import Google from "../../assets/logos/Google.svg";
import Slack from "../../assets/logos/Slack.svg";
import Netflix from "../../assets/logos/Netflix.svg";
import Amazon from "../../assets/logos/Amazon.svg";
import "./SocialProof.css";
function SocialProof() {
    return (
        <div className="socialProf-container">
            <div className="socialProof-block">
                <div className="logos">
                    <img src={Airbnb} alt="social-logo" />
                    <img src={Google} alt="social-logo" />
                    <img src={Slack} alt="social-logo" />
                    <img src={Netflix} alt="social-logo" />
                    <img src={Amazon} alt="social-logo" />
                </div>
            </div>
        </div>
    );
}

export default SocialProof;
