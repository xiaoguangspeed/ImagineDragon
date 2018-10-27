import React, { Component } from 'react';
import styled from 'styled-components';

const NavContainer = styled.div`
  padding:10px 10px;
`

const Link = styled.a`
  font-size:16px;
  color:green;
`
class Navigator extends Component {
  render() {
    return (
        <NavContainer>
          {this.props.Sites.map((site,ind) => {
            return (
              <Link href={site.Url} key={site.name}  > {site.name}</Link>
            )
          })}
        </NavContainer>
    )
  }
}


export default Navigator