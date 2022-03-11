import React from "react";
import "./FrameItem.css";
function FrameItem({ item }) {
    return (
        <div className="item-container">
            <img src={item.icon} alt="icon" width={108} />
            <div className="item-body">
                <h2> {item.title} </h2>
                <p> {item.description} </p>
            </div>
        </div>
    );
}

export default FrameItem;
