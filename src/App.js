import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import MoviesApi from "./components/MoviesApi";
import SeriesApi from "./components/SeriesApi";
import WatchList from "./components/WatchList"
import Home from "./components/Home"
import styled from "styled-components"
import logo from "./components/images/M.png"
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
    overflow-x:
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
   list-style: none;

a {
      margin: 0.5rem;
      text-decoration: none;
      font-size: 1.1rem;
      color: #676e76;
      &:hover {
          color: #a442ed;
          cursor: pointer;
      }
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
`;
const Btn = styled.button`
    height: 30px;
    width: 30px;
    background-color:#a442ed;
    border-radius: 100%;
`;

export default function App() {
        return(
            <Router>
              < GlobalStyle/>
            <HeaderBody>
                <BoxIcon>
                <Icon src={logo} alt="icon"/>
                <nav>
                <Ul>
                <Li> 
                  <Link to="/">Home</Link>
                </Li>
                <Li> 
                  <Link to="/movies">Movies</Link>
                </Li>
                <Li> 
                  <Link to="/series">Series</Link>
                </Li>
                <Li> 
                  <Link to="/watchlist">Watch List</Link>
                </Li>
                </Ul>
                </nav>
                </BoxIcon>
                <BoxBar>
                <SearchBar  type='text' placeholder='search here'/> 
                <Btn>A</Btn>
                </BoxBar>
            </HeaderBody>


            <Switch>
            <Route exact path="/watchlist">
                <WatchList />
              </Route>


              <Route exact path="/series">
                <SeriesApi />
              </Route>


              <Route exact path="/movies">
                <MoviesApi />
              </Route>

              
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
            </Router>
        )
    }

