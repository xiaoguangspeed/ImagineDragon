import React, { Component } from 'react';

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN';
// import logo from './logo.svg';
import Header from './components/Header';
import Navigator from './components/Navigator';
import AntDes from './components/AntDes';
import Sites from './constants/Sites';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header appname='oasis garden' />
        <Navigator Sites={Sites} />
        <AntDes></AntDes>
      </div>
    );
  }
}

export default App;
