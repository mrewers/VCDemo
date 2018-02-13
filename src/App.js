import React, { Component } from 'react';

import Header from './components/header.js';
import Body from './components/body.js';
import Footer from './components/footer.js';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="site_container">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
