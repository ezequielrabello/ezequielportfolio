import React from "react";
import "./Card.css"

function Card({img, description}) {
    return(
        <div className="cardContainer">
            <div className="imgCard">
                <img src={img} alt="Project" />
            </div>
            <div className="cardDescription">
                <p className="description">{description}</p>
            </div>
        </div>
    )
}

export default Card