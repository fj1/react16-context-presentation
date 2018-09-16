import { createStore } from "redux";
import { Provider } from "react-redux";
import React, { Component } from "react";

import LandingPage from "./components/LandingPage";
import rootReducer from "./redux/rootReducer";

import "./App.css";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <LandingPage />
      </Provider>
    );
  }
}

export default App;
