import React, { Component } from "react";
import "./style.css";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col
} from "reactstrap";

class Cards extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <Card className="card-info" body>
          <CardImg
            top
            width="100%"
            height="35%"
            src="/assets/318x180.svg"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{this.props.person.name}</CardTitle>
            <Row>
              <Col className="text">{this.props.person.level}</Col>
              <Col
                style={{
                  marginLeft: "-25px",
                  marginTop: "-2px",
                  fontSize: "12px"
                }}
              >
                <b>{this.props.person.num}</b>
              </Col>
              <Col className="text">{this.props.person.grades}</Col>
              <Col
                style={{
                  marginLeft: "-20.5px",
                  marginTop: "-4px",
                  fontSize: "14px"
                }}
              >
                <b>{this.props.person.range}</b>
              </Col>
            </Row>
            <hr />
            <Row>
              <CardSubtitle className="size">
                <b>{this.props.person.nums}</b>
              </CardSubtitle>
              &nbsp;
              <CardSubtitle className="size">
                {this.props.person.happy}
              </CardSubtitle>
            </Row>
            <Row>
              <CardSubtitle className="size">
                <b>{this.props.person.hours}</b>
              </CardSubtitle>
              &nbsp;
              <CardSubtitle className="size">
                {this.props.person.sessions}
              </CardSubtitle>
            </Row>
            <Row>
              <CardSubtitle className="size">
                {this.props.person.days}
              </CardSubtitle>
            </Row>
            <Row style={{ marginTop: "10px" }}>
              <Col>
                <CardSubtitle
                  className="price"
                  style={{ fontWeight: "bold", fontSize: "20px" }}
                >
                  {this.props.person.price}
                </CardSubtitle>
              </Col>
              <Col>
                <CardSubtitle className="spacing">
                  {this.props.person.cut}
                </CardSubtitle>
              </Col>
              <Col>
                <CardSubtitle style={{ color: "#008000", marginTop: "2%" }}>
                  <b>{this.props.person.off}</b>
                </CardSubtitle>
              </Col>
            </Row>

            <hr />
            <Button
              className="but"
              outline
              color="primary"
              style={{ border: "none" }}
            >
              {this.props.person.more}
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Cards;
