import React, { Component } from "react";
import BeerDetail from "./BeerDetail.js";
import { Segment, Button, List } from "semantic-ui-react";

export default class BeersList extends Component {
  state = { beers: [] };

  componentDidMount = () => {
    fetch("/beers/")
      .then(response => response.json())
      .then(data => {
        // const { id } = this.props.match.params;
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
        <List divided verticalAlign="middle">
          <List.Item>
            <List.Content floated="right">
              <Button>Add</Button>
            </List.Content>
            <List.Content>Lena</List.Content>
          </List.Item>
        </List>
        <ul>
          {beers.map((beer, index) => <BeerDetail key={index} detail={beer} />)}
        </ul>
      </Segment>
    );
  }
}
