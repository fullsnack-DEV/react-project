import React from "react";

import "./sign-in.style.scss";

import FormInput from "../form-input/form-input.component";
import CustonButton from "../cutom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utilis";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an Account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />

          <div className="button">
            <CustonButton type="submit"> Sign In </CustonButton>
            <CustonButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustonButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
