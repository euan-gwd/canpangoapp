import React, { Component } from "react";
import { Input, Icon } from "semantic-ui-react";

export default class Search extends Component {
  state = {};
  render() {
    return (
      <div>
        <Input className="icon" icon="search" placeholder="Search..." />
      </div>
    );
  }
}
