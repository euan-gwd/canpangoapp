import React, { Component } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class NavMenu extends Component {
  state = { menuItems: [], activeItem: "" };

  handleFetch = () => {
    axios.get(`http://apichallenge.canpango.com/categories/`).then(res => {
      const menuItems = res.data;
      this.setState({ menuItems });
    });
  };

  componentDidMount = () => {
    this.handleFetch();
  };

  render() {
    const { menuItems } = this.state;
    return (
      <Menu as="nav" borderless stackable>
        <Link to="/">
          <Menu.Item icon link>
            <Icon name="home" />
          </Menu.Item>
        </Link>
        <Menu.Item header>Categories:</Menu.Item>
        {menuItems.map((menuItem, index) => (
          <Link to={`/category/${menuItem.name}`} key={index}>
            <Menu.Item link name={menuItem.name} />
          </Link>
        ))}
        <Menu.Menu position="right">
          <Link to="/addNewBeer">
            <Menu.Item link>
              <Icon name="plus" />
              Add New Beer
            </Menu.Item>
          </Link>
          <Link to="/search">
            <Menu.Item link>
              <Icon name="search" />
              Search
            </Menu.Item>
          </Link>
        </Menu.Menu>
      </Menu>
    );
  }
}
