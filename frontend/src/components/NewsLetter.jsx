import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import Styled from "styled-components";
import { mobile } from '../responsive';

const Container = Styled.h1`
    height:60vh;
    background-color:#fcf5f5;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;
const Title = Styled.div`
    font-size:70px;
    margin-bottom:20px;
    font-weight:bolder;
    ${mobile({
        textAlign: "center",
        fontSize:"40px"
    })}
`;

const InputContainer = Styled.div`
    width:50%;
    height:40px;
    background-color:white;
    display:flex;
    justify-content:space-between;
    border:1px solid lightgrey;
    ${mobile({
        width:"80%"
    })}
`;

const Input = Styled.input`
    border:none;
    flex:8;
    padding-left:20px;
`;

const Button = Styled.button`
    flex:1;
    border:none;
    background-color:teal;
    color:white;
`;

const Desc = Styled.div`
    font-size:24px;
    font-weight:300;
    margin-bottom:20px;
    ${mobile({
        textAlign: "center",
        fontSize:"22px"
    })}
`;

function NewsLetter() {
    return (
        <Container>
            <Title>NEWSLETTER</Title>
            <Desc>Get timely updates from your favorite products</Desc>
            <InputContainer>
                <Input type='text' placeholder='Your Email..' />
                <Button><SendIcon /></Button>
            </InputContainer>
        </Container>
    )
}

export default NewsLetter
