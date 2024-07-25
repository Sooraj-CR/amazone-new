import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./Sateprovider";
import { useNavigate } from "react-router";

function SubTotal({ length }) {
  const [{ basket }] = useStateValue();
  const navigate = useNavigate();
  // console.log("cart produts", length);
  return (
    <div className="subtotal">
      {/* {price} */}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length}items): <strong>{value} </strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        suffix={"Rs"}
      />
      <button onClick={(e) => navigate("/Payment")}>Proced To Checkout</button>
    </div>
  );
}

export default SubTotal;
