import React, { Component } from "react";
import { Card, Col } from "react-bootstrap";
export default class Item extends Component {
  state = {
    show: false,
  };

  showPriceInformation = () => {
    this.setState({ show: !this.state.show });
    // this.setState(prevState => ({show : !prevState.show}))
  };

  render() {
    return (
      <Col md="4">
        <Card>
          <Card.Img variant="top" src={this.props.item.imgurl} />
          <button onClick={this.showPriceInformation} className="showPrice">
            show price
          </button>
          {this.state.show && (
            <div className="itemPrice">{this.props.item.price}</div>
          )}
        </Card>
      </Col>
    );
  }
}
