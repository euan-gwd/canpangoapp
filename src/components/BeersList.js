import React, { Component } from "react";
import BeerDetail from "./BeerDetail.js";

export default class BeersList extends Component {
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
      <ul>
        {beers.map((beer, index) => <BeerDetail key={index} detail={beer} />)}
      </ul>
    );
  }
}
