import React, { Component } from 'react'

export class Banner extends Component {
  render() {
    return (
       <div className="card banner-card" >
<img src="https://images.pexels.com/photos/7991569/pexels-photo-7991569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="banner-img" alt="..."/>
      
         <h5 className="card-title banner-title">Find your Pick</h5>
         <p className="card-text  banner-text">Most popular and authoritative source for movie, TV and celebrity content. Find ratings and reviews for the newest movie and TV shows.</p>
         <a href="#" className="btn btn-success">Go somewhere</a>
      
     </div>
    )
  }
}

export default Banner

