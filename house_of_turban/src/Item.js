import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import { Container, Row, Col, Button } from "react-bootstrap";
import SampleImg from "./assets/SampleImg.jpeg";
import './assets/Item.css';

{
  /*
what we should do is call the item api based on this.props.
when we click on an item in the product gallery (featured products, all products, etc.), then the
click should send an ID as a prop
id's start from 0 (like array index)
	*/
}
class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],

  };
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/itemsInfo")
      .then((res) => {
        console.log(res, "hello this is response");
        return res.json();
      })
      .then((data) => {
        this.setState({ item: data.itemsInfo[this.props.index] });
        console.log(data);
        console.log(this.state.item);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
	const item_ = this.state.item;
    return (
      <div>
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Image src={SampleImg} thumbnail />
            </Col>
            <Col xs={6}>
              <h3> {item_.name} </h3>
              <p> {item_.details} </p>
			  <p> ${item_.price} </p>
              <hr />
			  <div>
				  <p> Sizes </p>
				  {item_.sizes &&
				  item_.sizes.map((size, index) => {
					  return(
							<Button variant="outline-dark" size="md" key={index} className="space">
		                	{size}
		              		</Button>
						)
				  })
			  }
		  </div>
              <hr />
			  <div>
              <p>Colors</p>
			  {item_.colors &&
				  item_.colors.map((background, index) => {
					  console.log({background});

					  return(
						  <span className="circle" style={{background}} key={index}> </span>

				  )})
			  }
			  <hr />
			  </div>
              <Button variant="secondary" size="lg" block>
                ADD TO SHOPPING BAG
              </Button>
              <br />
              <p>Details - Info & Care </p>
			  <ul>
			  {item_.desc &&
				  item_.desc.map((des, index) => {
					  return(
						  <li>{des}</li>
					  )
				  })
			  }
			  </ul>
            </Col>
          </Row>

        </Container>
      </div>
    );
  }
}

export default Item;
