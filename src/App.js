import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';



import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import Home from './Pages/Home';
import About from './Pages/About';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <Navbar/>
            <Route exact path="/" component={Home} />            
            <Route exact path="/about" component={About} />
            
            <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
