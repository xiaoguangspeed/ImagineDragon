import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './components/Header';
import Navigator from './components/Navigator';
import Sites from './constants/Sites';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header appname='oasis garden' />
        <Navigator Sites={Sites} />
      </div>
    );
  }
}

export default App;
