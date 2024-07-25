import "./Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";

function Order({ id, title, image, price, rating }) {
  console.log("orders", { id, title, image, price, rating });
  return (
    <div className="order">
      <div className="order_title">{title}</div>
      <div>
        <img className="order_image" src={image} alt="" />
      </div>
      <div className="order_price">{price} Rs</div>
    </div>
  );
}

export default Order;
