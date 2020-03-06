import React, { Component } from "react";
import { Dropdown, DropdownToggle } from "reactstrap";
import "./style.css";

export class DropDown extends Component {
  render() {
    const style = {
      width: "250px",
      textAlign: "left",
      background: "none",
      color: "grey"
    };
    return (
      <div>
        <Dropdown className="position">
          <DropdownToggle className="caret" style={style} caret>
            All Courses
          </DropdownToggle>
        </Dropdown>
      </div>
    );
  }
}

export default DropDown;
