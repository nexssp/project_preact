import { h, render } from "preact";
/** @jsx h */
import Router from "preact-router";

import "./App.css";
import Navigation from "./Navigation";

import Home from "./Home";
import AsyncRoute from "preact-async-route";

const App = () => {
  return (
    <div>
      <Navigation />
      <Router>
        <Home path="/" />
        <AsyncRoute
          path="/register"
          getComponent={() =>
            import("./Register").then((module) => module.default)
          }
        />
      </Router>
    </div>
  );
};

export default App;
