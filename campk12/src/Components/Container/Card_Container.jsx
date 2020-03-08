import React, { Component } from "react";
import MainArea from "../Card/MainArea";
import { Container, Row, Col } from "reactstrap";
import "./style.css";
import DropDown from "../DropDown/DropDown";
import Container_Header from "../Container_Header/Container_Header";

export class Card_Container extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Container className="styling">
          <Container_Header />
          <Row style={{ marginTop: "3%" }}>
            <Col>
              <p className="styles">
                Showing <b>All</b> Courses for <b>Grades 5-8</b>
              </p>
            </Col>
            <Col className="dis">
              <DropDown />
            </Col>
          </Row>
          <MainArea />
        </Container>
      </div>
    );
  }
}

export default Card_Container;
