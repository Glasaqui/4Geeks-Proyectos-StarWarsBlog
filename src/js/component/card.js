import React, { Component } from "react";
import { Link } from "react-router-dom";

const Card = (props) => (

    <div className="p-2">
        <div className="card" style={{minWidth: "18rem"}}>
            <img src="https://picsum.photos/200" className="card-img-top" alt="Imagen de Picsum"/>
            <div className="card-body">
                <h5 className="card-title">{props.name.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to={`/character/${props.name.uid}`} clLinkssName="btn btn-primary">Go somewhere</Link>
            </div>
        </div>
    </div>
);

export default Card;
