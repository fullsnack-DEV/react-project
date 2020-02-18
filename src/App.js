import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./App.css";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/Checkout/Checkout.component";
import SignInAndSignUp from "./pages/sign-in and sign-up/sign-in and sign-up component";
import Header from "./component/header/header.component";
import { auth, UserProfileDocument } from "./firebase/firebase.utilis";
import { setCurrentUser } from "./redux/user/user.action";
import { selectCurrentuser } from "./redux/user/user.selecor";

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await UserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />

          <Route path="/Checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}
//this is the check put section for the product page and the related data we want to chcoout
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentuser
});

//this is the second argument to the correct

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
