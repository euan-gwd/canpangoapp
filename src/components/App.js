import React, { Component } from "react";
import "./App.css";
import CategoryMenu from "./CategoryMenu";
// import Beers from "./Beers";
import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} alt="logo" />
          <h1>BreweryDB</h1>
        </header>
        <CategoryMenu />
        <main>{/* <Beers /> */}</main>
      </div>
    );
  }
}

export default App;
