import React from 'react'
import styled from "styled-components";
import Image1 from "../../assets/images/img-5.jpg"

function Men() {
  return (
    <Wrapper>
        <MenContainer>
        <SubContainer>
            <BlueBlock></BlueBlock>
            <Heading>Categories For Men</Heading>
        </SubContainer>
        <CategoriesContainer>
        <CategoriesItems>
            <CategoriesImg>
                <img src={Image1} alt="image" />  
            </CategoriesImg>
            <Contents>
            <Left>
            <CategoriesItemsName>Shirts</CategoriesItemsName>
            <Text>Explore Now!</Text>
            </Left>
            <ArrowContainer>
                    <Arrow
                      src={
                        require("../../assets/images/arrow-right.svg")
                          .default
                      }
                    />
                  </ArrowContainer>
            </Contents>      
        </CategoriesItems>
        <CategoriesItems>
            <CategoriesImg>
                <img src={Image1} alt="image" />  
            </CategoriesImg>
            <Contents>
            <Left>
            <CategoriesItemsName>Shirts</CategoriesItemsName>
            <Text>Explore Now!</Text>
            </Left>
            <ArrowContainer>
                    <Arrow
                      src={
                        require("../../assets/images/arrow-right.svg")
                          .default
                      }
                    />
                  </ArrowContainer>
            </Contents>      
        </CategoriesItems>
        <CategoriesItems>
            <CategoriesImg>
                <img src={Image1} alt="image" />  
            </CategoriesImg>
            <Contents>
            <Left>
            <CategoriesItemsName>Shirts</CategoriesItemsName>
            <Text>Explore Now!</Text>
            </Left>
            <ArrowContainer>
                    <Arrow
                      src={
                        require("../../assets/images/arrow-right.svg")
                          .default
                      }
                    />
                  </ArrowContainer>
            </Contents>      
        </CategoriesItems>
        <CategoriesItems>
            <CategoriesImg>
                <img src={Image1} alt="image" />  
            </CategoriesImg>
            <Contents>
            <Left>
            <CategoriesItemsName>Shirts</CategoriesItemsName>
            <Text>Explore Now!</Text>
            </Left>
            <ArrowContainer>
                    <Arrow
                      src={
                        require("../../assets/images/arrow-right.svg")
                          .default
                      }
                    />
                  </ArrowContainer>
            </Contents>      
        </CategoriesItems>
        </CategoriesContainer>

        <CategoriesContainer>
        <CategoriesItems>
            <CategoriesImg>
                <img src={Image1} alt="image" />  
            </CategoriesImg>
            <Contents>
            <Left>
            <CategoriesItemsName>Shirts</CategoriesItemsName>
            <Text>Explore Now!</Text>
            </Left>
            <ArrowContainer>
                    <Arrow
                      src={
                        require("../../assets/images/arrow-right.svg")
                          .default
                      }
                    />
                  </ArrowContainer>
            </Contents>      
        </CategoriesItems>
        <CategoriesItems>
            <CategoriesImg>
                <img src={Image1} alt="image" />  
            </CategoriesImg>
            <Contents>
            <Left>
            <CategoriesItemsName>Shirts</CategoriesItemsName>
            <Text>Explore Now!</Text>
            </Left>
            <ArrowContainer>
                    <Arrow
                      src={
                        require("../../assets/images/arrow-right.svg")
                          .default
                      }
                    />
                  </ArrowContainer>
            </Contents>      
        </CategoriesItems>
        <CategoriesItems>
            <CategoriesImg>
                <img src={Image1} alt="image" />  
            </CategoriesImg>
            <Contents>
            <Left>
            <CategoriesItemsName>Shirts</CategoriesItemsName>
            <Text>Explore Now!</Text>
            </Left>
            <ArrowContainer>
                    <Arrow
                      src={
                        require("../../assets/images/arrow-right.svg")
                          .default
                      }
                    />
                  </ArrowContainer>
            </Contents>      
        </CategoriesItems>
        <CategoriesItems>
            <CategoriesImg>
                <img src={Image1} alt="image" />  
            </CategoriesImg>
            <Contents>
            <Left>
            <CategoriesItemsName>Shirts</CategoriesItemsName>
            <Text>Explore Now!</Text>
            </Left>
            <ArrowContainer>
                    <Arrow
                      src={
                        require("../../assets/images/arrow-right.svg")
                          .default
                      }
                    />
                  </ArrowContainer>
            </Contents>      
        </CategoriesItems>
        </CategoriesContainer>
        </MenContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
 width: 90%;
    max-width: 1280px;
    margin-inline: auto;`
const MenContainer = styled.div``
const SubContainer = styled.div`
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
    max-width:1240px;`
const  CategoriesItems= styled.div`
    width: 270px;
    height: 451px;`
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
    font-weight: 700;
    color: #2a2f2f;
    margin: 0;
    margin-bottom: 3px;
    display:block;
    margin-top:20px;`
const Text = styled.p`
    font-size: 12px;
    color: #7f7f7f;
    margin: 0;
`
const ArrowContainer= styled.div`
    width: 15px;`
const Arrow= styled.img`
    display:block;
    width:100%;` 
    


export default Men