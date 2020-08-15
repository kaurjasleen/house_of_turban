import React from "react";
import "./assets/App.css";
import { Router } from "@reach/router";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import ItemPage from "./ItemPage";
import { Container, Row } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
        <NavBar />
      <Container fluid>
        <Row>
            <Router>
              <HomePage path="/" />
              <ItemPage path="/ItemPage" />
            </Router>
        </Row>
      </Container>
    </div>
  );
}

export default App;
