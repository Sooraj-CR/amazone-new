import logoofamazone from "./assets/amazone-logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "./Sateprovider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }] = useStateValue();
  console.log(basket);

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <>
      <nav className="header">
        <Link to="/">
          <img className="header-logo" src={logoofamazone} alt="amazone-logo" />
        </Link>
        <div className="header-search">
          <input type="text" className="header-searchInput" />
          <SearchSharpIcon className="header-searchIcon" />
        </div>
        <div className="header-nav">
          <Link to={!user && "/Login"} className="header-link">
            <div onClick={handleAuthentication} className="header-option">
              <span className="header_optionLineOne">
                Hellow, {user ? user.email : "Guest"}
              </span>
              <span className="header_optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <Link className="header-link">
            <div className="header-option">
              <span className="header_optionLineOne">Returns</span>
              <span className="header_optionLineTwo">& Orders</span>
            </div>
          </Link>
          <Link className="header-link">
            <div className="header-option">
              <span className="header_optionLineOne">Your</span>
              <span className="header_optionLineTwo">Prime</span>
            </div>
          </Link>
          <Link to="/checkout" className="header-link">
            <div className="header-shopingIcon">
              <ShoppingBasketIcon />
              <span className="header_optionLineTwo header_basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
