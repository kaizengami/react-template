import React, { Component } from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #222222;
  color: white;
  height: 20px;
  font-size: 10px;
`;

interface Props {}

interface State {}

class Footer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <FooterWrapper>Footer</FooterWrapper>
      </>
    );
  }
}

export default Footer;
