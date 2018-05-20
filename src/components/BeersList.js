import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Segment, List } from "semantic-ui-react";

export default class BeersList extends Component {
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
      <Segment>
        <List divided relaxed>
          {beers.map((beer, index) => (
            <Link to={`/beers/${beer.name}`}>
              <List.Item key={index}>
                <List.Content>{beer.name}</List.Content>
              </List.Item>
            </Link>
          ))}
        </List>
      </Segment>
    );
  }
}
