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
  color: #a442ed;
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
}
`;
const MovieBoxInfo = styled.div`
    display: flex;
    flex-flow: wrap;
    align-items: center;
    width: 400px;
    background-color: #29313c;
    opacity: 0.9;
    border-radius: 3%/6%;
    list-style: none;
    display: none;
`;
const Li = styled.li`
      margin: 0.5rem;
      padding: 0.5rem;
      line-height: 110%;
`;
const MoviesDisplay = styled.div`
  display: flex;
  flex-flow: wrap;
`;
const BoxBar = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
 
`;
const SearchBar = styled.input`
    width: 65%;
    height: 1px;
    border-radius: 5%/70%;
    outline: none;
    color: #a442ed;
    padding: 1rem;
    position: relative;
    top: -150px;
    left: 550px;
`;
class MoviesApi extends Component{

  state = {
    movielist: [],
    filterlist: [],
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
      movielist: postermovie,
      filterlist: postermovie
    })  
    }

    handleChange = (event) => {
      const { movielist } = this.state
      if(event.target.value === ""){
          this.setState({
            filterlist: movielist
          });
          return;
      }
      const filterItemConvert =  movielist.filter((item) => {
        if(item.title.toLowerCase().includes(event.target.value.toLowerCase())){
          return true;
        }
        return false;
      })
      this.setState({
        filterlist: filterItemConvert
      })
    };

render(){
  return(
    <section>
      <GlobalStyle />
      <Container>
        <div>
          <Title>Movies</Title>
          <BoxBar>
                <SearchBar onChange={this.handleChange}  type='text' placeholder='search here'/> 
          </BoxBar>
        </div>
        <MoviesDisplay> 
        {this.state.movielist.map((films, index) => (
          <ul key={index}> 
            <Poster  src={films.poster_path} alt={`poster do filme ${films.title}`}/>
          <MovieBoxInfo>
            <Li>{films.title} </Li>
            <Li>{films.vote_average}</Li>
            <Li>{films.overview}</Li>
          </MovieBoxInfo>
          </ul>
          ))}
        </MoviesDisplay>
        </Container>
    </section>
    )
  }
}

export default MoviesApi;

