import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Styled from "styled-components";

const Container = Styled.div`
    flex:1;
    margin:5px;
    min-width:280px;
    height:350px;
    display:flex;
    align-items:center;
    background-color:#f5fbfd;
    position:relative;
`;

const Image = Styled.img`
    height:75%;
`;
const Info = Styled.div`
    opacity:0;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.2);
    z-index:3;
    display:flex;
    align-items:center;
    justify-content:center;
    transition:all 0.5s ease;
    cursor:pointer;

    &:hover{
      opacity:1;
    }
`;
const Icon = Styled.div`
    width:40px;
    height:40px;
    background-color:white;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:10px;
    padding:2px;
    transform:all 1.5s ease;&:hover{
      transform:scale(1.1);
    }
`;

function Product(props) {
  return (
    <Container>
      <Image src={props.item.img}/>
      <Info>
        <Icon>
            <ShoppingCartIcon/>
        </Icon>
        <Icon>
            <SearchIcon/>
        </Icon>
        <Icon>
            <FavoriteBorderIcon/>
        </Icon>
      </Info>
    </Container>
  )
}

export default Product
