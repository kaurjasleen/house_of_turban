import React from 'react';
import './assets/App.css';
import Slider from './Slider';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" /> */}
        <p>
        This is the App.js file, which we will be using to display all pages.
            These pages will import components and renders those that pertain to
            them. To route to other pages, we will use Router, which is a React library.
        </p>

        <Slider />
      </header>
    </div>
  );
}

export default App;
