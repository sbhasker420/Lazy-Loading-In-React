import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import reducer from "./Lazy-Load-Redux-saga/store/reducer";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootsaga from "./Lazy-Load-Redux-saga/saga/index";

const sagaMiddleware = createSagaMiddleware();
const middlewares = composeWithDevTools(applyMiddleware(sagaMiddleware));
const store = createStore(reducer, middlewares);

ReactDOM.render(
  <Provider store={{ ...store, sagaTask: sagaMiddleware.run(rootsaga) }}>
    <App />
  </Provider>,
  document.getElementById("root")
);
