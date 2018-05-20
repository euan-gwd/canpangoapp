import React, { Component } from "react";
import { Input } from "semantic-ui-react";

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
