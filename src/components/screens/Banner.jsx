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
  font-weight: lighter;
  margin: 18px 0px 40px 0;`
const Heading = styled.h1`
  color: #ffffff;
  font-size: 78px;
  line-height: 6rem;
  margin: 18px 0px 40px 0;
  width: 64%;`
const SubHeadings = styled.h5`
  color: #ffffff;
  font-size: 32px;
  font-weight: lighter;
  margin: 18px 0px 40px 0;`
const ButtonContainer = styled.div`
  padding: 16px 72px;
  background: #ffffff;
  display: inline-block;
  border-radius: 8px;
  cursor: pointer;`
const Button = styled.span`
  font-size: 20px;
  color: #3c4242;
  font-weight: 600;`



export default Banner