import React from "react";
import { Row, Col, Image } from "react-bootstrap";

function CartFullInfo(props) {
  return (
    <div>
      {props.items.map((item, i) => (
        <Row key={i}>
          <Col md="3">
            <Image src={item.imgurl} width={50} height={50} roundedCircle />
          </Col>
          <Col md="9">{item.name}</Col>
        </Row>
      ))}
    </div>
  );
}

export default CartFullInfo;
