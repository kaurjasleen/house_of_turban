import React from 'react';
import './assets/App.css';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import HomePage from './HomePage';
import NavBar from './NavBar';
import Footer from './Footer';
import ItemPage from './ItemPage';
import Login from './Login';
import Register from './Register'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
        <NavBar />
        <Router>
            <HomePage path="/"/>
            <ItemPage path='/ItemPage' index={1}/>
            <Login path='/Login'/>
            <Register path='/Register'/>

        </Router >
        <Footer />

    </div>
  );
}

export default App;
