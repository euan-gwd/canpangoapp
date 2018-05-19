import React, { Component } from "react";
import CategoryMenu from "./CategoryMenu";
// import Beers from "./Beers";
import logo from "./logo.png";
import { Header, Image, Segment } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div>
        <Segment as="header" inverted>
          <Image src={logo} alt="logo" centered inverted />
          <Header as="h1" textAlign="center">
            BreweryDB
          </Header>
        </Segment>
        <CategoryMenu />
        <main>{/* <Beers /> */}</main>
      </div>
    );
  }
}

export default App;
