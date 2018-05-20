import React, { Component } from "react";
import { Form } from "semantic-ui-react";

class AddNewBeer extends Component {
  state = {
    name: "",
    ibu: "",
    calories: "",
    abv: "",
    style: "",
    brewery_location: "",
    category: ""
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const beerDetails = { ...this.state };
    const currentDate = new Date();
    const created_on = currentDate.toISOString();
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
            label="Name"
            name="name"
            value={name}
            required
            onChange={this.handleInputChange}
          />
          <Form.Input
            placeholder="Ibu"
            name="ibu"
            label="IBU"
            value={ibu}
            type="number"
            required
            onChange={this.handleInputChange}
          />
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Input
            placeholder="calories"
            name="calories"
            label="Calories"
            value={calories}
            type="number"
            required
            onChange={this.handleInputChange}
          />
          <Form.Input
            placeholder="abv"
            name="abv"
            label="ABV"
            value={abv}
            required
            onChange={this.handleInputChange}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            placeholder="Style"
            name="style"
            label="Style"
            value={style}
            required
            onChange={this.handleInputChange}
          />
          <Form.Input
            placeholder="Category"
            label="Category"
            name="category"
            value={category}
            required
            onChange={this.handleInputChange}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            placeholder="Brewery Location"
            label="Brewery Location"
            name="brewery_location"
            value={brewery_location}
            required
            onChange={this.handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Button content="Submit" />
        </Form.Group>
      </Form>
    );
  }
}

export default AddNewBeer;
