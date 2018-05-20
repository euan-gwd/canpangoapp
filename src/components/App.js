import React, { Component, Fragment } from "react";
import CategoryMenu from "./CategoryMenu";
// import Beers from "./Beers";
import logo from "./logo.png";
import { Header, Image, Segment } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Segment as="header" basic inverted>
          <Image src={logo} alt="logo" centered size="medium" />
          <Header as="h2" textAlign="center">
            Brewery
          </Header>
        </Segment>
        <CategoryMenu />
        <main>{/* <Beers /> */}</main>
      </Fragment>
    );
  }
}

export default App;
