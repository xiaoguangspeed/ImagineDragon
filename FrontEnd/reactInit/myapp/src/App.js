import React, { Component } from 'react';

import Header from './components/Header';
import Navigator from './components/Navigator';
import { Sites }  from './constants/Sites';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header appname='oasis garden' />

        {
          Sites.map((Item,ind) =>{
           return  <Navigator Sites={Item} key={ind}></Navigator>
          })
        }
      </div>
    );
  }
}

export default App;
