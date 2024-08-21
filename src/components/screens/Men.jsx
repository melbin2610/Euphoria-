import React from 'react'
import axios from 'axios';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Image1 from "../../assets/images/img-5.jpg"
import { useEffect, useState } from "react";

function Men() {
  const [data,setData]=useState([])
  const [filterdata,setfilterData]=useState([])
  useEffect(() => {
    axios.get('/data.json')
      .then(response => {
        setData(response.data.categoriesformen  );
       
   
      })
      .catch(error => {
       
      });
  }, []);

  return (
    <Wrapper>
        <MenContainer>
        <SubContainer>
            <BlueBlock></BlueBlock>
            <Heading>Categories For Men</Heading>
        </SubContainer>
        <CategoriesContainer>
        {
          data.map((item)=>(
            <CategoriesItems  key={item.id}  to={`/single/${item.id}`}>
            <CategoriesImg>
                <img src={item.image} alt="image" />  
            </CategoriesImg>
            <Contents>
            <Left>
            <CategoriesItemsName>{item.title}</CategoriesItemsName>
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
          ))
        }
        

        
        
        
      
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
    display: grid;
            grid-template-columns: repeat(4, 1fr); /* 4 equal columns */
            grid-template-rows: repeat(2, 1fr); /* 2 equal rows, each 100px high */
            gap: 10px; 
           
   `
const  CategoriesItems= styled(Link)`
    width: 270px;
    height: 451px;
    margin-top: 40px;`
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
    font-size: 17.88px;
    line-height: 27.93px;
    letter-spacing: .064px;;
    color: #2a2f2f;
    margin: 0;
    margin-bottom: 3px;
    display:block;
    margin-top:20px;`
const Text = styled.p`
    font-size: 13.41px;
    font-weight: 500;
    line-height: 27.93px;
    color: #7f7f7f;
    margin: 0;
`
const ArrowContainer= styled.div`
    width: 15px;`
const Arrow= styled.img`
    display:block;
    width:100%;` 
    


export default Men