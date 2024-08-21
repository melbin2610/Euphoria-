import React from 'react'
import styled from 'styled-components';
import Image2 from "../../assets/images/bg-2.jpg";
import Image3 from "../../assets/images/bg-3.jpg";

function Deals() {
  return (
    <Wrapper>
        <DealsContainer >
        <DealsLeft bgimage={Image2}>
            <ItemContainer>
              <Text>Low price</Text>
              <Heading>High Coziness</Heading>
              <Offer>UPTO 50% OFF</Offer>
              <Explore>Explore Items</Explore>
            </ItemContainer>
        </DealsLeft>
        <DealsRight bgimage={Image3}>
        <ItemContainer>
              <Text>Beyoung Presents</Text>
              <Heading2>Breezy Summer <br/> Style</Heading2>
              <Offer>UPTO 50% OFF</Offer>
              <Explore>Explore Items</Explore>
            </ItemContainer>
        </DealsRight>
    </DealsContainer>
    </Wrapper>
    
  )
}

const Wrapper = styled.div`
    width: 90%;
    max-width: 1280px;
    margin-inline: auto;`
const DealsContainer = styled.div`
  height: 455px;
  display: flex;
  justify-content: space-between;
  padding: 60px 0px;
  margin-top: 50px;
  @media (max-width: 480px) {
    padding: 30px 0;
  }`;
const DealsLeft = styled.div`
  background-image: url(${(props) => props.bgimage});

    width: 49%;
    background-repeat: no-repeat;
    background-size: cover;
    background-size: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    text-align: left;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 12px;
  
  `

const ItemContainer = styled.div`
  padding: 0 30px;
  margin-top: 40px;`
  const Text = styled.h6`
  font-weight: 800;
  line-height: 30.07px;
  letter-spacing: 0.25px;
  font-size: 18px;
  color: #ffffff;
  margin: 29px 0 0 0;`

  
const Heading = styled.h2`
font-size: 34px;
font-weight: 800;
line-height: 45.1px;
color: #ffffff;
width: 70%;
margin: 15px 0 15px 0;
line-height: 45.1px;`

const Offer = styled.h3`
font-weight: 500;
line-height: 25.06px;
letter-spacing: 0.25px;
color: #ffffff;
font-size: 16px;`


const DealsRight = styled.div`
    background-image: url(${(props) => props.bgimage});
    width: 49%;
    background-repeat: no-repeat;
    background-size: cover;
    background-size: 788px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    text-align: left;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    
  `

const Explore = styled.h6`
  text-decoration: underline;
  color: #ffffff;
  font-size: 20px;
  line-height: 30.13px;
  margin: 20px 0 0 0;
  text-underline-offset: 5px;
  cursor: pointer;`

const Heading2 = styled.h3`
font-family: "poppinsbold";
font-size: 40px;
color: #ffffff;
width: 70%;
margin: 15px 0 15px 0;
line-height: 45.1px;`  


export default Deals