import React from "react";

import "./sign-in and sign-up style.scss";

import SignIn from "../../component/sign-in/sign-in.component";
import Signup from "../../component/sign up/sign-up.component";

const SignInAndSignUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <Signup />
  </div>
);

export default SignInAndSignUp;
