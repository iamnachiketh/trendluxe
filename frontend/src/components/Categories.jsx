import React from 'react'
import Styled from 'styled-components'
import { categories } from '../data';
import CategoriesItems from './CategoriesItems';
import { mobile } from "../responsive";

const Container = Styled.div`
    display:flex;
    padding:20px;
    justify-content:space-between;
    ${mobile({
  padding: "0px",
  flexDirection: "column"
})}
`;

function Categories() {
  return (
    <Container>
      {
        categories.map((item) => (
          <CategoriesItems key={item.id} item={item} />
        ))
      }
    </Container>
  )
}

export default Categories
