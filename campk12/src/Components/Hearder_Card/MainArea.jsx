import React, { Component } from "react";
import Header_card from "./Header_card";
import { Container, Row, Col, Button } from "reactstrap";

export class MainArea extends Component {
  constructor() {
    var women = "../../Images/women.png";
    var home = "../../Images/home.png";
    var badge = "../../Images/badge.png";
    var tablet = "../../Images/tablet.png";

    super();
    this.state = {
      services: [
        {
          img: women,
          type: "women",
          title: "Learn interactively",
          text: "LIVE online sessions with our expert mentors. See a demo"
        },
        {
          img: home,
          type: "home",
          title: "Learn from anywhere",
          text: "Convenience and safety for you and your child"
        },
        {
          img: tablet,
          type: "tablet",
          title: "Learn from the pioneers",
          text: "We've been teaching kids to code since 2010"
        },
        {
          img: badge,
          type: "badge",
          title: "Learn by doing",
          text: "100% project-based curriculam. Solve real world problems"
        }
      ]
    };
  }
  render() {
    const style = {
      fontFamily: "Roboto",
      width: "25%",
      height: "50px",
      marginTop: "2%",
      marginBottom: "2.5%",
      background: "#F5A623",
      letterSpacing: "2px",
      wordSpacing: "3px",
      fontSize: "13px",
      fontWeight: "bold",
      // marginLeft: "-10.5%"
    };
    const p = {
      fontFamily: "Roboto",
      color: "white",
      fontWeight: "400",
      fontSize: "40px",
      borderRadius: "4px",
      float: "left",
      padding: "0 12px 0 0",
      marginBottom: "0",
      // letterSpacing: "0",
      fontStretch: "normal",
      fontstyle: "normal",
      lineHeight: "1.25",
      letterSpacing: "normal"
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
        <Container >
          <p style={p}>
            <b>ONLINE COURSES</b>
          </p>
          <Row style={{ width: "110%" }}>{service}</Row>
          <Button color="primary" size="md" style={style}>
            Book a Free Trial
          </Button>
        </Container>
      </div>
    );
  }
}

export default MainArea;
