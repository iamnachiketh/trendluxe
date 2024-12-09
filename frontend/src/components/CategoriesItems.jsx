import React from 'react'
import Styled from "styled-components";
import { mobile } from '../responsive';

const Container = Styled.div`
    flex:1;
    margin:3px;
    height:70vh;
    position:relative;
`;
const Image = Styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    ${mobile({
        height: "30vh"
    })}
`;
const Info = Styled.div`
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`;
const Title = Styled.h1`
    margin-bottom:20px;
    color:white;
    font-weight:600;
`;
const Button = Styled.button`
    color:grey;
    background-color:white;
    padding:15px;
    cursor:pointer;
    font-weight:bold;
`;


function CategoriesItems(props) {
  return (
    <Container>
        <Image src={props.item.img}/>
        <Info>
            <Title>{props.item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoriesItems
