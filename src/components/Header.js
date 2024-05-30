// https://www.w3schools.com/react/react_class.asp

// Class Components
// Class components use the class syntax introduced in ES6 (ECMAScript 2015).
// Class components can't use hooks, but they can use lifecycle methods
// like componentDidMount() and componentDidUpdate().

// Functional components: modern, stateless, use hooks
// Class components: older, stateful, use lifecycle methods

// Header extends Component means Header "is a" Component

import { Component } from "react";
import Button from "./Button";

class Header extends Component {
  render() {
    const { isLoggedIn, title } = this.props;
    return (
      <header>
        <div className="container flex justify-between">
          <h1>{title}</h1>
          <Button isLoggedIn={isLoggedIn} />
        </div>
      </header>
    );
  }
}

export default Header;
