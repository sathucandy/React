import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";
import "./style.css";
import MainArea from "../Hearder_Card/MainArea";

export default class Jumb extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid  style={{ background: "#2A90F1" }}>
          <Container fluid>
            <MainArea />
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
