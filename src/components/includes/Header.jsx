import React from 'react'
import styled from 'styled-components';

function Header() {
  return (
    <Wrapper>
      <HeaderContainer>
        <EuphoriaLogo>
            <Logo
            src= {require("../../assets/images/Logo.svg").default}alt ="Euphoria_Logo"
            />
        </EuphoriaLogo>
        <ItemsDetails>
            <Items>Shop</Items>
            <Items>Men</Items>
            <Items>Women</Items>
            <Items>Combos</Items>
            <Items>Joggers</Items>
        </ItemsDetails>
        <RightSection>
        <Form>
              <SearchContainer>
                <SearchImgContainer>
                  <SearchImage
                    src={require("../../assets/images/search.svg").default}
                  />
                </SearchImgContainer>
                <StyledInput type="text" placeholder="Search" />
              </SearchContainer>
        </Form>

        <Frame>
              <ImageContainer>
                <Wishlist
                  src={require("../../assets/images/wishlist.svg").default}
                />
              </ImageContainer>
              <ImageContainer>
                <Account
                  src={require("../../assets/images/account.svg").default}
                />
              </ImageContainer>
              <ImageContainer>
                <Cart src={require("../../assets/images/cart.svg").default} />
              </ImageContainer>
        </Frame>
        </RightSection>

        
        </HeaderContainer>  
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 90%;
  
    /* margin-inline: auto; */
    margin: 0 auto;
    `
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 18px 0;
  justify-content: space-between;`
const EuphoriaLogo = styled.div`
  width: 91px;
  cursor: pointer;`
const Logo = styled.img`
  display: block;
  width: 100%;`    
const  ItemsDetails = styled.ul`
 
  display: flex;
  align-items: center;
  gap: 48px;`
const  Items = styled.li`
 font-size: 16px;

 color: #807d7e;
  cursor: pointer; 
  &:hover {
    color: black;
  }
   `

const  RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 102px;`
const  Form = styled.div`
  display: flex;`
const  SearchContainer = styled.div`
  background-color: #F6F6F6;
  display: flex;
  align-items: center;
  padding: 12px 20px;
  gap: 12px;`
const SearchImgContainer =styled.div``
const  SearchImage = styled.img`
display: block;
  width: 100%;`
const  StyledInput = styled.input`
background-color: #F6F6F6;
  border: none;
  padding: 6px 5px;
  font-size: 14px;
  color: #807d7e;`
// frame  
const  Frame = styled.div`
  display:flex;
  align-items: center;
  gap: 22px;
  `
const  ImageContainer = styled.div`
  cursor: pointer;
  width: 18px;
  background-color: #F6F6F6;`
const  Wishlist = styled.img`
  display:block;
  width:100%;`
const  Account = styled.img`
  display:block;
  width:100%;`
const  Cart = styled.img`
  display:block;
  width:100%;`
    


export default Header