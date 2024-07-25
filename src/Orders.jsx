import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { useStateValue } from "./Sateprovider";
import Order from "./Order";
import "./Orders.css";
import { Link } from "react-router-dom";

function Orders() {
  const [orders, setOrders] = useState([]);
  console.log(orders);
  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      {/* <div className="orders_order">
        {orders?.map((order, i) => (
          <Order key={i} order={order} />
        ))}
      </div> */}
      <div className="orders_container">
        <p>
          Your Order placed successfully.Please keep track your Order.We will
          upadate you on your delivery later.Click
          <Link to="/"> here </Link>
          for shopping
        </p>
      </div>
      <div className="ordered_items">
        {basket.map((item, i) => (
          <Order
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
  );
}

export default Orders;
