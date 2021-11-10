// app.js
import { h, render } from "preact";
if (process.env.NODE_ENV === "development") {
  // Must use require here as import statements are only allowed
  // to exist at top-level.
  require("preact/debug");
}

window.React = require("preact");

import App from "./components/App";

render(<App />, document.body);
