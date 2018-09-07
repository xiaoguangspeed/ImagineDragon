import React from 'react';
// import { Link } from 'react-router-dom';


class Header extends React.Component {
  render() {
    return (
      <nav className="menu">
        <div style={{textAlign:"center",height:"40px",lineHeight:"40px",background:"#000",color:"#fff",}}>
            {this.props.appname.toLowerCase()}
        </div>
      </nav>
    );
  }
}

export default Header;
