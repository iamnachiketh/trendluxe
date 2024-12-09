import React from 'react'
import Styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { mobile } from "../responsive"

const Container = Styled.div`
    height:60px;
    ${mobile({
        height: "50px"
    })}
`

const Wrapper = Styled.div`
    padding:10px 20px;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    ${mobile({
        padding: "10px 0"
    })}
`

const Left = Styled.div`
    flex:1;
    display:flex;
    align-items:center;
`;
const Right = Styled.div`
flex:1;
display:flex;
flex-direction:row;
align-items:center;
justify-content:flex-end;
${mobile({
        justifyContent: "center"
    })}
`
const Center = Styled.div`flex:1`
const Language = Styled.span`
    font-size:14px;
    cursor:pointer;
    ${mobile({
        display: "none"
    })}
`;

const SearchContainer = Styled.div`
    display:flex;
    gap:5px;
    border: 1px solid black;
    padding: 5px;
    margin-left:5px;
`;

const Input = Styled.input`
    border:none;
    outline:none;
    ${mobile({
        width: "50px"
    })}
`
const Logo = Styled.h1`
    font-size:bold;
    text-align:center;
    ${mobile({
        fontSize: "24px"
    })}
`;

const MenuItems = Styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left:25px;
    ${mobile({
        fontSize: "12px",
        marginLeft: "10px",
    })}
`

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));


function NavBar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input type="text" placeholder="Search" />
                        <SearchIcon />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>TrendLuxe</Logo>
                </Center>
                <Right>
                    <MenuItems>REGISTER</MenuItems>
                    <MenuItems>SIGN IN</MenuItems>
                    <MenuItems>
                        <IconButton aria-label="cart">
                            <StyledBadge badgeContent={5} color="secondary">
                                <ShoppingCartIcon />
                            </StyledBadge>
                        </IconButton>
                    </MenuItems>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default NavBar
