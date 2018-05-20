import React, { Component, Fragment } from "react";
import { Segment, Form } from "semantic-ui-react";
import SearchResult from "./SearchResult";

class Search extends Component {
  state = {
    searchTerm: "",
    beers: []
  };

  handleFetchData = item => {
    fetch(`/beers/search/?q=${item}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ beers: data });
      })
      .catch(function(e) {
        console.log(e);
      });
  };

  handleInputChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm !== null || "undefined") {
      this.handleFetchData(searchTerm);
    }
  };

  render() {
    const { searchTerm, beers } = this.state;

    return (
      <Fragment>
        <Segment>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group widths="equal">
              <Form.Input
                placeholder="Search..."
                label="Search"
                name="search"
                value={searchTerm}
                icon="search"
                onChange={this.handleInputChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Button content="Submit" />
            </Form.Group>
          </Form>
        </Segment>
        <SearchResult beers={beers} />
      </Fragment>
    );
  }
}

export default Search;
