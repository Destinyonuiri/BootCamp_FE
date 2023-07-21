import React from 'react'
import styled from 'styled-components';
import pics from "../assets/OpenBeamBalance.jpg"
import header from "../components/Block/Header"

const HomeScreen = () => {
  return (
    <div>
      <Container>
      <Opa>
        <Main>
          <Bigtext>The international Law Firm For Your Business</Bigtext>
          <Line></Line>
          <Small>Where the constitution is been broken down into a little <br /> child understanding</Small>
          <Button>Read More </Button>
        </Main>
      </Opa>
      <Lines>
            <Div1>g</Div1>
            <Div2>df</Div2>
            <Div3>d</Div3>
          </Lines>
      </Container>
    </div>
  )
}

export default HomeScreen

const Lines = styled.div`
height: 30px;
width: 30px;
background-color: red;
`;

const Div1 = styled.div`
height: 3px;
width:30px ;
transition: all 350ms;
:hover{
  color: #ef9709;
}
`;

const Div2 = styled.div``;

const Div3 = styled.div``;

const Opa = styled.div`
width: 100%;
height: 700px;
background-color: black;
opacity: 0.9;
align-items: center;
justify-content: center;
display: flex;
`;
const Container = styled.div`
width: 100%;
height: 100vh;
position: relative;
background-image: url(${pics});
background-repeat: no-repeat;
background-position: center;
background-size: cover;

`;

const Main = styled.div`
position: absolute;
padding: 90px 0;
color: white;
z-index: 2;
top: 0;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;

`;

const Bigtext = styled.div`
font-size: 45px;
font-weight: 600;
margin-top: 200px;
font-family: arial narrow;
`;

const Line = styled.div`
height: 4px;
width: 100px;
background-color: #ef9709;
margin-top: 50px;
border-radius: 2;
`;

const Small = styled.div`
margin-top:20px;
text-align: center;
font-size: 22px;
font-weight: 300;
color: grey;
`;

const Button = styled.div`
width: 140px;
height: 50px;
justify-content: center;
align-items: center;
display: flex;
color: white;
margin-top: 20px;
border-radius: 3px;
background-color: #ef9709;
`;