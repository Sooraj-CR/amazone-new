import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "./assets/amazone_logo_black.png";
import { auth } from "./firebase";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handle_signin_button = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => error.message);
  };
  const handle_register_button = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <>
      <div className="login_container">
        <div>
          <img className="logo" src={logo} alt="amazone logo" />
        </div>
        <form className="form">
          <h1>Sign in</h1>
          <div className="input_fields">
            <p className="header_text">Email or phone number</p>
            <input
              type="text"
              className="input_field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="header_text">Password</p>
            <input
              type="password"
              className="input_field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="signin_button" onClick={handle_signin_button}>
              Continue
            </button>
          </div>
          <p className="tnc">
            By continuing you agree to Amazon&apos;s Conditions of Use and
            Privacy Notice.
          </p>
          <details>
            <summary className="summary">
              <a href="#">Need help?</a>
            </summary>
            <summary className="s-fix">
              <a href="#">Forgot Password</a>
            </summary>
            <summary className="s-fix">
              <a href="#">Other issue with Sing-In</a>
            </summary>
          </details>
          <hr />
          <p className="work_text">Buying for work?</p>
          <p className="shop_link">
            <a href="">Shop on amazone business</a>
          </p>
          <button className="signup_button" onClick={handle_register_button}>
            Create your Amazone Account
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
