import React from 'react'
import Styled from "styled-components";
import Announcement from '../components/Announcement';
import NewsLetter from '../components/NewsLetter';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Add, Height, Remove, WidthFull } from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { mobile } from '../responsive';



const Container = Styled.div`

`;

const Wrapper = Styled.div`
    padding:50px;
    display:flex;
    ${mobile({
        padding:"10px",
        flexDirection:"column",
    })}
`;

const ImageContainer = Styled.div`
    flex:1;
`;

const Image = Styled.img`
    width:100%;
    height:90vh;
    object-fit:cover;
    ${mobile({
        height:"40vh",
    })}
`;

const InfoContainer = Styled.div`
    flex:1;
    padding:0 50px;
    ${mobile({
        padding:"10px",
    })}
`;

const Title = Styled.h1`
    font-weight:200;
    `;

const Desc = Styled.div`
    margin:20px 0;
`;

const Price = Styled.div`
    font-weight:100;
    font-size:40px;
`;

const FilterContainer = Styled.div`
    display:flex;
    justify-content:space-between;
    margin:30px 0;
    width:50%;
    ${mobile({
        width:"100%",
    })}
`;

const Filter = Styled.div`
    display:flex;
    align-items:center;
`;

const FilterTitle = Styled.span`
    font-size:20px;
    font-weight:200;
`;

const FilterColor = Styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props => props.color};
    margin:0 5px;
`;

const FilterSize = Styled.select`
    margin-left:10px;
    padding:5px;
`;

const FilterSizeOption = Styled.option`
    padding:10px;
`;

const AddContainer = Styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:50%;
    ${mobile({
        width:"100%",
    })}
`;

const AmountContainer = Styled.div`
    display:flex;
    align-items:center;
    font-weight:700;
    margin-right:50px;
`;

const Amount = Styled.span`
    width:30px;
    height:30px;
    border-radius:10px;
    border:1px solid teal;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0 5px;
`;

const Button = Styled.button`
    padding:15px;
    border:2px solid teal;
    background-color:white;
    cursor:pointer;
    color:black;
    font-weight:900;
    width:60px;
    height:50px;
    border-radius:5px;
    transition:all 0.5s ease;
    &:hover{
        color:white;
        background-color:teal;
        transform:scaleX(1.1);
    }
`;

function Product() {
    return (
        <Container>
            <Announcement />
            <NavBar />
            <Wrapper>
                <ImageContainer>
                    <Image src="https://m.media-amazon.com/images/I/41c7zQe6G+L._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg" />
                </ImageContainer>
                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Unde explicabo exercitationem laudantium dolorum quaerat itaque est consequatur. Recusandae, quod.
                        Ut, repudiandae dolorem. Repellendus ipsum nemo aperiam, blanditiis incidunt totam ea.</Desc>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="grey" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button><ShoppingCartIcon/></Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <NewsLetter />
            <Footer />
        </Container>
    )
}

export default Product
