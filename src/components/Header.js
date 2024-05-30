// https://www.w3schools.com/react/react_class.asp

import React, { Component } from "react";

class Header extends React.Component {
  render(props) {
    return (
      <header>
        <div>
          <nav>
            <ul>
              <a>
                <li>{this.props.home}</li>
              </a>
              <a>
                <li>{this.props.blog}</li>
              </a>
              <a>
                <li>{this.props.services}</li>
              </a>
              <a>
                <li>{this.props.about}</li>
              </a>
              <a>
                <li>{this.props.contact}</li>
              </a>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
