import React, { Component } from 'react'

export class Banner extends Component {
  render() {
    return (
       <div className="card banner-card" >
<img src="https://images.pexels.com/photos/7991569/pexels-photo-7991569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="banner-img" alt="..."/>
      
         <h5 className="card-title banner-title">Card title</h5>
         <p className="card-text  banner-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <a href="#" className="btn btn-success">Go somewhere</a>
      
     </div>
    )
  }
}

export default Banner

