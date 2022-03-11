import React from "react";
import { featuresData } from "../../data/Data";
import FrameItem from "./frameItem/FrameItem";
import "./Features.css";
function Features() {
    return (
        <div className="features">
            <div className="features-container">
                <div className="frame-10">
                    <h1 title="feature">FEATURE</h1>
                    <h1 title="features-title">
                        The benefit of using our platform
                    </h1>
                </div>
                <div className="frame-11">
                    {featuresData.map((item) => {
                        return <FrameItem key={item.id} item={item} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default Features;
