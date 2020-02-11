import React from "react";
import { Link } from "react-router-dom";
import "./header.style.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentuser } from "../../redux/user/user.selecor";
import { auth } from "../../firebase/firebase.utilis";
import CartIcon from "../Cart/cart.component";
import Cartdropdown from "../cart-dropdown/Carddrop.component";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo />
    </Link>

    <div className="options">
      <Link className="option" to="/shop">
        Shop
      </Link>

      <Link className="option" to="/shop">
        Contact
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <Cartdropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentuser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
