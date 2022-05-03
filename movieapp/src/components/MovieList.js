import React, { Component } from 'react'
import { movies } from '../movieData'
export default class MovieList extends Component {
    constructor(){
        super();
        this.state={
            hover:"",
        };
    }
  render() {
      let movies_array = movies.results
      console.log(movies_array)
    return (

        
      <div>
         
              <h2 className='text-center'><strong>Trending Now</strong></h2>
          
         

<div className='movies-list'>
          {
            movies_array.map((moviesElem) => (
              <div className="card movie-card"   onMouseEnter={() => this.setState({hover :moviesElem.id})} onMouseLeave={()=> this.setState({hover:""})} >
                <img src={`https://image.tmdb.org/t/p/original${moviesElem.backdrop_path}`}
                 className="card-img-top movie-img"
                  style={{ height: '40vh', width: '20vw' }} alt="..." />

                <p className="card-title movie-title"><strong>{moviesElem.title}</strong></p>

                <div className='button-wrapper'>
                {this.state.hover == moviesElem.id && (
                   <a href="#" className="btn btn-danger movie-button"><b><em>Add to Favourites</em></b></a>
                    
                  
                )}
                 
                </div>


              </div>
            ))
          }
        </div> 
        <div style={{display:'flex' ,justifyContent:'center'}}>
        <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
</div>


      </div>
    )
  }
}
