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
    const style = {
      backgroundColor: "#D7F7FC",
      border: "none",
      marginTop: "-7%",
      width: "335px",
      marginLeft: "-7%"
    };
    return (
      <div>
        <Card className="card-info" body>
          <CardImg style={style} top height="37%" src="" alt=" " />
          <CardBody>
            <CardTitle style={{ width: "90%", marginLeft: "-7%" }}>
              {this.props.person.name}
            </CardTitle>
            <Row>
              <Col className="text" style={{ marginLeft: "-6%" }}>
                {this.props.person.level}
              </Col>
              <Col
                style={{
                  marginLeft: "-18%",
                  marginTop: "-2px",
                  fontSize: "12px"
                }}
              >
                <b>{this.props.person.num}</b>
              </Col>
              <Col className="text">{this.props.person.grades}</Col>
              <Col
                style={{
                  marginLeft: "-15%",
                  marginTop: "-2.5px",
                  fontSize: "13.5px"
                }}
              >
                <b>{this.props.person.range}</b>
              </Col>
            </Row>
            <hr style={{ width: "300px", marginLeft: "-11%" }} />
            <Row>
              <i className="fas fa-bars dist"></i>
              <CardSubtitle className="size">
                <b>{this.props.person.nums}</b>
              </CardSubtitle>
              &nbsp;
              <CardSubtitle className="size">
                <span className="second_part">{this.props.person.happy}</span>
              </CardSubtitle>
            </Row>
            <Row>
              <i className="fas fa-bars dist"></i>
              <CardSubtitle className="size">
                <b>{this.props.person.hours}</b>
              </CardSubtitle>
              &nbsp;
              <CardSubtitle className="size">
                <span className="second_part">
                  {this.props.person.sessions}
                </span>
              </CardSubtitle>
            </Row>
            <Row>
              <i className="fas fa-bars dist"></i>
              <CardSubtitle className="size">
                <span className="second_part">{this.props.person.days}</span>
              </CardSubtitle>
            </Row>
            <Row style={{ marginTop: "10px" }}>
              <i className="fas fa-bars dist"></i>
              <Col>
                <CardSubtitle
                  className="price"
                  style={{ fontWeight: "bold", fontSize: "20px", marginLeft: "-14px" }}
                >
                  {this.props.person.price}
                </CardSubtitle>
              </Col>
              <Col>
                <CardSubtitle className="spacing" style={{marginLeft: "-50px" }}>
                  {this.props.person.cut}
                </CardSubtitle>
              </Col>
              <Col>
                <CardSubtitle
                  style={{ color: "#008000", marginTop: "2%", opacity: "0.7"}}
                >
                  <b>{this.props.person.off}</b>
                </CardSubtitle>
              </Col>
            </Row>

            <hr style={{ width: "300px", marginLeft: "-11%" }} />
            <Button
              className="but"
              outline
              color="primary"
              style={{
                border: "none",
                fontSize: "15.5px",
                letterSpacing: "0.9px"
              }}
            >
              <b>{this.props.person.more}</b>
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Cards;
