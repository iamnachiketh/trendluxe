import React from 'react'
import Styled from "styled-components";
import NavBar from '../components/NavBar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { Add, Remove } from '@mui/icons-material';
import { mobile } from '../responsive';

const Container = Styled.div``;

const Wrapper = Styled.div`
    padding:20px;
    ${mobile({
        padding:"10px"
    })}
`;

const Title = Styled.h1`
    font-weight:300;
    text-align:center;
`;

const Top = Styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:20px;
`;

const TopButton = Styled.button`
    padding:10px;
    font-weight:600;
    cursor:pointer;
    border:${(props) => props.type === "filled" && "none"};
    background-color:${props => props.type === "filled" ? "black" : "transperent"};
    color:${props => props.type === "filled" && "white"};
    ${mobile({
        marginLeft:"30px"
    })}
`;

const TopTexts = Styled.div`
${mobile({
        display:"none",
    })}
`;

const TopText = Styled.span`
    text-decoration:underline;
    cursor:pointer;
    margin:0 10px;
`;

const Bottom = Styled.div`
    display:flex;
    justify-content:space-between;
    ${mobile({
        flexDirection:"column",
    })}
`;

const Info = Styled.div`
    flex:3;

`;

const Product = Styled.div`
    display:flex;
    justify-content:space-between;
    ${mobile({
        flexDirection:"column",
    })}
`;

const ProductDetail = Styled.div`
    flex:2;
    display:flex;
`;

const Image = Styled.img`
    width:200px;
`;

const Details = Styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
`;

const ProductName = Styled.span``;

const ProductId = Styled.span``;

const ProductColor = Styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props => props.color};
`;

const ProductSize = Styled.span``;

const PriceDetail = Styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;

const ProductAmountContainer = Styled.div`
    display:flex;
    align-items:center;

`;

const ProductAmount = Styled.div`
    font-size:24px;
    margin:5px;
    ${mobile({
        margin:"5px 15px",
    })}
`;

const ProductPrice = Styled.div`
    font-size:30px;
    font-weight:200;
    ${mobile({
        marginBottom:"20px"
    })}
`;

const B = Styled.b`
    font-weight:bold;
`;

const Hr = Styled.hr`
    background-color:#eee;
    border:none;
`;

const Summary = Styled.div`
    flex:3;
    color:black;
    border:1px solid lightgrey;
    border-radius:10px;
    padding:20px;
    width:30%;
    height:50vh;
    margin:30px auto;
    ${mobile({
        width:"80%",
    })}

`;

const SummaryTitle = Styled.h1``;

const SummaryItem = Styled.div`
    margin: 30px 0;
    display:flex;
    justify-content:space-between;
    font-weight:${props=>props.type === "total"&&"900"};
    font-size:${props=>props.type === "total"&&"30px"};
`;

const SummaryItemText = Styled.span``

const SummaryItemPrice = Styled.div``;

const SummaryButton = Styled.button`
    width:100%;
    padding:10px;
    background-color:black;
    color:white;
    font-weight:600;    
`;


function Cart() {
    return (
        <Container>
            <Announcement />
            <NavBar />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishist(0)</TopText>
                    </TopTexts>
                    <TopButton type='filled'>CHECKOUT NOW</TopButton>
                </Top>
                <Bottom></Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://i.pinimg.com/736x/ea/03/51/ea035197b8f8a789a34ab0b43c618de4.jpg"/>
                            <Details>
                                <ProductName><B>Product:</B>JESSE THUNDER SHOES</ProductName>
                                <ProductId><B>ID:</B>598764672345</ProductId>
                                <ProductColor color='darkblue'/>
                                <ProductSize><B>Size:</B> 37.5 </ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Remove/>
                                <ProductAmount>2</ProductAmount>
                                <Add/>
                            </ProductAmountContainer>
                            <ProductPrice>$30.56</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr></Hr>
                    <Product>
                        <ProductDetail>
                            <Image src="https://sailormoon.b-cdn.net/wp-content/uploads/2023/08/48487305_0-4.jpg"/>
                            <Details>
                                <ProductName><B>Product:</B>HAKURA T-SHIRT</ProductName>
                                <ProductId><B>ID:</B>674324577</ProductId>
                                <ProductColor color='black'/>
                                <ProductSize><B>Size:</B> M </ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Remove/>
                                <ProductAmount>2</ProductAmount>
                                <Add/>
                            </ProductAmountContainer>
                            <ProductPrice>$20.99</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Sub Total</SummaryItemText>
                        <SummaryItemPrice>$ 50.55</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 5.89</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -5.89</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$ 50.55</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryButton>CHECKOUT NOW</SummaryButton>
                </Summary>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart
