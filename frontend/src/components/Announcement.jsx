import Styled from "styled-components";

const Container = Styled.div`
    height:30px;
    background-color: teal;
    color:white;
    text-align:center;
    padding-top:3px;
    font-size:14px;
    font-weight:400;
`;


function Announcement() {
  return (
    <Container>
      Super Deal!! Free Shipping on Your Order Above $50
    </Container>
  )
}

export default Announcement
