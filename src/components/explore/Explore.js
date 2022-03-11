import React from "react";
import Portrait from "../../assets/explore/portrait.svg";
import "./Explore.css";
function Explore() {
    return (
        <div className="explore">
            <div className="explore-container">
                <div className="explore-content">
                    <h1>Explore and hire talent from our platform</h1>
                    <p>
                        We've got experts for every industry - all under one
                        roof! You can find everything from WordPress developers
                        to Graphic designers to copywriters and many more at
                        Wakanda.
                    </p>
                    <div className="Makers-button">
                        <h5>Explore now</h5>
                    </div>
                </div>
                <div className="explore-image">
                    <img src={Portrait} alt="portrait" width={564} />
                </div>
            </div>
        </div>
    );
}

export default Explore;
