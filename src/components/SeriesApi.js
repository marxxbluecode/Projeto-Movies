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
  }
`;
const Title = styled.h3`
  font-size: 2rem;
  color: #a442ed;
`;

const Container = styled.main`
  width: 80%;
  margin: 0% 0% 0% 10%;
`;
const PosterSerie = styled.img`
  width: 750px;
  height: 450px;
  border-radius: 3%/6%;
  margin: 2.5rem;
  &:hover {
    border: 4px solid #a442ed;
    cursor: pointer;
    transform: scale(1.01);
    transition-duration: 0.3s;
}
`;
const SeriesDisplay = styled.div`
  display: flex;
  flex-direction: column;
`;
const Li = styled.li`
  list-style: none;
  font-size: 0.9rem;
  color: #fff;
  margin: 0.5rem;
`;
const H2 = styled.div`
    color: #fff;
    font-size: 1.07rem;
`;
const BoxBar = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
 
`;
const SearchBar = styled.input`
    width: 67%;
    height: 1px;
    border-radius: 5%/70%;
    outline: none;
    color: #a442ed;
    padding: 1rem;
    position: relative;
    top: -151px;
    left: 505px;
`;
const Ul = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
 &:hover .info{
    cursor: pointer;
    width: 750px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
      180deg,
      #000000 0%,
      transparent 100%
    );;
    padding: 0.7rem;
    list-style: none;
    border-radius: 3%/6%; 
 }
`;
const SerieBoxInfo = styled.div`
    display: none;
    position: absolute;
    margin-top: 17rem;
`;
class SeriesApi extends Component{

  state = {
    series: [],
    filteredlist: []
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
      filteredlist: posterserie
    })
  }

  handleChange = (event) => {
    const { series } = this.state
    if(event.target.value === ""){
        this.setState({
          filteredlist: series
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
      filteredlist: filterItemConvert
    });
  };
  
render(){
  const { filteredlist } = this.state;
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
        {filteredlist.map((temp, index) => ( 
          <Ul className='item' key={index}> 
            <PosterSerie src={temp.backdrop_path} alt={`poster da serie ${temp.title}`}/>
           <SerieBoxInfo className='info'>
            <Li><H2>{temp.name}</H2></Li>
            <Li>{temp.vote_average}</Li>
            <Li>{temp.overview}</Li>
           </SerieBoxInfo>
          </Ul>
        ))}
        </SeriesDisplay>
        </Container>
    </section>
    )
  }
}

export default SeriesApi;

