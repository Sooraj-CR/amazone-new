import "./Payment.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./Sateprovider";
import CheckoutProduct from "./CheckoutProduct";
import { getBasketTotal } from "./reducer";
import GooglePayButton from "@google-pay/button-react";
import { useNavigate } from "react-router-dom";
import { db } from "./firebase";

function Payment() {
  const [{ basket, user }] = useStateValue();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Orders");
    db.collection("users")
      .doc(user?.uid)
      .collection("orders")
      .doc(basket.id)
      .set({
        basket: basket,
        amount: getBasketTotal(basket),
      });
  };

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout(
          <Link to="/Checkout"> {basket.length} items)</Link>
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>Madipakkam</p>
            <p>Chennai</p>
            <p>600091</p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {getBasketTotal(basket) ? (
          <div className="payment_section">
            <h3>Payment Method</h3>
            <div className="payment_total">
              Your total is<h3>{getBasketTotal(basket)} Rs</h3>
              <div className="payment_button">
                <p>Currently we are accepting payments only via Google Pay.</p>
                {getBasketTotal(basket) ? (
                  <GooglePayButton
                    onClick={handleClick}
                    environment="TEST"
                    paymentRequest={{
                      apiVersion: 2,
                      apiVersionMinor: 0,
                      allowedPaymentMethods: [
                        {
                          type: "CARD",
                          parameters: {
                            allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                            allowedCardNetworks: [
                              "MASTERCARD",
                              "VISA",
                              "RUPAY",
                            ],
                          },
                          tokenizationSpecification: {
                            type: "PAYMENT_GATEWAY",
                            parameters: {
                              gateway: "example",
                              gatewayMerchantId: "exampleGatewayMerchantId",
                            },
                          },
                        },
                      ],
                      merchantInfo: {
                        merchantId: "12345678901234567890",
                        merchantName: "Demo Merchant",
                      },
                      transactionInfo: {
                        totalPriceStatus: "FINAL",
                        totalPriceLabel: "Total",
                        totalPrice: "100.00",
                        currencyCode: "INR",
                        countryCode: "",
                      },
                    }}
                    onLoadPaymentData={(paymentRequest) => {
                      console.log("load payment data", paymentRequest);
                    }}
                  />
                ) : (
                  "Your shopping basket is empty.Please add your products to basket for checkout"
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="payment_section">
            <div className="payment_total">
              Your basket is empty.Click
              <Link to="/"> here </Link>
              for shopping
            </div>
          </div>
        )}

        <div className="payment_details"></div>
      </div>
    </div>
  );
}

export default Payment;
