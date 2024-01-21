import React, { Component } from 'react';
import Navbar from "./Navbar.js";
import Art from "./Art.js";
import Home from "./Home.js";

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


class App extends Component {
  render() {
  return (
    <Router>
    <div>
      <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/art' element={<Art />} />
      </Routes>
    </div>
    </Router>
    );
  }
}

export default App;
