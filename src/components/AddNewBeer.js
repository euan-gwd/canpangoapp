import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";

class AddNewBeer extends Component {
  state = {};

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = evt => {
    evt.preventDefault();
    const beerDetails = { ...this.state };
    const created_on = Date.UTC();
    const newBeer = { beerDetails, created_on };
    console.log(newBeer);
  };

  render() {
    const {
      name,
      ibu,
      calories,
      abv,
      style,
      brewery_location,
      category
    } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            placeholder="Name"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <Form.Input
            placeholder="Ibu"
            name="ibu"
            value={ibu}
            onChange={this.handleChange}
          />
          <Form.Input
            placeholder="calories"
            name="calories"
            value={calories}
            onChange={this.handleChange}
          />
          <Form.Input
            placeholder="abv"
            name="abv"
            value={abv}
            onChange={this.handleChange}
          />
          <Form.Input
            placeholder="Style"
            name="style"
            value={style}
            onChange={this.handleChange}
          />
          <Form.Input
            placeholder="Brewery Location"
            name="brewery_location"
            value={brewery_location}
            onChange={this.handleChange}
          />
          <Form.Input
            placeholder="Category"
            name="category"
            value={category}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
    );
  }
}

export default AddNewBeer;
