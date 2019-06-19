import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { setPopUpIsVisibleState } from "store/components/Page/Login/login";
import { getPopUpIsVisibleState } from "store/components/Page/Login/login.selectors";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Login } from "pages/Login";

import { GlobalStyles, AppWrapper, PageWrapper } from "./app.styles";

interface Props {
  setPopUpIsVisibleState(value: boolean): void;
  isPopUpVisible: boolean;
}

interface State {}

class App extends Component<Props, State> {
  componentDidMount() {
    //testing redux actions
    this.props.setPopUpIsVisibleState(true);
    console.log(this.props.isPopUpVisible);
  }

  render() {
    return (
      <>
        <GlobalStyles />
        <AppWrapper>
          <Header />
          <PageWrapper>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/detailspage" component={Login} />
            </Switch>
          </PageWrapper>
          <Footer />
        </AppWrapper>
      </>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    isPopUpVisible: getPopUpIsVisibleState(state)
  };
};

const mapDispatchToProps = {
  setPopUpIsVisibleState
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
