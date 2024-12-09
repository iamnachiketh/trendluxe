import React from 'react'
import Styled from "styled-components";
import { mobile } from '../responsive';


const Container = Styled.div`
    width:100vw;
    height:100vh;
    background:linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)), 
        url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
        center;
        display:flex;
        justify-content:center;
        align-items:center;

`;

const Wrapper = Styled.div`
    padding:20px;
    width:40%;
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
    flex-wrap:wrap;
`;

const Input = Styled.input`
    flex:1;
    min-width:40%;
    margin: 20px 10px 0 0;
    padding:15px;
`;

const Agreement = Styled.div`
    margin:20px 0;
`;

const CheckInput = Styled.input`
    margin:0 5px;
`;

const AgreementStatment = Styled.span`
    font-size:12px;
    margin:0;
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
`;


function Register() {
    return (
        <Container>
            <Wrapper>
                <Title>Register</Title>
                <Form>
                    <Input placeholder="first name" />
                    <Input placeholder="last name" />
                    <Input placeholder="user name" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />
                    <Agreement>
                        <CheckInput type="checkbox" />
                        <AgreementStatment>
                            By creating an account, I consent to the processing of my personal
                            data in accordance with the <b>PRIVACY POLICY</b>
                        </AgreementStatment>
                    </Agreement>
                    <Button>Register</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
