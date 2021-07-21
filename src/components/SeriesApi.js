import React, {Component} from 'react'
import styled from 'styled-components'
import Series from './server/Series'
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
class SeriesApi extends Component{

  state = {
    series: [],
    filterlist: []
  }

  componentDidMount(){
    this.getSeries()
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
      series: posterserie,
      filterlist: posterserie
    })
  }

  handleChange = (event) => {
    const { series } = this.state
    if(event.target.value === ""){
        this.setState({
          filterlist: series
        });
        return;
    }
    const filterItemConvert =  series.filter((item) => {
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
            <Title>Series</Title>
            <BoxBar>
                <SearchBar onChange={this.handleChange}  type='text' placeholder='search here'/> 
          </BoxBar>
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

export default SeriesApi;

