import React, { Component } from "react";
import './assets/Slider.css';
import emptyImg from "./assets/emptyImg.png";
import logoHOT from "./assets/logoHOT.png";
import pallette from "./assets/colorpallette.png";
import Carousel from 'react-bootstrap/Carousel';

class Slider extends Component {
  render() {
    return (
        <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 img-responsive carouselImg"
            src={emptyImg}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>This is the first slide's caption</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100 img-responsive carouselImg"
            src={logoHOT}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>This is the second slide's caption.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carouselItem">
          <img
            className="d-block w-100 img-responsive carouselImg"
            src={pallette}
            alt="Fourth slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              This is the third slide's caption.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  </div>
    );
  }
}

export default Slider;
