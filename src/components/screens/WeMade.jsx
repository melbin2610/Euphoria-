import React from 'react'
import styled from "styled-components";
import image1 from "../../assets/images/bg-4.jpg";
import image2 from "../../assets/images/bg-5.jpg";

function WeMade() {
  return (
    <>
     <Wrapper>
        <MainContainer>
          <LeftContainer>
            <ContentContainer>
              <Heading>WE MADE YOUR EVERYDAY FASHION BETTER!</Heading>
              <Paragraph>
                In our journey to improve everyday fashion, euphoria presents
                EVERYDAY wear range - Comfortable & Affordable fashion 24/7
              </Paragraph>
              <ButtonContainer>
                <Button>shop Now</Button>
              </ButtonContainer>
            </ContentContainer>
          </LeftContainer>
          <RightContainer></RightContainer>
        </MainContainer>
      </Wrapper>
    </>
  )
}

export default WeMade

const Wrapper = styled.div`
    width: 90%;
    max-width: 1280px;
    margin-inline: auto;`

const MainContainer = styled.div`
display: flex;
padding: 50px 0;
margin-top: 30px;
margin-top: 20px;`
const LeftContainer = styled.div`
width: 50%;
background-image: url(${image1});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
height: 500px;
border-top-left-radius: 12px;
border-bottom-left-radius: 12px;
height: 639px;`
const RightContainer = styled.div`
width: 50%;
background-image: url(${image2});
background-position: top;
background-repeat: no-repeat;
background-size: cover;
height: 500px;
border-top-right-radius: 12px;
border-bottom-right-radius: 12px;
height: 639px;`
const ContentContainer = styled.div`
padding: 100px 85px 0;
text-align: left;`
const Heading = styled.h1`
font-size: 34px;
color: #ffffff;
font-weight: 800;
line-height: 50px;
margin: 70px 0 27px 0;`
const Paragraph = styled.h4`
font-size: 20px;
font-weight: 300;
line-height: 24px;
letter-spacing: 1px;
color: #ffffff;
width: 100%;
line-height: 24px;
margin-bottom: 45px;`
const ButtonContainer = styled.div`
padding: 12px 44px;
border-radius: 8px;
background-color: #ffffff;
display: inline-block;
display: inline-flex;
align-items: center;
cursor: pointer;`
const Button = styled.span`
font-size: 18px;
font-weight: 600px;
line-height: 21.6px;

color: #3c4242;`  