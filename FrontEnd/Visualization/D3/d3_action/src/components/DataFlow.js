import React from 'react';
import * as d3 from 'd3';

// 组件的状态与属性十分相似，但是状态是私有的，完全受控于当前组件。
// 使用类就允许我们使用其它特性，例如局部状态、生命周期钩子
// 在具有许多组件的应用程序中，在销毁时释放组件所占用的资源非常重要。  mount unmount
class DataFlow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  componentDidMount(){
    d3.csv('../dataset/Hollywood_Movie_Dataset/Most-Profitable-Hollywood-Stories-hello.csv',function(err,data){
      console.log(err,data);
    });
    console.log('mounted');
  }
  render() {
    return (
        <div className="container">
          hello data

        </div>
    );
  }
}

export default DataFlow;
