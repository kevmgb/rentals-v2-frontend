import React from "react";
import cardImage from '../images/house.jpg'
import Bedroom from "./Bedroom";
import Bath from "./Bath";
import { Link } from 'react-router-dom';

function Card({id, name, beds, baths}) {
    return (
        // <Link to={{ pathname: `/listing/detail/${id}`, state: { id, name, beds, baths } }}>
        <Link to={`/listing/detail/${id}`} state={{id, name, beds, baths}}>
            <div className="card">
                <img src={cardImage} alt="Card" className="card-image" />
                <div className="card-content">
                    <h2>{name}</h2>
                    <div className="property-info">
                        <Bath value={baths} />
                        <Bedroom value={beds}/>
                    </div>
                </div>
            </div>
        </Link>
        
    )
}

export default Card;