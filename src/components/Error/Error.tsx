import React, { Component } from "react";

interface Props {
  error: string;
}

interface State {}

class Error extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isVisible: false
    };
  }

  getErrorText(error: string) {
    switch (error) {
      case "phone number":
        return "Not valid phone number";

      case "name error":
        return "Not valid name";

      case "login error":
        return "Username or password is incorrect";

      default:
        return "Wrong input value";
    }
  }

  render() {
    return <div>{this.getErrorText(this.props.error)}</div>;
  }
}

export default Error;
