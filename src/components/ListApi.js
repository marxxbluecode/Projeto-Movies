import React, {Component} from 'react'
import styled from 'styled-components'
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

class WatchList extends Component{

render(){
  return(
    <section>
     <GlobalStyle />
     <Title>Oi</Title>
    </section>
    )
  }
}

export default WatchList;

