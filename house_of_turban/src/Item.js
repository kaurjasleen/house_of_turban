import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import { Container, Row, Col, Button } from "react-bootstrap";
import SampleImg from "./assets/SampleImg.jpeg";
import "./assets/Item.css";

{
  /*
what we should do is call the item api based on this.props.
when we click on an item in the product gallery (featured products, all products, etc.), then the
click should send an ID as a prop
id's start from 0 (like array index)
	*/
}

class Item extends Component {
  render() {
    const item = this.props.itemData;
    return this.props.itemData ? (
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src={SampleImg} thumbnail />
          </Col>
          <Col xs={6}>
            <h3> {this.props.itemData.name} </h3>
            <p> {this.props.itemData.details} </p>
            <p> ${this.props.itemData.price} </p>
            <hr />
            <div>
              <p> Sizes </p>

              {this.props.itemData.sizes.map((size, index) => {
                return (
                  <Button
                    variant="outline-dark"
                    size="md"
                    key={index}
                    className="space"
                  >
                    {size}
                  </Button>
                );
              })}
            </div>
            <hr />
            <div>
              <p>Colors</p>
              {this.props.itemData.colors.map((background, index) => {
                console.log({ background });

                return (
                  <span className="circle" style={{ background }} key={index}>
                    {" "}
                  </span>
                );
              })}

              <hr />
            </div>
            <Button variant="secondary" size="lg" block>
              ADD TO SHOPPING BAG
            </Button>
            <br />
            <p>Details - Info & Care </p>
            <ul>
              {this.props.itemData.desc.map((des, index) => {
                return <li>{des}</li>;
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    ) : null;
  }
}

export default Item;
