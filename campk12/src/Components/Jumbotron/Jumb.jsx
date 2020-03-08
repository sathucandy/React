import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";
import "./style.css";
import MainArea from "../Hearder_Card/MainArea";

export default class Jumb extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid className="jumb" >
          <Container fluid>
            <MainArea />
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
