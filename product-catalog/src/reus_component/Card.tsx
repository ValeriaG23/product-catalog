import React from 'react';
import {CardTypes} from '../types/CardTypes';

const Card: React.FC<CardTypes> = ({ name, price, image, onAddToCart }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <h2 className="card-name">{name}</h2>
      <p className="card-price">${price}</p>
      <button onClick={onAddToCart} className="btn-add-to-cart">Add to Cart</button>
    </div>
  );
};

export default Card;