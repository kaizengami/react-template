import React, { Component } from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  background: #649499b0;
  color: white;
  text-align: center;
`;

interface Props {}

interface State {}

class Header extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <HeaderWrapper>Header</HeaderWrapper>
      </>
    );
  }
}

export default Header;
