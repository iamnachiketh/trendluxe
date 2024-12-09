import React from 'react'
import Styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MapIcon from '@mui/icons-material/Map';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { mobile } from '../responsive';

const Container = Styled.div`
    display:flex;
    ${mobile({
        flexDirection:"column"
    })}
`;
const Left = Styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`;

const Logo = Styled.h1`
    font-weight:600;
`;

const Desc = Styled.p`
    margin:20px 0px;
`;

const SocialContainer = Styled.div`
    display:flex;
    flex-direction:row;
`;

const SocialIcon = Styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    color:white;
    background-color: #${(props) => props.color};
    display:flex;
    justify-content:center;
    align-items:center;
    margin-right:20px;
`;


const Center = Styled.div`
flex:1;
padding:20px;
${mobile({
        display:"none"
    })}
`;


const Title = Styled.h3`
     margin-bottom: 30px;
    font-weight:700;
`;

const List = Styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`;

const ListItem = Styled.li`
    width:50%;
    margin-bottom:10px;
`;

const Right = Styled.div`
flex:1;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
${mobile({
        backgroundColor:"lightgrey"
    })}
`;

const ContactItem = Styled.div`
margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

function Footer() {
    return (
        <Container>
            <Left>
                <Logo>TrendLuxe</Logo>
                <Desc>
                    About Trendlux
                    Discover the latest trends in fashion at Trendlux.
                    Stay chic, stylish, and ahead of the curve with our curated collections.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <FacebookIcon />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <XIcon />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <PinterestIcon />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <MapIcon style={{marginRight:"5px"}}/>  622 Dixie Path , South Tobinchester 98336
                </ContactItem>
                <ContactItem>
                    <PhoneIcon style={{marginRight:"5px"}}/> +1 234 56 78
                </ContactItem>
                <ContactItem>
                    <AlternateEmailIcon style={{marginRight:"5px"}}/> contact@trend.lux
                </ContactItem>
            </Right>
        </Container>
    )
}

export default Footer
