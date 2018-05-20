import React, { Component } from "react";
import { Segment, Form } from "semantic-ui-react";
// import axios from "axios";

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
    const newBeer = {
      name,
      ibu: formattedIBU,
      calories: formattedCalories,
      abv,
      style,
      brewery_location,
      category,
      created_on
    };

    const options = {
      method: "POST",
      body: JSON.stringify(newBeer),
      headers: {
        "Content-Type": "application/json"
      }
    };

    fetch(`/categories/${category}/`, options)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject({
            status: res.status,
            statusText: res.statusText
          });
        }
      })
      .then(res => console.log(res))
      .catch(err => console.log("Error, with message:", err.statusText));

    // axios({
    //   method: "post",
    //   url: `/categories/${category}/`,
    //   body: newBeer
    // }).catch(function(error) {
    //   if (error.response) {
    //     // The request was made and the server responded with a status code
    //     // that falls out of the range of 2xx
    //     console.log(error.response.data);
    //     console.log(error.response.status);
    //     console.log(error.response.headers);
    //   } else if (error.request) {
    //     // The request was made but no response was received
    //     // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    //     // http.ClientRequest in node.js
    //     console.log(error.request);
    //   } else {
    //     // Something happened in setting up the request that triggered an Error
    //     console.log("Error", error.message);
    //   }
    //   console.log(error.config);
    // });

    // this.setState({
    //   name: "",
    //   ibu: "",
    //   calories: "",
    //   abv: "",
    //   style: "",
    //   brewery_location: "",
    //   category: ""
    // });
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
              <option value="Pilsner">Pilsner</option>
              <option value="Lager">Lager</option>
              <option value="IPA">IPA</option>
              <option value="Stout">Stout</option>
              <option value="Wheat">Wheat</option>
              <option value="Ale">Ale</option>
              <option value="Porter">Porter</option>
              <option value="Light">Light</option>
              <option value="Cider">Cider</option>
              <option value="Lambic">Lambic</option>
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
