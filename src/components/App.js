import React, { Component, Fragment } from "react";
import CategoryMenu from "./CategoryMenu";
import Beers from "./Beers";
import AddNewBeer from "./AddNewBeer";
import logo from "./logo.png";
import { Header, Image, Segment } from "semantic-ui-react";
import { BrowserRouter, Route } from "react-router-dom";

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
        <Segment as="main" basic>
          <BrowserRouter>
            <Fragment>
              <CategoryMenu />
              <Route path="/addNewBeer" component={AddNewBeer} />
            </Fragment>
          </BrowserRouter>
        </Segment>
      </Fragment>
    );
  }
}

export default App;
