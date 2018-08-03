import React from 'react';

const Navigator = props =>{
  let selectedSite = props.Sites[0].Url;
  const select = (url) => {
    selectedSite = url;
  }
  return (

    <div className="navbar navbar-light">
      <div className="Navcontainer">
        {props.Sites.map( site =>{
          return (
            <a href={site.Url} key={site.name} onClick={select(site.Url)} > {site.name}</a>
          )
        })}
      </div>
        <iframe
        title=""
        width="50%"
        height="400"
        frameborder="0"
        scrolling="yes"
        marginheight="0"
        marginwidth="0"
        src={selectedSite} >
        </iframe>
    </div>
  )
}

export default Navigator