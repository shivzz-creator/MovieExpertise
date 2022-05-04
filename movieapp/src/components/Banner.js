import React, { Component } from 'react'
import { movies } from '../movieData'
export class Banner extends Component {
  render() {
    let moviesElem = movies.results[Math.floor((Math.random() * 10))]
      let backDrop =  moviesElem.backdrop_path
    return (
       <div className="card banner-card" >
<img src={`https://image.tmdb.org/t/p/original${backDrop}`} className="banner-img" alt="..."/>
      
         <h5 className="card-title banner-title">Find your Pick</h5>
         <p className="card-text  banner-text">Most popular and authoritative source for movie, TV and celebrity content. Find ratings and reviews for the newest movie and TV shows.</p>
         <a href="#" className="btn btn-success">Go somewhere</a>
      
     </div>
    )
  }
}

export default Banner

