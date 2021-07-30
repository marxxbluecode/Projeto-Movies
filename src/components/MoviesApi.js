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
  }
`;
const Title = styled.h2`
  font-size: 2rem;
  color: #a442ed;
`;
const Container = styled.main`
  width: 90%;
  margin: 0% 0% 0% 10%;
`;
const Poster = styled.img`
  width: 250px;
  height: 370px;
  border-radius: 5%/3%;
  margin: 1.2rem;
  &:hover {
    transform: scale(1.1);
    transition-duration: 0.3s;
    border: 4px solid #a442ed;
    cursor: pointer;
}
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
    width: 57%;
    height: 1px;
    border-radius: 5%/70%;
    outline: none;
    color: #a442ed;
    padding: 1rem;
    position: relative;
    top: -140px;
    left: 467px;
`;
const H2 = styled.div`
    color: #18294a;
    font-size: 1.07rem;
`;
const Ul = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
 &:hover .info{
    cursor: pointer;
    width: 400px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
      90deg,
      rgba(93, 12, 255, 1) 0%,
      rgb(180, 92, 235) 100%
    );;
    padding: 0.7rem;
    list-style: none;
    border-radius: 3%/6%; 
 }
`;
const Li = styled.li`
    margin: 0.5rem;
    font-size: 0.9rem;
    color: #18294a;
`;
const MovieBoxInfo = styled.div`
    display: none;
    position: absolute;
    margin-left: 30rem;
    margin-bottom: 15rem;

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
    });
    };

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
      });
    };

render(){
  const { filterlist } = this.state;
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
        {filterlist.map((films, index) => (
          <Ul className='item' key={index}> 
            <Poster  src={films.poster_path} alt={`poster do filme ${films.title}`}/>
          <MovieBoxInfo className='info'>
            <Li><H2> {films.title}</H2> </Li>
            <Li>{films.vote_average}</Li>
            <Li>{films.overview}</Li>
          </MovieBoxInfo>
          </Ul>
          ))}
        </MoviesDisplay>
        </Container>
    </section>
    )
  }
}

export default MoviesApi;

