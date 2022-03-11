import React from "react";
import TestimonialData from "../../data/TestimonialData";
import "./Testimonial.css";
import Item from "./testimonialItem/Item";
function Testimonial() {
    console.log(TestimonialData);
    return (
        <div className="testimonial">
            <div className="testimonial-container">
                <div className="testimonial-title">
                    <h3>TESTIMONIAL</h3>
                    <h1>See what they’re saying about us</h1>
                </div>
                <div className="testimonial-list">
                    {TestimonialData.map((perso) => {
                        return <Item key={perso.id} perso={perso} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
