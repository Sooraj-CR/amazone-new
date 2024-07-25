import React from "react";
import "./Product.css";
import { useStateValue } from "./Sateprovider";

function Product({ id, title, image, price, rating }) {
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>Rs</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill() 
            .map((_, index) => (
              <p key={index}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="image of product" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
