import React, { Component, Fragment } from "react";
import { Segment, Form, Message } from "semantic-ui-react";
import SearchResult from "./SearchResult";
import axios from "axios";

class Search extends Component {
  state = {
    searchTerm: "",
    beers: [],
    formErr: false
  };

  handleFetchData = item => {
    axios
      .get(`http://apichallenge.canpango.com/beers/search/?q=${item}`)
      .then(res => {
        const beers = res.data;
        this.setState({ beers });
      })
      .catch(error => {
        console.error(error);
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
