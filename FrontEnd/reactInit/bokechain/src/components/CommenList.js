import { React ,Component} from 'react';

class CommenList extends  Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      comments:[1,2,3]
    }
  }
  handleChange(){
    this.setState({
      comments:[]
    })
  }
  render(){
    return (
      <div>place holder</div>
    )
  }
}