import React from 'react';
function logProps(WrappedComponent){
  return class extends React.Component{
    componentWillReceiveProps(nextProps){
      console.log(this.props);
      console.log(nextProps);
    }
    render(){
      // 用容器组件组合包裹组件且不修改包裹组件，这才是正确的打开方式。
      return <WrappedComponent {...this.props}/>
    }
  }
}