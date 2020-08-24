import React, { Component } from "react";
import { Card, Button, Form, FormControl} from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
    	<Card >
      <br/>
      <br/>
  <Card.Header className="text-center">House Of Turban</Card.Header>
  <Card.Body>
    <Card.Title>----Some info about house of tuban----</Card.Title>
    <Card.Text>
      Subscribe to our news-letter!
    </Card.Text>
    <Form inline>
      <FormControl type="text" placeholder="Enter e-mail" className="mr-sm-2" />
      <Button variant="outline-primary">Subscribe</Button>
    </Form>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>

    );
  }
}

export default Footer;
