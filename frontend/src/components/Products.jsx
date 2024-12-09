import React from 'react'
import Styled from "styled-components"
import Product from "./Product";
import {popularProducts} from "../data";

const Container = Styled.div`
    padding:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
`;

function Products() {
  return (
    <Container>
      {
        popularProducts.map((item)=>(
            <Product key={item.id} item={item}/>
        ))
      }
    </Container>
  )
}

export default Products
