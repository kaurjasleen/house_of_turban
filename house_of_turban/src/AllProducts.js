import React, { Component } from "react";
import { Link } from "@reach/router";
import { CardColumns } from "react-bootstrap";
import ProductCard from "./ProductCard";

class AllProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/itemsInfo")
      .then((res) => {
        console.log(res, "hello this is response to all products page");
        return res.json();
      })
      .then((data) => {
        this.setState({ products: data.itemsInfo });
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return this.state.products ? (
      <div>
        <CardColumns>
          {this.state.products.map((product, index) => {
            return (
              <ProductCard
                name={product.name}
                price={product.price}
                key={index}
              />
            );
          })}
        </CardColumns>
      </div>
    ) : null;
  }
}
export default AllProducts;
