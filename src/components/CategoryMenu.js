import React, { Component } from "react";

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

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { menuItems } = this.state;
    return (
      <nav>
        <ul>
          {menuItems.map((menuItem, index) => (
            <li key={index} name={menuItem.name} onClick={this.handleItemClick}>
              {menuItem.name}
            </li>
          ))}
        </ul>

        <div>
          <input type="search" placeholder="Search..." />
        </div>
      </nav>
    );
  }
}
