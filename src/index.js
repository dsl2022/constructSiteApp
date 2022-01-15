import React from "react";
import ReactDOM from "react-dom";
import "leaflet/dist/leaflet.css";
import Map from "./Map";
import "./styles.css";
import { store } from "./store";
import { Provider } from "react-redux";

function App() {
  return <Map />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
