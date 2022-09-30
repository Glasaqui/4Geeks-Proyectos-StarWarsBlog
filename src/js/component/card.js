import React, { Component } from "react";
import { Link } from "react-router-dom";

const Card = (props) => (

    <div className="p-2">
        <div className="card" style={{minWidth: "18rem"}}>
            <img src="https://starwars-visualguide.com/assets/img/characters/${props.name.id}.jpg" className="card-img-top" alt="Imagen de Picsum"/>
            <div className="card-body">
                <h5 className="card-title">{props.name.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                
               
                <Link to={`/character/${props.name.uid}`} >
                <span className="btn btn-outline-primary btn-lg" href="#" role="button">
                        Learn more!
                    </span>
                </Link>
                
            </div>
        </div>
    </div>
);

export default Card;
