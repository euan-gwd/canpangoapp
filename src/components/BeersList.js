import React, { Component, Fragment } from "react";
import SearchResult from "./SearchResult";
import axios from "axios";

export default class BeerCategory extends Component {
  state = { beers: [] };

  handleFetch = () => {
    axios
      .get(`/beers/`)
      .then(res => {
        const data = res.data;
        const { id } = this.props.match.params;
        const searchCategory = `http://apichallenge.canpango.com/category/${id}/`;
        const filteredData = data.filter(item => {
          if (item.category === searchCategory) {
            return item;
          } else {
            return null;
          }
        });
        this.setState({ beers: filteredData });
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
