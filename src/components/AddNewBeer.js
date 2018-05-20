import React, { Component } from "react";
import { Segment, Form } from "semantic-ui-react";
import axios from "axios";

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

  handleSelectChange = event => {
    this.setState({ category: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const beerDetails = { ...this.state };
    const {
      name,
      ibu,
      calories,
      abv,
      style,
      brewery_location,
      category
    } = beerDetails;

    const formattedIBU = Number(ibu);
    const formattedCalories = Number(calories);
    const currentDate = new Date();
    const created_on = currentDate.toISOString();

    const payload = {
      name,
      ibu: formattedIBU,
      calories: formattedCalories,
      abv,
      style,
      brewery_location,
      category,
      created_on
    };

    // const querystring = require("querystring");
    axios({
      method: "POST",
      url: `/beers/`,
      headers: { "content-type": "application/json" },
      data: payload
    }).catch(error => {
      console.error(error);
    });

    this.setState({
      name: "",
      ibu: "",
      calories: "",
      abv: "",
      style: "",
      brewery_location: "",
      category: ""
    });
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
      <Segment>
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
              placeholder="ibu"
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

            <Form.Field
              label="Category"
              control="select"
              required
              value={category}
              onChange={this.handleSelectChange}
            >
              <option value="" hidden>
                Choose one
              </option>
              <option value="http://apichallenge.canpango.com/category/1/">
                Pilsner
              </option>
              <option value="http://apichallenge.canpango.com/category/2/">
                Lager
              </option>
              <option value="http://apichallenge.canpango.com/category/3/">
                IPA
              </option>
              <option value="http://apichallenge.canpango.com/category/4/">
                Stout
              </option>
              <option value="http://apichallenge.canpango.com/category/5/">
                Wheat
              </option>
              <option value="http://apichallenge.canpango.com/category/6/">
                Ale
              </option>
              <option value="http://apichallenge.canpango.com/category/7/">
                Porter
              </option>
              <option value="http://apichallenge.canpango.com/category/8/">
                Light
              </option>
              <option value="http://apichallenge.canpango.com/category/9/">
                Cider
              </option>
              <option value="http://apichallenge.canpango.com/category/10/">
                Lambic
              </option>
            </Form.Field>
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
      </Segment>
    );
  }
}

export default AddNewBeer;
