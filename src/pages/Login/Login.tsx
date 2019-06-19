import React, { Component } from "react";
import { connect } from "react-redux";

import "./login.scss";
import { Error } from "components/Error";

export interface Props {}

export interface State {
  error: boolean;
}

class Login extends Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      error: false
    };

    this.submit = this.submit.bind(this);
  }

  submit(e: any) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="login-wrapper">
        <form className="login-form" onSubmit={this.submit}>
          <div className="login-title">Log in:</div>
          <div className="login-input-title">Name</div>
          <input
            className="login-input"
            type="text"
            name="number"
            autoComplete="off"
            // ref={inputName => (this.inputName = inputName)}
            data-testid="input-name"
          />
          <div className="login-input-title">Password</div>
          <input
            className="login-input"
            type="text"
            name="number"
            autoComplete="off"
            // ref={inputPassword => (this.inputPassword = inputPassword)}
            data-testid="input-password"
          />
          <input
            className="login-input-hidden"
            type="submit"
            id="submit-login"
          />
        </form>
        {this.state.error && (
          <div
            className={
              this.state.error ? "login-error-box" : "login-error-box-hide"
            }
          >
            <Error error="login error" />
          </div>
        )}
        {/* <Error ref={this.error} error={this.state.error} data-testid="error" /> */}
        <label
          className="login-input-label"
          htmlFor="submit-login"
          tabIndex={0}
        >
          Submit
        </label>
      </div>
    );
  }
}

export default connect()(Login);
