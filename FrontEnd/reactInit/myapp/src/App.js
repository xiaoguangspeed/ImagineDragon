import React, { Component } from "react";

import Header from "./components/Header";
import Navigator from "./components/Navigator";
import { Sites } from "./constants/Sites";
import "./App.css";
import styled from 'styled-components'

const Cates = styled.section`
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
`
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header appname="oasis garden" />
        <Cates >
          {Sites.map((Item, ind) => {
            return <Navigator Sites={Item} key={ind} />;
          })}
        </Cates>
      </div>
    );
  }
}

export default App;
