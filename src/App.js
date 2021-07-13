import React, {Component} from 'react'

import Movies from "./server/Movies"

class MARXFLIX extends Component{

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
  MoviesList = () => {
    const films = ["F8", "jacaré", "Loki"];
  }

  render(){
    return(
      <div>
        <ul> {this.state.movies.map((films) => 
          <li>
            {films}
          </li>)}
        </ul>
      </div>
    )
  }
}

export default MARXFLIX;
