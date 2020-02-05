import React from "react";
import "./Card.css";
import LazyLoad from "react-lazyload";

const Card = props => (
  <LazyLoad height={650} offset={-100}>
    <div className={props.card.animation}>
      <div className="front" onClick={() => props.showBack(props.card)}>
        <img src="juice.jpg" alt="Vitamin Juice" className="card-image" />

        <div className="container">
          <h3>
            Vitamin Juice <span className="price">$24.99</span>
          </h3>
          <p>
            Need a jum on your vitamins while drinking? Tired of popping pills?
            Drink our vitamin enhanced juice, available in several flavours.
          </p>
        </div>
      </div>
      <div
        className="container-back back"
        onClick={() => props.showFront(props.card)}
      >
        <h3>
          Vitamin Juice <span className="price">$24.99</span>
        </h3>
        <p>{props.card.description}</p>
      </div>
    </div>
  </LazyLoad>
);

export default Card;
