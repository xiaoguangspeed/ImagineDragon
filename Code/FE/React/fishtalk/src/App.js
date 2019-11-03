import React from 'react';
import './App.css';
import axios from "axios"
import Button from 'antd/es/button';
class App extends React.Component {
  static propTypes = {

  }
  constructor(props) {
    super(props)
    this.state = {

    }
  }
	proxyRequest() {
		axios({
			method: 'get',
			url: "/api/hello"
		}).then((resp) => {
			console.log(resp);
		}, (err) => {
			console.log(err);
		});
  }
  componentDidMount() {
    console.log('componentDidMount')
    this.proxyRequest()
  }
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <Button type="primary">Button</Button>
      </header>
    </div>  
    )
  }
}

export default App;
