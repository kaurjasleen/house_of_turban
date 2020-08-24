import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import {Container, Row, Col, Button} from 'react-bootstrap';
import SampleImg from "./assets/SampleImg.jpeg";

class Item extends Component{
	render(){
		return(
			<div>
				<Container>
  					<Row>
    				<Col xs={6} md={4}>
     		 		<Image src={SampleImg} thumbnail />
    				</Col>
						<Col xs={6}>
						<h3> Pants </h3>
						<p> Wide leg printed pants </p>
						<p> $20 </p>
						<hr/>

						<p> Size </p>
						<Button variant="outline-dark" size="md">S</Button>{'        '}
						<Button variant="outline-dark" size="md">M</Button>{'        '}
						<Button variant="outline-dark" size="md">L</Button>{'        '}
						<Button variant="outline-dark" size="md">XL</Button>
						<hr/>

						<p>Colors</p>
						<Button variant="success"></Button>{' '}
 						<Button variant="warning"></Button>{' '}
						<Button variant="danger"></Button>{' '}
						<Button variant="info"></Button>{' '}
						<hr/>

						<Button variant="secondary" size="lg" block>
						ADD TO SHOPPING BAG
						</Button>
						<br/>
						<p>Details - Info & Care </p>
						<ul>	<li>100% cotton fabric</li>
									<li>Color: FLoral</li>
									<li>Wash with warm water</li>
									<li>Wash separately </li>
									<li>other instructions</li>
						</ul>
						</Col>
	 					</Row>
						<Row>
						<p> Similar Products</p>
					
						<br/>
						</Row>
				</Container>
			</div>
		);
	}
}

export default Item;
