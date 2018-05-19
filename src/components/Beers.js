import React, { Component } from "react";
import Beer from "./Beer.js";

export default class Beers extends Component {
  state = { beers: [] };

  componentDidMount = () => {
    fetch("/beers/")
      .then(response => response.json())
      .then(data => {
        this.setState({ beers: data });
      })
      .catch(function(e) {
        console.log(e);
      });
  };
  render() {
    const { beers } = this.state;
    return (
      <ul>{beers.map((beer, index) => <Beer key={index} detail={beer} />)}</ul>
    );
  }
}
