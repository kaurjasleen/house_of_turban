import React, { Component } from 'react';
import Slider from './Slider';
import ProductCard from './ProductCard';

class HomePage extends Component {
  render() {
    return (
     <div>
        <Slider />
        <ProductCard />
     </div>
    );
  }
}

export default HomePage;
