import React, { Component } from "react";
import CategoryMenu from "./CategoryMenu";
// import Beers from "./Beers";
import logo from "./logo.png";
import { Header, Image, Segment } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div>
        <Segment as="header" basic inverted>
          <Image src={logo} alt="logo" centered />
          <Header as="h1" textAlign="center">
            <Header.Content>BreweryDB</Header.Content>
          </Header>
        </Segment>
        <CategoryMenu />
        <main>{/* <Beers /> */}</main>
      </div>
    );
  }
}

export default App;
