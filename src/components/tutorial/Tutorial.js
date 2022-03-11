import React from "react";
import { tutoData } from "../../data/Data";
import Wireframes from "../../assets/tuto/Cards.svg";
import "./Tutorial.css";
function Tutorial() {
    return (
        <div className="tuto">
            <div className="tuto-container">
                <div className="wireframes">
                    <img src={Wireframes} alt="" />
                </div>
                <div className="frame-12">
                    <h1>Wakanda is an easy platform to find talent</h1>
                    <div className="tuto-group">
                        {tutoData.map((elt) => (
                            <div key={elt.id} className="item-text">
                                <div className="circle">{elt.id}</div>
                                <h3 className="tuto-text"> {elt.text} </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tutorial;
