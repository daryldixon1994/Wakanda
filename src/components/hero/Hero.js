import React from "react";
import Pic from "../../assets/Hero-pic.svg";
import "./Hero.css";
function Hero() {
    return (
        <div className="hero-main">
            <div className="hero-container">
                <div className="hero-content">
                    <h1 title="hero-title">
                        Recruit top talented freelancer for your business
                    </h1>
                    <p title="hero-paragraph">
                        Connect you to thoudsands of talented freelancer from
                        any industry. You can have the best people in just few
                        simple steps.
                    </p>
                    <div className="Makers-button">
                        <h5>Get Started</h5>
                    </div>
                </div>
                <div className="hero-pic">
                    <img src={Pic} alt="hero-pic" width={500} />
                </div>
            </div>
        </div>
    );
}

export default Hero;
