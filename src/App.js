import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUp from "./pages/sign-in and sign-up/sign-in and sign-up component";
import Header from "./component/header/header.component";
import "./App.css";

// const HatsPage = () => (
//   <div>
//     <h1>Hats page</h1>
//   </div>
// );

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
