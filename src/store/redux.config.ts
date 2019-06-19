import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { combineReducers } from "redux";

import { sagaСollectionReducer } from "sagas/sagas.reducers";
import { sagaСollectionDetailsReducer } from "sagas/sagas.reducers";

//import { appReducer } from "components/app.reducers";
import { loginReducer } from "store/components/Page/Login/login";

const rootReducer = combineReducers({
  //app: appReducer,
  login: loginReducer,

  sagaСollection: sagaСollectionReducer,
  sagaСollectionDetails: sagaСollectionDetailsReducer
});

export const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === "object" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
  // other store enhancers if any
);

export const store: any = createStore(rootReducer, enhancer);
