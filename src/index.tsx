import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { watchFetchCollection } from "sagas/sagas";
import { store, sagaMiddleware } from "./store/redux.config";

import App from "./components/App";

sagaMiddleware.run(watchFetchCollection);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
