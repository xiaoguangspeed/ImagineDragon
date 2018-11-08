import React, { Component } from 'react'

const imgbg = {
  width:"130px",
  background: "#e1e1e1"
}
const img = {
  transition: "opacity .2s ease-in .25s"
}
class LazyImg extends Component{
  state = {
    imgSrc:""
  }


  componentDidMount() {
    this.setState({
      imgSrc:"https://img.alicdn.com/imgextra/i1/105/O1CN01fveLDR1Ce83iIr0nM_!!105-0-lubanu.jpg_200x200q90.jpg"
    })
  }

  componentWillUnmount() {

  }
  render(){

    return (
      <div className="image-bg" style={imgbg}>
        <img width="130" height="200" src={this.state.imgSrc} style={img}></img>
      </div>
    )
  }
}

export default LazyImg