import React, { useState } from 'react'
import logo from "../../assets/andela logo.svg"
import styled from "styled-components"

const Header = () => {

  const [scroll, setScroll] = useState<Boolean>(false)
  const onScroll = () => {
    if (window.scrollY >= 70) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  };
  window.addEventListener("scroll", onScroll);

  return (
    <div>
      {scroll ? (
        <Container bg="#262626">
          <Main style={{height:"80px", borderBottom:"none"}}>
            <Logo>
              <Image src={logo} />
              <Text>The justice </Text>
            </Logo>
            <Two>
              <Navs>HOME</Navs>
              <Navs>ABOUT</Navs>
              <Navs>CONTACT</Navs>
              <Navs>PAGES</Navs>
            </Two>
            <Button>Sign-up</Button>
          </Main>
        </Container>
      ) :
        <Container bg="transperent">
          <Main>
            <Logo>
              <Image src={logo} />
              <Text>The justice </Text>
            </Logo>
            <Two>
              <Navs>HOME</Navs>
              <Navs>ABOUT</Navs>
              <Navs>CONTACT</Navs>
              <Navs>PAGES</Navs>
            </Two>
            <Button>Sign-up</Button>
          </Main>
        </Container>
      }

    </div>
  )
}

export default Header

const Container = styled.div<{ bg: string }>`
width: 100%;
height: 90px;
display: flex;
align-items: center;
justify-content: center;
position: fixed;
z-index: 99;
color: white;
background-color: ${({ bg }) => bg};
`;

const Main = styled.div`
width: 95%;
height: 150px;
display: flex;
align-items: center;
justify-content: space-between;
border-bottom:1px solid grey;
`;

const Logo = styled.div`
width: 250px;
height: 100%;
display: flex;
align-content: center;
justify-content: space-between;
`;

const Image = styled.img`
width: 40%;
object-fit: contain;
color: white;
`;

const Text = styled.div`
font-size: 25px;
font-weight: 600;
font-family:geneva;
width: 50%;
color: white;
display: flex;
align-items: center;
`;
const Two = styled.div`
width: 300px;
height: 70px;
display: flex;
align-items: center;
justify-content: space-between;
`;

const Navs = styled.div`
color: white;
font-size: 15px;
font-weight: 600;
font-family:serif;
display: flex;
justify-content: space-between;
transition:all 350ms;

:hover{
color: #ef9709 ;
cursor: pointer;
}
`;

const Button = styled.div`
width: 130px;
height: 50px;
justify-content: center;
align-items: center;
display: flex;
border-radius: 3px;
color: white;
background-color: #ef9709;
`;