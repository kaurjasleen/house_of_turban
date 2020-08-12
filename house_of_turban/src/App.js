import React from 'react';
import './assets/App.css';
import { Router } from '@reach/router';
import HomePage from './HomePage';
import NavBar from './NavBar';
import ItemPage from './ItemPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Router>
            <HomePage path="/"/>
            <ItemPage path='/ItemPage'/>
        </Router >

    </div>
  );
}

export default App;
