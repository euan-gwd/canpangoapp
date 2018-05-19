import React, { Component } from "react";
import CategoryMenu from "./CategoryMenu";
// import Beers from "./Beers";
import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <div>
        <header className="hero is-dark is-bold has-text-centered">
          <div className="hero-body">
            <img src={logo} alt="logo" />
            <h1 className="title">BreweryDB</h1>
          </div>
        </header>
        <CategoryMenu />
        <main>{/* <Beers /> */}</main>
      </div>
    );
  }
}

export default App;
