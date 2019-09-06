import React from 'react';
import './App.css';
import axios from "axios"
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
        <p>
          fishtalk
        </p>
        <img src="http://127.0.0.1:3001/fishtalk.jpg" alt="" width="600" height="450"/>
      </header>
    </div>  
    )
  }
}

export default App;
