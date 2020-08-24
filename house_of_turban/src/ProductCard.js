import React, { Component } from "react";
import { CardDeck, Card } from 'react-bootstrap';
import SampleImg from "./assets/SampleImg.jpeg";


{/**/}
class ProductCard extends Component {
  render() {
    return (
        <Card xs={4} md={3} >
          <Card.Img variant="top" src={SampleImg} />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>
              ${this.props.price}
            </Card.Text>
          </Card.Body>
        </Card>

    );
  }
}

export default ProductCard;
