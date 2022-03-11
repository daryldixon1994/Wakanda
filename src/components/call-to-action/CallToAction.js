import React from "react";
import Photo from "../../assets/callToAction/asian-woman.svg";
import "./CallToAction.css";
function CallToAction() {
    return (
        <div className="CallToAction">
            <div className="CallToAction-container">
                <div className="CallToAction-frame-10">
                    <img src={Photo} alt="" />
                </div>
                <div className="CallToAction-frame-11">
                    <h6>WHAT ARE YOU WAITING FOR?</h6>
                    <h1>Find the talent to get your business growing</h1>
                    <div className="ca-button">
                        <h5>Get Started</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CallToAction;
