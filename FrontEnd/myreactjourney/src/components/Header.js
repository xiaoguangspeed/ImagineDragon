import React from 'react';
// import { Link } from 'react-router-dom';


class Header extends React.Component {
  render() {
    return (
      <nav className="menu">
        <div>
            {this.props.appname.toLowerCase()}
        </div>
      </nav>
    );
  }
}

export default Header;
