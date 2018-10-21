import React, { Component } from 'react';

class Navigator extends Component {

  render() {
    return (
      <div className="navbar navbar-light">
        <div className="Navcontainer">
          {this.props.Sites.map((site,ind) => {
            return (
              <a href={site.Url} key={site.name}  > {site.name}</a>
            )
          })}
        </div>
      </div>
    )
  }
}


export default Navigator