import React, { Component } from 'react';
import afkicon from '../../../image/afkcodeIcon.png'
class AppHeader extends Component {
    render() {
      return (
        <div className="appHeader">
         <img src={afkicon} alt=""></img>
        </div>
      );
    }
  }
  
  export default AppHeader;