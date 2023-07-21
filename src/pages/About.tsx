import React from 'react'
import styled from 'styled-components';

const About = () => {
  return (
    <div>
      <Container>
        <Main>
          <Left>
            <Big>Welcome to the Justice</Big>
            <SubText>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</SubText>
            <SmallText>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet</SmallText>

            <Sign>
              <TExt>
                <Big>Destiny Onuiri</Big>
                <Small>Founder of the justice</Small>
              </TExt>
              <Image/>
            </Sign>
          </Left>
          <Right></Right>
        </Main>
      </Container>
    </div>
  )
}

export default About

const Container = styled .div`
width:100%;
height:800px;
justify-content:center;
align-items :center;
display-flex;

`;

const Main = styled .div``;
const Left = styled .div``;
const BigText = styled .div``;
const SmallText = styled .div``;
const  SubText = styled .div``;
const Sign = styled .div``;
const TExt = styled .div``;
const Big = styled .div``;
const Small = styled .div``;
const Image = styled .div``;
const Right = styled .div``;