import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import {Container, Row, Col} from 'react-bootstrap';

class Item extends Component{
	render(){
		return(
			<div>
				<Container>
  					<Row>
    				<Col xs={6} md={4}>
     		 		<Image src="holder.js/171x180" thumbnail />
    				</Col>
 					</Row>
				</Container>
			</div>
		);
	}
}

export default Item;
