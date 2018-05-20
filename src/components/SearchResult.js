import React from "react";
import { Table } from "semantic-ui-react";

const SearchResult = props => {
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
        {props.beers.map((beer, index) => (
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
          <Table.HeaderCell />
          <Table.HeaderCell colSpan="6" />
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};

export default SearchResult;
