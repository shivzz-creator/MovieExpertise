import React, { Component } from 'react'
import { movies } from '../movieData'
import axios from 'axios'
export default class MovieList extends Component {
    constructor(){
        super();
        this.state={
            hover:"",
            parr: [1],
            movies:[],
            currPage: 1,
        };
    }
    async componentDidMount(){
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b3e99941ab0b2453bf97d2d7ac42e88f&language=en-US&page=${this.state.currPage}`);
        let movieData= res.data ;
        this.setState(
            {
                movies: [...movieData.results]
            }
        )


    }
changeMovies = async()=>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b3e99941ab0b2453bf97d2d7ac42e88f&language=en-US&page=${this.state.currPage}`);
    let movieData= res.data ;
    this.setState(
        {
            movies: [...movieData.results]
        }
    )
}
handleNext=()=>{
    let temp = []
    for(let i = 1 ; i<=this.state.parr.length+1;i++){
        temp.push(i);
    }
    this.setState(
        {
            parr:[...temp],
            currPage:this.state.currPage+1

        },this.changeMovies
    )
    //want to call change movies after state update
}
handlePrev=()=>{
    let temp = []
    if(this.state.currPage>=2){
        for(let i = 1 ; i<=this.state.parr.length-1;i++){
            temp.push(i);
        }
        this.setState(
            {
                parr:[...temp],
                currPage:this.state.currPage-1

            },this.changeMovies
        )
    }
    //want to call change movies after state update
}


  render() {
    //   let movies_array = movies.results
      
     
    return (

        
      <div>
         
              <h2 className='text-center'><strong>Trending Now</strong></h2>
          
         

<div className='movies-list'>
          {
            this.state.movies.map((moviesElem) => (
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
    <li class="page-item"><a class="page-link" href="#" onClick={this.handlePrev}>Previous</a></li>
    {
        this.state.parr.map((value) =>(
            <li class="page-item"><a class="page-link" href="#">{value}</a></li>
        ))
    }
   

    <li class="page-item"><a class="page-link" href="#" onClick={this.handleNext}>Next</a></li>
  </ul>
</nav>
</div>


      </div>
    )
  }
}
