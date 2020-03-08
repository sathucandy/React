import React, { Component } from "react";
import { Card, CardText, CardImg, Col } from "reactstrap";

export class Header_card extends Component {
  constructor(props) {
    super();
  }
  render() {
    const style = {
      fontSize: "18px",
      // letterSpacing: "-1px",
      fontFamily: "Roboto",
      lineHeight: "20px",
      marginTop: "10%",
      marginBottom: "8px",
      color: "white",
      float: "left"
      // wordSpacing: "-3px"
      // opacity: "0.9"
    };

    const women = {
      height: "76px",
      width: "100px"
    };

    const logo = {
      height: "76px",
      width: "76px"
    };

    const text = {
      color: "white",
      fontSize: "14px",
      fontFamily: "Roboto",
      lineHeight: "1.38",
      letterSpacing: "normal",
      marginLeft: "-7%",
      opacity: ".88"
    };
    return (
      <div>
        <Card
          body
          style={{
            background: "none",
            border: "none",
            fontFamily: "Courier New",
            marginTop: "6.5%",
          }}
        >
          <CardImg
            src={this.props.person.img}
            style={this.props.person.type === "women" ? women : logo}
            alt="Card image cap"
          />
          <CardText style={style}>
            <b>{this.props.person.title}</b>
          </CardText>
          <Col>
            <CardText style={text}>{this.props.person.text}</CardText>
          </Col>
        </Card>
      </div>
    );
  }
}

export default Header_card;
