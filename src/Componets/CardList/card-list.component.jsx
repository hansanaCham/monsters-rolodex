import React from "react";
import "./card-list.styles.css";
import { Card } from "../Card/card.component";

export const CardList = (props) => {
  console.log(props);
  return (
    <div className="card-list">
      {props.monsters.map((mosnter) => (
        <Card key={mosnter.id} mosnter={mosnter}></Card>
      ))}
    </div>
  );
};
