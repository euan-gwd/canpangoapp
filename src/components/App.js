import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  componentDidMount = () => {
    axios.get(`http://apichallenge.canpango.com/`).then(res => {
      console.log(res);
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
