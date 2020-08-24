import React, { Component } from "react";
import ProductCard from './ProductCard';
import { CardDeck } from 'react-bootstrap';
import Item from './Item';
import Footer from './Footer';
import SampleImg from "./assets/SampleImg.jpeg";

class ItemPage extends Component {

    constructor(props) {
      super(props);
      this.state = {
        itemsData: {},
        };
    }

    componentDidMount() {
      fetch("http://localhost:8080/api/itemsInfo")
        .then((res) => {
          console.log(res, "hello this is response");
          return res.json();
        })
        .then((data) => {
          this.setState({ itemsData: data.itemsInfo });
          console.log(this.state.itemsData);
          console.log(this.state.itemsData[this.props.index])
        })
        .catch((err) => {
          console.log(err);
        });
    }

  render() {
    return (
     <div>
        <Item itemData={this.state.itemsData[this.props.index]}/>
        <h1>More Products</h1>
        <CardDeck>
            <ProductCard name={"Item Name"} price={32.04}/>
            <ProductCard name={"Item Name"} price={32.04}/>
            <ProductCard name={"Item Name"} price={32.04}/>
        </CardDeck>

     </div>
    );
  }
}

{/*for similar products, do a for loop three times and choose 3 random id numbers for now*/}

export default ItemPage;
