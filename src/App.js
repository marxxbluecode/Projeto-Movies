import React, {Component} from 'react'
import styled from 'styled-components'
import GlobalStyle from './components/GlobalStyle'
import Movies from './server/Movies'
import Series from './server/Series'
import Header from './components/header'



const Title = styled.h3`
  font-size: 2rem;
  color: #f5f9fc;
`;

class MARXFLIX extends Component{

  state = {
    movielist: [],
    series: [],
  }

  componentDidMount(){
    this.getMovies()
    this.getSeries()
  }

  getMovies = async () => {
    const response = await Movies.get()
    console.log("Movies:",response.data.results)

    this.setState({
      movielist: response.data.results
    })}

  getSeries = async () => {
    const response = await Series.get()
    console.log("Series:",response.data.results)

    this.setState({
      series: response.data.results
    })
  }

render(){
  return(
    <section>
      <Header/>
      <GlobalStyle />
      <main>
        <div>
          <Title>Movies</Title>
        </div>
        <div> 
        {this.state.movielist.map((films, index) => (
          <ul  key={index}> 
            <li>{films.title} </li>
            <li>{films.vote_average}</li>
            <li>{films.release_date}</li>
            <li>{films.poster_path}</li>
            <li>{films.overview}</li>
          </ul>
          ))}
        </div>
        <div>
            <Title>Series</Title>
        </div>
        <div>
        {this.state.series.map((temp, index) => ( 
          <ul  key={index}> 
            <li>{temp.name} </li>
            <li>{temp.vote_average}</li>
            <li>{temp.poster_path}</li>
            <li>{temp.overview}</li>
          </ul>
        ))}
        </div>
        </main>
    </section>
    )
  }
}

export default MARXFLIX;
