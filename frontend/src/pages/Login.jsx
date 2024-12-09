import React from 'react'
import Styled from "styled-components";
import { mobile } from '../responsive';


const Container = Styled.div`
    width:100vw;
    height:100vh;
    background:linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)), 
        url("https://www.shutterstock.com/image-photo/brunette-asian-woman-red-fashionable-260nw-2235546605.jpg")
        center;
        display:flex;
        justify-content:center;
        align-items:center;
        background-size:cover;
`;

const Wrapper = Styled.div`
    padding:20px;
    width:30%;
    background-color:white;
    ${mobile({
        width:"75%"
    })}
`;

const Title = Styled.h1`
font-size:24px;
font-weight:400;
`;

const Form = Styled.form`
    display:flex;
    flex-direction:column;
`;

const Input = Styled.input`
    flex:1;
    min-width:40%;
    margin: 10px 0;
    padding:15px;
`;

const Button = Styled.button`
    width:40%;
    padding:15px 20px;
    background-color:teal;
    border:none;
    font-weight:600;
    font-size:15px;
    color:white;
    cursor:pointer;
    margin-bottom:10px;
`;


const Link = Styled.a`
  margin:5px 0px;
  font-size:10px;
  text-decoration:underline;
  color:blue;

`;


function Login() {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
