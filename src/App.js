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
const PosterSerie = styled.img`
  width: 250px;
  height: 150px;
  border-radius: 5%/3%;
  margin: 0.3rem;
  &:hover {
    border: 4px solid #a442ed;
    cursor: pointer;
    transform: scale(1.02);
}
`;
const SeriesDisplay = styled.div`
  display: flex;
  flex-flow: wrap;
`;
const SeriesName = styled.li`
  list-style: none;
  font-size: 0.8rem;
  text-align: center;
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

    const postermovie = response.data.results.map((item) => {
      return{
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`
    }})

    this.setState({
      movielist: postermovie
    })  
    }

  getSeries = async () => {
    const response = await Series.get()
    console.log("Series:",response.data.results)

    const posterserie = response.data.results.map((item) => {
      return{
        ...item,
        backdrop_path: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`
      }
    })
    this.setState({
      series: posterserie
    })
    
  }
  

render(){
  return(
    <section>
      <Header/>
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
        <div>
            <Title>Series</Title>
        </div>
        <SeriesDisplay>
        {this.state.series.map((temp, index) => ( 
          <ul  key={index}> 
            {/* <li>{temp.vote_average}</li> */}
            <PosterSerie src={temp.backdrop_path} alt={`poster da serie ${temp.title}`}/>
            <SeriesName>{temp.name} </SeriesName>
            {/* <li>{temp.overview}</li> */}
          </ul>
        ))}
        </SeriesDisplay>
        </Container>
    </section>
    )
  }
}

export default MARXFLIX;
