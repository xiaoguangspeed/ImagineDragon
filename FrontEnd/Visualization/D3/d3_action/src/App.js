import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Route, Link } from 'react-router-dom';
import DataFlow from './components/DataFlow'


// If you start thinking about routing as UI, not as static configuration,
// This is just one example(手机翻转，redirect路由). There are many others we could discuss but we’ll sum it up with
//  this advice: To get your intuition in line with React Router’s, think about components, 
//  not static routes. Think about how to solve the problem with React’s declarative composability
// because nearly every “React Router question” is probably a “React question”.
class App extends Component {
  render() {
    return (
      // dynamic routing, we mean routing that takes place as your app is rendering
      <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span className="App-title">Welcome to D3</span>
        </header>
        <div className="leftContent fl">
          <Link to="/dataflow" className="dataflow">
              data flow
          </Link>

        </div>
          <div className="rightContent fr">
            {/* Route is just a component */}
            <Route path="/dataflow" component={DataFlow}></Route>
          </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
