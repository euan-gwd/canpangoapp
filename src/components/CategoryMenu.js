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

  handleItemClick = evt => console.log();

  render() {
    const { menuItems } = this.state;
    return (
      <nav>
        <ol>
          {menuItems.map((menuItem, index) => (
            <li key={index} onClick={this.handleItemClick}>
              {menuItem.name}
            </li>
          ))}
        </ol>

        <div>
          <input type="search" placeholder="Search..." />
        </div>
      </nav>
    );
  }
}
