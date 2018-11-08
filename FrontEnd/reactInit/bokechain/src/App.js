import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import {connect } from "react-redux";
import styled from "styled-components";
import Rect  from './components/Rect'
import LazyImg  from './components/LazyImg'
// import './App.css'

const OverLay = styled.div`
  position:fixed;
  z-index:20;
  top:0;
  bottom:0;
  left:0;
  right:0;
`


class App extends Component {
  state = {
    items: 9
  }

  componentDidMount(){
    this.setState({
      items: window.outerWidth <= 960? 9:6
    })
  }

  componentWillUnmount(){
    
  }
  render() {
    return (
     <Router>
      <div className="App">
        <Rect></Rect>
        <LazyImg></LazyImg>
      </div>
     </Router>
    );
  }
}

export default App;
