import React, { Component } from "react";
import { Card, CardTitle, CardText, CardImg } from "reactstrap";

export class Header_card extends Component {
  constructor(props) {
    super();
  }
  render() {
    const style = {
      fontSize: "20px",
      fontFamily: "Montserrat",
      fontWeight: 500,
      letterSpacing: "normal",
      lineHeight: "normal",
      marginBottom: "8px",
      color: "white"
    };

    const text = {
      color: "white",
      margintTop: "20%",
      fontSize: "16px",
      fontFamily: "Montserrat",
      fontWeight: "400",
      lineHeight: "1.38",
      letterSpacing: "normal",
      opacity: ".88"
    };
    return (
      <div>
        <Card body style={{ background: "none", border: "none" }}>
          <CardImg
          style={{height: "50px"}}
            top
            width="100%"
            src="/assets/318x180.svg"
            alt="Card image cap"
          />
          <CardTitle style={style}>{this.props.person.title}</CardTitle>
          <CardText style={text}>{this.props.person.text}</CardText>
        </Card>
      </div>
    );
  }
}

export default Header_card;
