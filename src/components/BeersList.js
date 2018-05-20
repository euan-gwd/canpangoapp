import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Segment, List } from "semantic-ui-react";

export default class BeersList extends Component {
  state = { beers: [] };

  handleFetch = () => {
    fetch("/beers/")
      .then(response => response.json())
      .then(data => {
        const { id: category } = this.props.match.params;
        // const testId = "http://apichallenge.canpango.com/category/8/";
        const filteredData = data.filter(item => {
          if (item.category === category) {
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
      <Segment>
        <List divided relaxed>
          {beers.map((beer, index) => (
            <Link to={`/beers/${beer.name}`} key={index}>
              <List.Item>
                <List.Content>{beer.name}</List.Content>
              </List.Item>
            </Link>
          ))}
        </List>
      </Segment>
    );
  }
}
