import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1> Check out these</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="My first project"
              label="Games"
              path="/products"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Second project"
              label="More Games"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="My first project"
              label="Something fun"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Second project"
              label="More"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
