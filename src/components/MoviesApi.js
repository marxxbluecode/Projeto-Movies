import React, {Component} from 'react'
import styled from 'styled-components'
import Movies from "./server/Movies"
import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  * {
    margi: 0;
    padding; 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    color: #fff;
    
  }
  body {
    background-color: #19222b;
    overflow-x: hidden
  }
`;


const Title = styled.h3`
  font-size: 2rem;
  color: #f5f9fc;
`;
const Container = styled.main`
  width: 80%;
  margin: 0% 0% 0% 8%;
`;
const Poster = styled.img`
  width: 250px;
  height: 370px;
  border-radius: 5%/3%;
  margin: 0.3rem;
  &:hover {
    border: 4px solid #a442ed;
    cursor: pointer;
    transform: scale(1.02);
}
`;
const MoviesDisplay = styled.div`
  display: flex;
  flex-flow: wrap;
`;
class MoviesApi extends Component{

  state = {
    movielist: []
  }

  componentDidMount(){
    this.getMovies()
  }

  getMovies = async () => {
    const response = await Movies.get()
    console.log("Movies:",response.data.results)

    const postermovie = response.data.results.map((item) => {
      return{
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`
    }})

    this.setState({
      movielist: postermovie
    })  
    }

render(){
  return(
    <section>
      <GlobalStyle />
      <Container>
        <div>
          <Title>Movies</Title>
        </div>
        <MoviesDisplay> 
        {this.state.movielist.map((films, index) => (
          <ul  key={index}> 
            {/* <li>{films.title} </li>
            <li>{films.vote_average}</li> */}
            {/* <li>{films.overview}</li> */}
            <Poster src={films.poster_path} alt={`poster do filme ${films.title}`}/>
          </ul>
          ))}
        </MoviesDisplay>
        </Container>
    </section>
    )
  }
}

export default MoviesApi;

