import React from 'react'
import Styled from "styled-components";
import NavBar from '../components/NavBar';
import Announcement from '../components/Announcement';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import Products from '../components/Products';
import { mobile } from '../responsive';

const Container = Styled.div``;
const Title = Styled.div`
        font-size: 30px;
    font-weight:600;
    margin:20px
`;
const FilterContainer = Styled.div`
    display:flex;
    justify-content:space-between;
    ${mobile({
        //margin:"0 20px",
        flexDirection:"column",
    })}
    `;
const Filter = Styled.div`
    margin:20px;
`;

const FilterText = Styled.span`
    font-size:20px;
    font-weight:600;
    margin-right:20px;
`;

const Select = Styled.select`
    padding:5px;
    margin-right:20px;
`;

const Option = Styled.option``;

function ProductsPage() {
    return (
        <Container>
            <Announcement />
            <NavBar />
            <Title>Products</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                    <Option disabled selected>Color</Option>    
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select>
                    <Option disabled selected>Size</Option>    
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select>
                    <Option selected>Newest</Option>   
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option> 
                    </Select>
                </Filter>
            </FilterContainer>
            <Products/>
            <NewsLetter/>
            <Footer/>
        </Container>
    )
}

export default ProductsPage;
