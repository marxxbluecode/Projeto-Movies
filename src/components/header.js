import React, { Component } from "react";
import styled from "styled-components"
import logo from "../images/M.png"
import lupa from "../images/lupa.png"

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
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
`;
const Title = styled.h2`
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
    height:;
`;
const SearchBar = styled.input`
    width: 70%;
    height: 30px;
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

class Header extends Component{

    render(){
        return(
            <>
            <HeaderBody>
                <BoxIcon>
                <Icon src={logo} alt="icon"/>
                <Title>Movies</Title>
                <Title>Series</Title>
                <Title>Library</Title>
                <Title>Watch List</Title>
                </BoxIcon>
                <BoxBar>
                <SearchBar  type='text' placeholder='search here'/> 
                <Btn>A</Btn>
                </BoxBar>
            </HeaderBody>
            </>
        )
    }
}
export default Header