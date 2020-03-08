import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";
import "./style.css";

export class Container_Header extends Component {
  render() {
    return (
      <div>
        <ButtonGroup size="lg" className="distance" style={{ width: "38%" }}>
          <Button size="lg" className="btn_size">
            <span className="style">Grades 1-4</span>
          </Button>
          <Button size="lg" className="btn_size_">
            <span className="style">Grades 5-8</span>
          </Button>
          <Button size="lg" className="btn_size">
            <span className="style"> Grades 9 - 12</span>
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default Container_Header;
