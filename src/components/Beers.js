import React, { Component, Fragment } from "react";
import axios from "axios";
import SearchResult from "./SearchResult";

export default class Beers extends Component {
  state = { beers: [] };

  handleFetch = () => {
    axios
      .get(`/beers/`)
      .then(res => {
        const data = res.data;
        this.setState({ beers: data });
      })
      .catch(error => {
        console.error(error);
      });
  };

  componentDidMount = () => {
    this.handleFetch();
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { id: currentId } = this.props.match.params;
    const { id: previousId } = prevProps.match.params;
    if (currentId !== previousId) {
      this.handleFetch();
    }
  };

  render() {
    const { beers } = this.state;
    return (
      <Fragment>
        <SearchResult beers={beers} />
      </Fragment>
    );
  }
}
