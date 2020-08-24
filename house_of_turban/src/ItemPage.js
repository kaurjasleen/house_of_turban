import React, { Component } from "react";
import ProductCard from './ProductCard';
import Item from './Item';
import Footer from './Footer';
import SampleImg from "./assets/SampleImg.jpeg";

class ItemPage extends Component {
  render() {
    return (
     <div>
        <Item index={1}/>
        <h1>Similar Products</h1>
        <ProductCard />

     </div>
    );
  }
}

export default ItemPage;
