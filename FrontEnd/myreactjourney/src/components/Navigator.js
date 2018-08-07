import React, { Component } from 'react';
// let selectedSite = '';
// let select = (site) => {
//    selectedSite = site;
//    return;
// }
class Navigator extends Component {
  constructor(props){
    super(props);
    // this.state = {
    //   selectedSite:props.Sites[0]
    // }
  };

  render() {
    return (
      <div className="navbar navbar-light">
        <div className="Navcontainer">
          {this.props.Sites.map(site => {
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