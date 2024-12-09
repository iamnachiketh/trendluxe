import React, { useState } from 'react'
import Styled from "styled-components";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { silderItemList } from "../data.js";
import {mobile} from "../responsive.js";

const Container = Styled.div`
    width:100%
    height:100vh;
    display:flex;
    position:relative;
    overflow:hidden;
    ${mobile({
        display: "none"
    })}
`;

const Arrow = Styled.div`
    width:50px;
    height:50px;
    background-color:#f2feff;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    top:200px;
    bottom:0;
    left:${props => props.direction === "left" && "10px"};
    right:${props => props.direction === "right" && "10px"};
    z-index:5;
    cursor:pointer;
    opacity:0.5;
`;

const Wrapper = Styled.div`
  height:100%;
  display:flex;
  transition:all 1.5s ease;
  transform:translateX(${props => props.slideIndex * -100}vw);
`;

const Slide = Styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
background-color:${props => props.bg};
`;

const ImgContainer = Styled.div`
  height:100%
  flex:1;
`;
const InfoContainer = Styled.div`
  flex:1;
  margin-left:-300px;
  margin-right:none;
`;

const Image = Styled.img`
  height:80%;
  width:55%;
`;

const Title = Styled.h1`
  font-size:60px;
  font-weight:bolder;
`;

const Desc = Styled.p`
  margin:50px 0;
  font-size:20px;
  letter-spacing:5px;
  font-weight:500;
`;

const Button = Styled.button`
  padding:10px;
  cursor:pointer;
  font-size:20px;
  background-size:transparent;
  border:1px solid black;
`;

function Slider() {

  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
    } else {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
    }
  }

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {
          silderItemList.map(item => (
            <Slide bg={item.bg} key={item.id}>
              <ImgContainer>
                <Image src={item.img} />
              </ImgContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>SHOP NOW</Button>
              </InfoContainer>
            </Slide>
          ))};
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightIcon />
      </Arrow>
    </Container>
  )
}

export default Slider
