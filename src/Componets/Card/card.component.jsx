import React from "react";
import './card.styles.css';

export const Card = (props)=>{
    return <div className="card-container">
        <img src={`https://robohash.org/${props.mosnter.id}?set=set2`}/>
        <h1>{props.mosnter.name}</h1>
        <h2>{props.mosnter.email}</h2>
    </div>
}