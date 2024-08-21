import React from 'react'
import styled from "styled-components";
import Image1 from "../../assets/images/bg-1.jpg";
import Image2 from "../../assets/images/bg-2.jpg";
import Image3 from "../../assets/images/bg-3.jpg";


import Carousel from 'react-bootstrap/Carousel';





function Banner() {

  return (
    
    
    <Carousel interval={3000}  wrap>
    <Carousel.Item>
      <BannerContainer>
        <BannerImage bgimage={Image1}>
          <ContentContainer>
            <SubHeading>T-shirt / Tops</SubHeading>
            <Heading>Summer Value Pack</Heading>
            <SubHeadings>cool / colorful / comfy</SubHeadings>
            <ButtonContainer>
              <Button>Shop Now</Button>
            </ButtonContainer>
          </ContentContainer>
        </BannerImage>
      </BannerContainer>
    </Carousel.Item>

    <Carousel.Item>
      <BannerContainer>
        <BannerImage bgimage={Image2}>
          <ContentContainer>
            <SubHeading>T-shirt / Tops</SubHeading>
            <Heading>Summer Value Pack</Heading>
            <SubHeadings>cool / colorful / comfy</SubHeadings>
            <ButtonContainer>
              <Button>Shop Now</Button>
            </ButtonContainer>
          </ContentContainer>
        </BannerImage>
      </BannerContainer>
    </Carousel.Item>
    <Carousel.Item>
      <BannerContainer>
        <BannerImage bgimage={Image3}>
          <ContentContainer>
            <SubHeading>T-shirt / Tops</SubHeading>
            <Heading>Summer Value Pack</Heading>
            <SubHeadings>cool / colorful / comfy</SubHeadings>
            <ButtonContainer>
              <Button>Shop Now</Button>
            </ButtonContainer>
          </ContentContainer>
        </BannerImage>
      </BannerContainer>
    </Carousel.Item>
    
  </Carousel>
 

  )
}

const BannerContainer =styled.div``
const BannerImage =styled.div`
width: 100%;
  background-image: url(${(props) => props.bgimage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 744px;`

const ContentContainer = styled.div`
  padding: 100px 0;
  width: 40%;
  position: relative;
  left: 11%;
  text-align: left;`
const SubHeading = styled.h5`
  color: #ffffff;
  font-size: 32px;
  font-weight: 500;
  line-height: 37.77px;
  letter-spacing: 0.16px;
  margin: 18px 0px 40px 0;
  @media all and (max-width: 540px) {
    font-size: 15px;
    line-height: 30px;
  }
  @media all and (max-width: 360px) {
    font-size: 12px;
    line-height: 40px;
  }`;
const Heading = styled.h1`
  color: #ffffff;
  font-size: 78px;
  font-weight: 800;
  line-height: 93.62px;
  letter-spacing: 0.31px;
  margin: 18px 0px 40px 0;
  width: 93%;
  @media all and (max-width: 1080px) {
    font-size: 66px;
  }
  @media all and (max-width: 780px) {
    
    font-size: 42px;
    line-height: 65px;
  }
  @media all and (max-width: 540px) {
    font-size: 28px;
    line-height: 45px;
  }
  @media all and (max-width: 360px) {
    font-size: 20px;
    line-height: 40px;
  }
  `;
const SubHeadings = styled.h4`
  color: #ffffff;
  font-size: 32px;
  font-weight: 500;
  line-height: 47.21px;
  letter-spacing: 0.31px;
  margin: 18px 0px 40px 0;
  @media all and (max-width: 780px) {
    font-size: 22px;
  }
  @media all and (max-width: 540px) {
    font-size: 15px;
    line-height: 30px;
  }
  @media all and (max-width: 360px) {
    font-size: 10px;
    line-height: 40px;
  }`;
const ButtonContainer = styled.div`
  padding: 16px 72px;
  background: #ffffff;
  display: inline-block;
  border-radius: 8px;
  cursor: pointer;
  @media all and (max-width: 780px) {
    padding: 8px 17px;
  }`;
const Button = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #3c4242;
  font-weight: 600;
  @media all and (max-width: 780px) {
    font-size: 12px;
  }`;



export default Banner