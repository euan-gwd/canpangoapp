import React, { Component } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class CategoryMenu extends Component {
  state = { menuItems: [], activeItem: "" };
  componentDidMount = () => {
    fetch("/categories/")
      .then(response => response.json())
      .then(data => {
        this.setState({ menuItems: data });
      })
      .catch(function(e) {
        console.log(e);
      });
  };

  handleItemClick = evt => console.log();

  render() {
    const { menuItems } = this.state;
    return (
      <Menu as="nav" borderless stackable>
        <Menu.Item header>Categories:</Menu.Item>
        {menuItems.map((menuItem, index) => (
          <Menu.Item key={index} name={menuItem.name} />
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
