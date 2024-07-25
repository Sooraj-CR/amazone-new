import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import add from "./assets/add.png";
import { useStateValue } from "./Sateprovider";
import SubTotal from "./SubTotal";
import { getBasketTotal } from "./reducer";

function Checkout() {
  const [{ basket, user }] = useStateValue();
  const totalPriceInBasket = getBasketTotal(basket);
  console.log("total price in cart", totalPriceInBasket);

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img className="checkout_ad" src={add} alt="checkout add image" />
        <div className="card_container">
          {!basket?.length ? (
            <div>
              <h3>
                Hi,<h3>{user?.email}</h3> Your shopping basket is empty
              </h3>
              <p>Please add your products to basket for checkout</p>
            </div>
          ) : (
            <div className="checkout_title">
              <h3>Your Shopping Basket ({basket?.length})</h3>
              {basket.map((item, index) => (
                <CheckoutProduct
                  key={index}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
              {/* <h1>You have {basket.length} products in your Cart</h1> */}
            </div>
          )}
        </div>
      </div>
      {basket.length > 0 && (
        <div className="checkout_right">
          <SubTotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
