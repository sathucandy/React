import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Cards from "./Cards.jsx";

class MainArea extends Component {
  constructor() {
    super();
    this.state = {
      details: [
        {
          name: "AI & Machine Learning: Code Intelligent Bots",
          level: "LEVEL",
          num: "1",
          grades: "GRADES",
          range: "5 - 8",
          nums: "5.6k",
          happy: "Happy Students",
          hours: "12 Hours",
          sessions: " over 6 sessions",
          days: "Weekend and Weekdays Batches",
          price: "9999",
          cut: "12000",
          off: "16%off",
          more: "LEARN MORE"
        },
        {
          name: "AI & Machine Learning: Code Intelligent Bots",
          level: "LEVEL",
          num: "1",
          grades: "GRADES",
          range: "5 - 8",
          nums: "5.6k",
          happy: "Happy Students",
          hours: "12 Hours",
          sessions: " over 6 sessions",
          days: "Weekend and Weekdays Batches",
          price: "9999",
          cut: "12000",
          off: "16%off",
          more: "LEARN MORE"
        },
        {
          name: "AI & Machine Learning: Code Intelligent Bots",
          level: "LEVEL",
          num: "1",
          grades: "GRADES",
          range: "5 - 8",
          nums: "5.6k",
          happy: "Happy Students",
          hours: "12 Hours",
          sessions: " over 6 sessions",
          days: "Weekend and Weekdays Batches",
          price: "9999",
          cut: "12000",
          off: "16%off",
          more: "LEARN MORE"
        },
        {
          name: "AI & Machine Learning: Code Intelligent Bots",
          level: "LEVEL",
          num: "1",
          grades: "GRADES",
          range: "5 - 8",
          nums: "5.6k",
          happy: "Happy Students",
          hours: "12 Hours",
          sessions: " over 6 sessions",
          days: "Weekend and Weekdays Batches",
          price: "9999",
          cut: "12000",
          off: "16%off",
          more: "LEARN MORE"
        },
        {
          name: "AI & Machine Learning: Code Intelligent Bots",
          level: "LEVEL",
          num: "1",
          grades: "GRADES",
          range: "5 - 8",
          nums: "5.6k",
          happy: "Happy Students",
          hours: "12 Hours",
          sessions: " over 6 sessions",
          days: "Weekend and Weekdays Batches",
          price: "9999",
          cut: "12000",
          off: "16%off",
          more: "LEARN MORE"
        },
        {
          name: "AI & Machine Learning: Code Intelligent Bots",
          level: "LEVEL",
          num: "1",
          grades: "GRADES",
          range: "5 - 8",
          nums: "5.6k",
          happy: "Happy Students",
          hours: "12 Hours ",
          sessions: "over 6 sessions",
          days: "Weekend and Weekdays Batches",
          price: "9999",
          cut: "12000",
          off: "16%off",
          more: "LEARN MORE"
        }
      ]
    };
  }

  render() {
    let cards = this.state.details.map(person => {
      return (
        <Col>
          <Cards person={person} />
        </Col>
      );
    });

    return (
      <div>
        <Container>
          <Row>{cards}</Row>
        </Container>
      </div>
    );
  }
}

export default MainArea;
