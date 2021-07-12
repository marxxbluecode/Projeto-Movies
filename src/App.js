import React, {Component} from 'react'

import Movies from "./server/Movies"

class MoviesApi extends Component{
  
  state = {
    movies: []
  }

  componentDidMount(){
    this.getMovies()
  }

  getMovies = async () => {
    const response = await Movies.get()
    console.log(response.data.results)
  }
  
  render(){
    return(
      <div>
        <p>Colorado</p>
      </div>
    )
  }
}

export default MoviesApi;
