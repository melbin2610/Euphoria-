import React from 'react'
import styled from 'styled-components'
import Image1 from "../../assets/images/img-1.jpg"

import Carousel from 'react-bootstrap/Carousel';

function NewArrivals() {
  return (
    <Wrapper>
        
     
      {/* Carousel Section */}
      <MainContainer>
        <SubContainer>
          <BlueBlock></BlueBlock>
          <Heading>New Arrival</Heading>
        </SubContainer>
        <ArrivalContainer>
          <Carousel>
            <Carousel.Item>
              <ArrivalItems>
                <ArrivalImg>
                  <img src={Image1} alt="Knitted Joggers" />
                </ArrivalImg>
                <ArrivalItemsName>Knitted Joggers</ArrivalItemsName>
              </ArrivalItems>
            </Carousel.Item>

            <Carousel.Item>
              <ArrivalItems>
                <ArrivalImg>
                  <img src={Image1} alt="Knitted Joggers" />
                </ArrivalImg>
                <ArrivalItemsName>Knitted Joggers</ArrivalItemsName>
              </ArrivalItems>
            </Carousel.Item>

            <Carousel.Item>
              <ArrivalItems>
                <ArrivalImg>
                  <img src={Image1} alt="Knitted Joggers" />
                </ArrivalImg>
                <ArrivalItemsName>Knitted Joggers</ArrivalItemsName>
              </ArrivalItems>
            </Carousel.Item>

            <Carousel.Item>
              <ArrivalItems>
                <ArrivalImg>
                  <img src={Image1} alt="Knitted Joggers" />
                </ArrivalImg>
                <ArrivalItemsName>Knitted Joggers</ArrivalItemsName>
              </ArrivalItems>
            </Carousel.Item>
          </Carousel>
        </ArrivalContainer>
      </MainContainer>
    </Wrapper>
  )
}
const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
  `
const MainContainer = styled.div``
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

const  ArrivalContainer= styled.div`
    display: flex;
    justify-content: space-between;
    padding: 50px 0;
   
    `
const  ArrivalItems= styled.div`
   
    `
const ArrivalImg= styled.div`
    display: block;
    width:100%;
` 

const ArrivalItemsName= styled.span`
    display:block;
    margin-top:20px;`
const Img= styled.img``


export default NewArrivals