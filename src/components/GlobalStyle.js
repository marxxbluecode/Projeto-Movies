import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  * {
    margi: 0;
    padding; 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    color: #676e76;
    
  }
  body {
    background-color: #19222b;
  }
`;
// hoover: #a442ed
// without hoover: #29313c
export default GlobalStyle;

