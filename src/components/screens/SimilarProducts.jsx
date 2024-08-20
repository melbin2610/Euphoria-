import React from 'react'
import styled from "styled-components";
import Image1 from "../../assets/images/img-20.jpg"
import Image2 from "../../assets/images/img-22.jpg"
import Image3 from "../../assets/images/img-23.jpg"
import Image4 from "../../assets/images/img-24.jpg"
function SimilarProducts() {
  return (
    <Wrapper>
      <LimeLightContainer>
        <Container>
          <BlueBlock></BlueBlock>
          <Heading>Similar Products</Heading>
        </Container>
        <CategoriesContainer>
        <CategoriesItems>
        <WishlistContainer>
                  <WishlistImg
                    src={
                      require("../../assets/images/wishlist.svg")
                        .default
                    }
                  />
                </WishlistContainer>
            <CategoriesImg>
                <img src={Image1} alt="image" />  
            </CategoriesImg>
            <Contents>
            <Left>
            <CategoriesItemsName>Black Sweatshirt with ....</CategoriesItemsName>
            <Text>Jhanvi’s  Brand</Text>
            </Left>
            <PriceContainer>
                    <Price>$13.00</Price>
                  </PriceContainer>
            </Contents>      
        </CategoriesItems>
        <CategoriesItems>
        <WishlistContainer>
                  <WishlistImg
                    src={
                      require("../../assets/images/wishlist.svg")
                        .default
                    }
                  />
                </WishlistContainer>
            <CategoriesImg>
                <img src={Image2} alt="image" />  
            </CategoriesImg>
            <Contents>
            <Left>
            <CategoriesItemsName>Black Sweatshirt with ....</CategoriesItemsName>
            <Text>Jhanvi’s  Brand</Text>
            </Left>
            <PriceContainer>
                    <Price>$127.00</Price>
                  </PriceContainer>
            </Contents>      
        </CategoriesItems>
        <CategoriesItems>
        <WishlistContainer>
                  <WishlistImg
                    src={
                      require("../../assets/images/wishlist.svg")
                        .default
                    }
                  />
                </WishlistContainer>
            <CategoriesImg>
                <img src={Image3} alt="image" />  
            </CategoriesImg>
            <Contents>
            <Left>
            <CategoriesItemsName>Black Sweatshirt with ....</CategoriesItemsName>
            <Text>Jhanvi’s  Brand</Text>
            </Left>
            <PriceContainer>
                    <Price>$133.00</Price>
                  </PriceContainer>
            </Contents>      
        </CategoriesItems>
        <CategoriesItems>
        <WishlistContainer>
                  <WishlistImg
                    src={
                      require("../../assets/images/wishlist.svg")
                        .default
                    }
                  />
                </WishlistContainer>
            <CategoriesImg>
                <img src={Image4} alt="image" />  
            </CategoriesImg>
            <Contents>
            <Left>
            <CategoriesItemsName>Black Sweatshirt with ....</CategoriesItemsName>
            <Text>Jhanvi’s  Brand</Text>
            </Left>
            <PriceContainer>
                    <Price>$79.00</Price>
                  </PriceContainer>
            </Contents>      
        </CategoriesItems>
        </CategoriesContainer>  
      </LimeLightContainer>
   </Wrapper>
  )
}
const Wrapper = styled.div`
    width: 90%;
    max-width: 1280px;
    margin-inline: auto;`
const LimeLightContainer = styled.div``
const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;`
const  BlueBlock= styled.div`
background-color:#8A33FD;
width:6px;
height:30px;
border-radius: 10px;
line-height: 33.5px;
`    
const  Heading= styled.h2`
    color:#3C4242;
    font-size : 34px;
    font-weight:600;`
const CategoriesContainer=styled.div`
    display: flex;
    justify-content: space-between;
    padding:50px;
    max-width:1280px;`    
const  CategoriesItems= styled.div`
    position: relative;
    cursor: pointer;
    width: 270px;
    height: 451px;`
const WishlistContainer = styled.div`
position: absolute;
width: 27px;
background-color: #ffffff;
border-radius: 50%;
padding: 8px 8px;
top: 26px;
right: 23px;`
const WishlistImg = styled.img`
display: block;
width: 100%;
`;    
const CategoriesImg= styled.div`
    display: block;
    width:100%;
` 
const Contents=styled.div`
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-between;`
const Left =styled.div``
const CategoriesItemsName= styled.p`
    font-size: 16px;
    font-weight: 600;
    color: #2a2f2f;
    margin: 0;
    margin-bottom: 3px;
    display:block;
    margin-top:20px;`
const Text = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: #7f7f7f;
    margin: 0;
`
const PriceContainer= styled.div`
    background-color: #F6F6F6;
    width: 83px;
    height:37px;`
const Price= styled.h5`
    text-align: center;
    font-size: 14px;
    color: #3C4242;
    font-weight: 700;
    line-height: 16.8px;
    margin-top: 10px;
`     

export default SimilarProducts