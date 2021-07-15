import React, { Component } from "react";
import styled from "styled-components"
import logo from "../images/M.png"
import lupa from "../images/lupa.png"

const Header_body = styled.div`
    width: 100vw;
    margint-top: 0;
    height: 6rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #19222b;
    border-bottom: 0.1rem solid #676e76;
`;
const Box_icon = styled.div`
    width: 35%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    margin-right: 10rem;
`;
const Title = styled.h2`
    font-size: 1.1rem;
    color: #676e76;
`;
const Content = styled.h2`
    &:hover ~ ${Title} {
        color: white;
        cursor: pointer;
}
`;
const Box_bar = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
`;
const Icon = styled.img`
    width: 25%;
    height:;
`;
const Search_bar = styled.input`
    width: 60%;
    height: 40px;
    border-radius:5%/45%;
    outline: none;
    color: #a442ed;
    padding: 1rem;
    background-image: url(${lupa});
   
`;
const Btn = styled.button`
    width:40px;
    height:40px;
    border-radius:40px;
    background-color: #a442ed;
    color: white;
    cursor: pointer;
`
class Header extends Component{

    render(){
        return(
            <Header_body>
                <Box_icon>
                <Icon src={logo} alt="icon"/>
                <Title>Movies</Title>
                <Title>Series</Title>
                <Title>Library</Title>
                <Title>Watch List</Title>
                </Box_icon>
                <Box_bar>
                <Search_bar  type='text' placeholder='search here'/> 
                <Btn type="submit">A</Btn>
                </Box_bar>
            </Header_body>
        )
    }
}
export default Header