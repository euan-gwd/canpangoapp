import React, { Component, Fragment } from "react";
import { Segment, Form, Message } from "semantic-ui-react";
import SearchResult from "./SearchResult";

class Search extends Component {
  state = {
    searchTerm: "",
    beers: [],
    formErr: false
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
      this.setState({ searchTerm: "" });
    }
  };

  render() {
    const { searchTerm, beers, formErr } = this.state;

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
                required
                onChange={this.handleInputChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Button content="Submit" />
            </Form.Group>
          </Form>
        </Segment>
        {beers.length !== 0 ? <SearchResult beers={beers} /> : null}
        {beers.length !== 0 && formErr === true ? (
          <Message negative>
            <Message.Header>We're sorry</Message.Header>
            <p>No results found</p>
          </Message>
        ) : null}
      </Fragment>
    );
  }
}

export default Search;
