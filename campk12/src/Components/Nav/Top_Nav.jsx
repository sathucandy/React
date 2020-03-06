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
      <div style={{ backgroundColor: "#2A90F1" }}>
        <Container>
          <Navbar className="styled" light expand="md">
            <NavbarBrand href="/" className="navTitle">
              CAMPK12
            </NavbarBrand>
            <Collapse navbar>
              <Nav className="mr-auto" navbar>
                {something}
              </Nav>
              <Button color="primary" className="bttn">
                FREE TRIAL
              </Button>
              <Button
                color="primary"
                className="bttn"
                style={{ marginRight: "-5%" }}
              >
                LOG IN
              </Button>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    );
  }
}

export default Top_Nav;
