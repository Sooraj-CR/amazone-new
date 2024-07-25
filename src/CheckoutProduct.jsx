import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./Sateprovider";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log({ id, title, image, price, rating });

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkout_Product">
      <img className="checkout_image" src={image} alt="image of cart item" />

      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>Rs</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>⭐</p>
            ))}
        </div>
        <button onClick={removeFromCart}>Remove from Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
