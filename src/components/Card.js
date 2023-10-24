import React from "react";
import cardImage from '../images/house.jpg'
import Bedroom from "./Bedroom";
import Bath from "./Bath";

function Card({name, bed, baths}) {
    return (
        <div className="card">
            <img src={cardImage} alt="Card" className="card-image" />
            <div className="card-content">
                <h2>{name}</h2>
                <div className="property-info">
                    <Bath value={baths} />
                    <Bedroom value={bed}/>
                </div>
            </div>
        </div>
    )
}

export default Card;