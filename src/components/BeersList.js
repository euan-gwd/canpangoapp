import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Segment, List } from "semantic-ui-react";
import axios from "axios";

export default class BeerCategory extends Component {
  state = { beers: [] };

  handleFetch = () => {
    axios
      .get(`/beers/`)
      .then(res => {
        const data = res.data;
        const { id: category } = this.props.match.params;
        const filteredData = data.filter(item => {
          if (item.category === category) {
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
