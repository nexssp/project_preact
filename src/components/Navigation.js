import { h, render } from "preact";
/** @jsx h */
import { Link } from "preact-router/match";

const Navigation = () => (
  <nav>
    <Link activeClassName="active" href="/">
      Home
    </Link>
    |
    <Link activeClassName="active" href="/register">
      Register
    </Link>
  </nav>
);

export default Navigation;
