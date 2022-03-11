import React from "react";
import StarRatings from "react-star-ratings";
import "./Item.css";
function Item({ perso }) {
    return (
        <div className="item">
            <div className="item-profile">
                <img src={perso.pic} alt="" width={40} />
                <div className="item-title">
                    <h4> {perso.name} </h4>
                        <StarRatings
                            rating={perso.rate}
                            starRatedColor="gold"
                            numberOfStars={perso.rate}
                            name="rating"
                            starDimension="15px"
                            starSpacing="2px"
                        />
                </div>
            </div>
            <p> {perso.text} </p>
        </div>
    );
}

export default Item;
