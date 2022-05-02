import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div  className='nvbr' style={{display:'flex', padding:'0.5rem' }}>
          <h1>Moviexpertise</h1>
          <h2 style={{display:'flex', padding:'0.5' ,marginLeft:'1.5rem'}}>favourites</h2>
      </div>
    )
  }
}
