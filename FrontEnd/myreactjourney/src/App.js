import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header appname='oasis garden' />
      </div>
    );
  }
}

export default App;
