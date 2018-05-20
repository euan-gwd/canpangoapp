import React from "react";
import { Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const SearchResult = props => {
  return (
    <Table color="orange">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>IBU</Table.HeaderCell>
          <Table.HeaderCell>Calories</Table.HeaderCell>
          <Table.HeaderCell>ABV</Table.HeaderCell>
          <Table.HeaderCell>Style</Table.HeaderCell>
          <Table.HeaderCell>Brewery Location</Table.HeaderCell>
          <Table.HeaderCell>Category</Table.HeaderCell>
          <Table.HeaderCell />
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
            <Table.Cell>
              <Link to={`/beers/${beer.name}`}>
                <Button size="small">View</Button>
              </Link>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>

      <Table.Footer fullWidth>
        <Table.Row>
          <Table.HeaderCell colSpan="8" />
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};

export default SearchResult;
