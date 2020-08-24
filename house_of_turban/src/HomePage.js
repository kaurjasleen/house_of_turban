import React, { Component } from "react";
import Slider from "./Slider";
import ProductCard from "./ProductCard";
import Footer from "./Footer";
import { Container, Row } from "react-bootstrap";

class HomePage extends Component {
  render() {
    return (

          <div>
            <Slider />
            <br/>
            <br/>
            <p>Featured Products</p>
            <ProductCard />
          </div>

    );
  }
}

export default HomePage;
