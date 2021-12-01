import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components"


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
    overflow-x: hidden;
  }
`;
const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: #19222b;
`;
const InsideBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height:80%;
    background: linear-gradient(
      90deg,
      rgba(93, 12, 255, 1) 0%,
      rgb(180, 92, 235) 100%
    );;
    border-radius: 3%/6%;   
`;
const TitleBody = styled.h2`
      Font-size: 3rem;
      color:#fff;
`;
const Copyright = styled.p`
    font-size:1 rem;
    font-family:  ;
    color: #28313c;
    margin-top: 2rem;
`;
export default function App() {
    return(
        <div>
            <GlobalStyle />
             <Body>
              <InsideBody>
                <TitleBody>Discover new stories...</TitleBody>
              </InsideBody>
              <Copyright>Marxflix&copy;</Copyright>
            </Body>
        </div>
    )
}

