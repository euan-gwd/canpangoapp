import React, { Component } from "react";
import { Table, Button } from "semantic-ui-react";

export default class Beer extends Component {
  state = { beers: [] };

  componentDidMount = () => {
    fetch("/beers/")
      .then(response => response.json())
      .then(data => {
        const { id } = this.props.match.params;
        const testId = "http://apichallenge.canpango.com/category/8/";
        const filteredData = data.filter(item => {
          if (item.category === testId) {
            return item;
          } else {
            return null;
          }
        });
        this.setState({ beers: filteredData });
      })
      .catch(function(e) {
        console.log(e);
      });
  };

  render() {
    const { beers } = this.state;
    return (
      <Table celled color="orange">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>IBU</Table.HeaderCell>
            <Table.HeaderCell>Calories</Table.HeaderCell>
            <Table.HeaderCell>ABV</Table.HeaderCell>
            <Table.HeaderCell>Style</Table.HeaderCell>
            <Table.HeaderCell>Brewery Location</Table.HeaderCell>
            <Table.HeaderCell>Category</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {beers.map((beer, index) => (
            <Table.Row key={index}>
              <Table.Cell>{beer.name}</Table.Cell>
              <Table.Cell>{beer.ibu}</Table.Cell>
              <Table.Cell>{beer.calories}</Table.Cell>
              <Table.Cell>{beer.abv}</Table.Cell>
              <Table.Cell>{beer.style}</Table.Cell>
              <Table.Cell>{beer.brewery_location}</Table.Cell>
              <Table.Cell>{beer.category}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell colSpan="7">
              <Button size="small">Edit</Button>
              <Button size="small" floated="right">
                Delete
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    );
  }
}
