import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link, Redirect } from "react-router-dom";

import CastBar from "./Elements/CastBar";
import Stage from "./Elements/Stage";
import Character from "./Elements/Character";
import Location from "./Elements/Location";
import Movement from "./Elements/Movement";

import Helpers from "./Helpers/Helpers";

import Blaze from "./Fights/O9S/Blaze Phase/1";
import Test from "./Fights/O9S/Blaze Phase/test";

import "./styles.css";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route path="/O9SBlaze" exact component={Blaze} />
      <Route path="/test" exact component={Test} />
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
/*
    <CastBar
      name="Testing Test"
      time="1"
      top="100%"
      left="100%"
      alignment="-100%, -100%"
    />
*/
