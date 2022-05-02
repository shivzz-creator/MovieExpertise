import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div  className='nvbr' style={{display:'flex', padding:'0.5rem' }}>
          <h1><em>m</em>ovi<b>e</b><em>X</em>pertise</h1>
          <h2 style={{display:'flex', padding:'0.5' ,marginLeft:'1.5rem'}}>favourites</h2>
      </div>
    )
  }
}
