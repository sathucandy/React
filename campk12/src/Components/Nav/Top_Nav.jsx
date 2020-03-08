import React, { Component } from "react";
import "./style.css";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button
} from "reactstrap";

export class Top_Nav extends Component {
  constructor(props) {
    super();
  }
  render() {
    const something = this.props.person.map(option => (
      <>
        <NavItem>
          <NavLink href="/components/" className="navLink">
            {option.option}
          </NavLink>
        </NavItem>
      </>
    ));
    return (
      <div className="" style={{ backgroundColor: "rgb(15, 40, 184)" }}>
        <Container>
          <Navbar className="styled" light expand="md">
            <NavbarBrand href="/" className="navTitle">
              CAMPK12
            </NavbarBrand>
            <Collapse navbar>
              <Nav className="mr-auto letspac" navbar>
                {something}
              </Nav>
              <Button
                color="primary"
                className="bttn"
                style={{ height: "38px" }}
              >
                <span style={{ opacity: "0.7" }}>FREE TRIAL</span>
              </Button>
              <Button
                color="primary"
                className="bttn"
                style={{ marginRight: "-5%", height: "38px" }}
              >
                <span style={{ opacity: "0.7" }}>LOG IN</span>
              </Button>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    );
  }
}

export default Top_Nav;
