import React, { Component } from "react";
import "./App.css";

class App extends Component {
  componentDidMount = () => {
    fetch("/categories/")
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(function(e) {
        console.log(e);
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Canpango Beer App</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
