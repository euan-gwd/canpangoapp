import React, { Component } from "react";
import { Menu, Input, Icon } from "semantic-ui-react";

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
          <Menu.Item
            key={index}
            name={menuItem.name}
            onClick={this.handleItemClick}
          />
        ))}
        <Menu.Menu position="right">
          <Menu.Item onClick={this.handleItemClick}>
            <Icon name="plus" />
            Add New Beer
          </Menu.Item>
          <Menu.Item>
            <Input className="icon" icon="search" placeholder="Search..." />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
