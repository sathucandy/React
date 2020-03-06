import React, { Component } from "react";
import Header_card from "./header_card";
import { Container, Row, Col, Button } from "reactstrap";

export class MainArea extends Component {
  constructor() {
    super();
    this.state = {
      services: [
        {
          img: "",
          title: "Learn Interactively",
          text: "LIVE online sessions with our expert mentors. See a demo"
        },
        {
          img: "",
          title: "Learn from anywhere",
          text: "Convenience and safety for you and your child"
        },
        {
          img: "",
          title: "Learn from the pioneers",
          text: "We've been teaching kids to code since 2010"
        },
        {
          img: "",
          title: "Learn by doing",
          text: "100% project-based curriculam. Solve real world problems"
        }
      ]
    };
  }
  render() {
    const style = {
      width: "25%",
      height: "50px",
      marginTop: "2%",
      background: "#F5A623"
    };
    const p = {
      fontFamily: "Montserrat",
      color: "white",
      fontWeight: "600",
      fontSize: "40px",
      borderRadius: "4px",
      float: "left",
      padding: "0 12px 0 0",
      marginBottom: "0",
      letterSpacing: "0"
    };
    let service = this.state.services.map(person => {
      return (
        <Col>
          <Header_card person={person} />
        </Col>
      );
    });

    return (
      <div>
        <Container>
          <p style={ p }>ONLINE COURSES</p>
          <Row style={{ width: "100%" }}>{service}</Row>
          <Button color="primary" size="md" style={style}>
            <b> Book a Free Trial</b>
          </Button>
        </Container>
      </div>
    );
  }
}

export default MainArea;
