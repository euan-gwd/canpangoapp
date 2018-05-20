import React, { Component, Fragment } from "react";
import CategoryMenu from "./CategoryMenu";
import Home from "./Home";
import BeersList from "./BeersList";
import AddNewBeer from "./AddNewBeer";
import Search from "./Search";
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
              <Route path="/category/:id" component={BeersList} />
              <Route path="/search" component={Search} />
              <Route exact path="/" component={Home} />
            </Fragment>
          </BrowserRouter>
        </Segment>
      </Fragment>
    );
  }
}

export default App;
