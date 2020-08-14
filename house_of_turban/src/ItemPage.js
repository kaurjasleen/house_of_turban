import React, { Component } from "react";
import ProductCard from './ProductCard';
import Item from './Item';
import Footer from './Footer';

class ItemPage extends Component {
  render() {
    return (
     <div>
        <p> Insert Product Title </p>
        <Item />
        <ProductCard />
    
     </div>
    );
  }
}

export default ItemPage;
