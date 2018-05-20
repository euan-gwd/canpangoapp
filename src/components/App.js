import React, { Component, Fragment } from "react";
import NavMenu from "./NavMenu";
import Home from "./Home";
import BeerCategory from "./BeersList";
import Beers from "./Beers.js";
import Beer from "./Beer.js";
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
              <NavMenu />
              <Route path="/addNewBeer" component={AddNewBeer} />
              <Route path="/category/:id" component={BeerCategory} />
              <Route exact path="/beers/" component={Beers} />
              <Route exact path="/beers/:id" component={Beer} />
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
