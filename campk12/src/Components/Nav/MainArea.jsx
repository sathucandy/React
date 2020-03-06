import React, { Component } from "react";
import Top_Nav from "./Top_Nav";

export class MainArea extends Component {
  constructor() {
    super();
    this.state = {
      options: [
        {
          option: "ONLINE COURSES"
        },
        {
          option: "OFFLINE CAMPS"
        },
        {
          option: "REFER & EARN"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <Top_Nav person={this.state.options} />
      </div>
    );
  }
}

export default MainArea;
