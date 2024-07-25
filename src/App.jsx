import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { useEffect } from "react";
import { useStateValue } from "./Sateprovider";
import { auth } from "./firebase";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is ", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        ></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route
          path="/Payment"
          element={
            <>
              <Header />
              <Payment />
            </>
          }
        ></Route>
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        ></Route>
        <Route
          path="/Orders"
          element={
            <>
              <Header />
              <Orders />
            </>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
