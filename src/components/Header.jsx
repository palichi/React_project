import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleImgClick = this.handleImgClick.bind(this);
  }

  handleImgClick = () => {
    console.log(this.state);
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  };

  render() {
    const { isToggleOn } = this.state;

    return (
      <div>
        <header className="App-header">
          <img
            onClick={this.handleImgClick}
            src={logo}
            className={isToggleOn ? "App-logo rotate" : "App-logo"}
            alt="logo"
          />
          <h1 className="App-title">Welcome to React (edited by yong tae)</h1>
        </header>
      </div>
    );
  }
}

export default Header;
