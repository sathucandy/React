import React, { Component } from "react";
import { Dropdown, DropdownToggle } from "reactstrap";
import "./style.css";

export class DropDown extends Component {
  render() {
    const style = {
      width: "250px",
      textAlign: "left",
      background: "none",
      color: "black",
      height: "40px",
      fontSize: "13px",
      opacity: "0.6",
      border: "1px solid #0000002e"
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
