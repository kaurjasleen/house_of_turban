import React, { Component } from "react";
import Slider from "./Slider";
import ProductCard from "./ProductCard";
import { Container, Row } from "react-bootstrap";

class HomePage extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <div>
            <Slider />
            <ProductCard />
          </div>
        </Row>
      </Container>
    );
  }
}

export default HomePage;
