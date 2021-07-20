import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import MoviesApi from "./components/MoviesApi";
import SeriesApi from "./components/SeriesApi";
import ListApi from "./components/ListApi"
import styled from "styled-components"
import logo from "./components/images/M.png"
import lupa from "./components/images/lupa.png"
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




const HeaderBody = styled.div`
    width: 100vw;
    margint-top: 0;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #19222b;
    border-bottom: 0.1rem solid #676e76;
`;
const BoxIcon = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
`;
const Ul = styled.ul`
    display: flex;
`;
const Li = styled.li`
    margin: 0.5rem;
    list-style: none;
    font-size: 1rem;
    color: #676e76;
    &:hover {
        color: #a442ed;
        cursor: pointer;
        transform: scale(1.2);
    }
`;
const BoxBar = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
`;
const Icon = styled.img`
    width: 20%;
`;
const SearchBar = styled.input`
    width: 70%;
    height: 1px;
    border-radius: 5%/70%;
    outline: none;
    color: #a442ed;
    padding: 1rem;
    background-image: url(${lupa});
   
`;
const Btn = styled.button`
    height: 30px;
    width: 30px;
    background-color:#a442ed;
    border-radius: 100%;
`;
const Body = styled.div`
    display: flex;
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
export default function App() {
        return(
            <Router>
              < GlobalStyle/>
            <HeaderBody>
                <BoxIcon>
                <Icon src={logo} alt="icon"/>
                <Ul>
                <Li> <Link to="/"></Link>Home</Li>
                <Li> <Link to="/movies"></Link>Movies</Li>
                <Li> <Link to="/series"></Link>Series</Li>
                <Li> <Link to="/watchlist"></Link>Watch List</Li>
                </Ul>
                </BoxIcon>
                <BoxBar>
                <SearchBar  type='text' placeholder='search here'/> 
                <Btn>A</Btn>
                </BoxBar>
            </HeaderBody>
            <Body>
              <InsideBody>
                <TitleBody>Discover new stories...</TitleBody>
              </InsideBody>
            </Body>

            <Switch>
            <Route exact path="/watchlist"  component={ListApi}>
                <WatchList />
              </Route>


              <Route exact path="/series" component={SeriesApi}>
                <Series />
              </Route>


              <Route exact path="/movies" component={MoviesApi}>
                <Movies />
              </Route>

              
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
            </Router>
        )
    }
function Home() {
  return <h2>Home</h2>;
}
function Movies() {
  return <h2>Movies</h2>;
}
function Series() {
  return <h2>Series</h2>;
}
function WatchList() {
  return <h2>watch list</h2>;
}