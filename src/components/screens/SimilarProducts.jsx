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
                <img src={Image1} alt="image" style={{ display: 'block', width: '100%' }} />  
            </CategoriesImg>
            <Contents>
            <Left>
            <CategoriesItemsName>White T-Shirt</CategoriesItemsName>
            <Text>Priya’s  Brand</Text>
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
                    } style={{ display: 'block', width: '100%' }}
                  />
                </WishlistContainer>
            <CategoriesImg>
                <img src={Image2} alt="image" style={{ display: 'block', width: '100%' }} />  
            </CategoriesImg>
            <Contents>
            <Left>
            <CategoriesItemsName>Dark Green Sweatshirt....</CategoriesItemsName>
            <Text>Roboto’s</Text>
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
                <img src={Image3} alt="image" style={{ display: 'block', width: '100%' }}/>  
            </CategoriesImg>
            <Contents>
            <Left>
            <CategoriesItemsName>Levender Sweatshirt ....</CategoriesItemsName>
            <Text>Jhanvi’s</Text>
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
                <img src={Image4} alt="image"  style={{ display: 'block', width: '100%' }}/>  
            </CategoriesImg>
            <Contents>
            <Left>
            <CategoriesItemsName>Urban jacket with white</CategoriesItemsName>
            <Text>Sagar’s  Brand</Text>
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
    font-size : 28px;
    line-height: 33.5px;
    letter-spacing: 0.32px;
    font-weight:600;
    @media (max-width: 480px) {
   font-size: 24px;
}`
const CategoriesContainer=styled.div`
    display: flex;
    justify-content: space-between;
    padding:50px;
    max-width:1280px;
    @media all and (max-width: 1400px) {
      padding: 20px 0px;
    
  
  }
    @media all and (max-width: 1280px) {
      padding:5px;
      flex-wrap: wrap;
    width: 93%;
    margin-top: 20px;
}
@media all and (max-width: 1080px) {

    width: 100%;

}
@media all and (max-width: 980px) {

  flex-wrap: wrap;
    width: 79%;
    margin: 56px auto;


}
@media all and (max-width: 860px) {

  flex-wrap: wrap;
  width: 83%;
    margin: 56px auto;



}
@media all and (max-width: 768px) {

  width: 100%;




}
@media all and (max-width: 680px) {

  width: 58%;
  margin: 51px auto;




}    

@media all and (max-width: 540px) {

width: 90%;
margin: 51px auto;




} 


    
    
    `;    
const  CategoriesItems= styled.div`
    position: relative;
    cursor: pointer;
    width: 270px;
    height: 451px;
    &:focus,
  &:hover {
    fill: #797979; // Changes the color on hover
    transform: scale(1.1);
    transition: transform 0.2s ease-in-out, fill 0.2s ease-in-out;
  }`
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
    line-height: 19.2px;
    color:#3C4242;
    margin: 0;
    margin-bottom: 3px;
    display:block;
    margin-top:20px;`
const Text = styled.p`
    font-size: 14px;
    font-weight: 500;
    line-height: 16.8px;
    color: #807D7E;
    margin: 0;
`
const PriceContainer= styled.div`
    background-color: #F6F6F6;
    margin-top: 22px  ;
    border-radius: 8px;
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