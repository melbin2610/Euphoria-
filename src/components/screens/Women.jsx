import React from 'react'
import axios from 'axios';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Image1 from "../../assets/images/img-12.jpg"
import { useEffect, useState } from "react";

function Women() {
  const [data,setData]=useState([])
  useEffect(() => {
    axios.get('/data.json')
      .then(response => {
        setData(response.data.categoriesforwomen
        );
   
      })
      .catch(error => {
       
      });
  }, []);
  // console.log(data,"uuuuuu")  
  return (
    <Wrapper>
        <WomenContainer>
        <SubContainer>
            <BlueBlock></BlueBlock>
            <Heading>Categories For Women</Heading>
        </SubContainer>
        <CategoriesContainer>
          {data.map((item)=>(
               <CategoriesItems  key={item.id} to={`/single/${item.id}`}>
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
          ))}
        
        
        </CategoriesContainer>
        </WomenContainer>
    </Wrapper>
  )
}


const Wrapper = styled.div`
    width: 90%;
    max-width: 1280px;
    margin-inline: auto;`
const WomenContainer = styled.div`
    margin-top:76px;`
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
    line-height: 33.5px;
    font-weight:600;
    letter-spacing:0.32px;
    @media all and (max-width: 480px) {
      font-size : 25px;
 
 
 flex-wrap: wrap;
}
    
    
    `
const CategoriesContainer=styled.div`
display: flex;
margin-top: 40px;
justify-content: space-between;
/* padding:50px; */
max-width:1280px;
@media all and (max-width: 1280px) {
 
 
  flex-wrap: wrap;
}
@media all and (max-width: 720px) {
  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

      
}



`
const  CategoriesItems= styled(Link)`
width: 270px;
height: 451px;
text-decoration: none;
color:#191919;
`
const CategoriesImg= styled.div`
display: block;
width:100%;` 
const Contents=styled.div`
text-align: left;
display: flex;
align-items: center;
justify-content: space-between;`
const Left =styled.div``

const CategoriesItemsName= styled.p`
font-size: 17.88px;
font-weight: 500;
color:#191919;
margin: 0;
margin-bottom: 3px;
display:block;
margin-top:20px;
letter-spacing: -0.64px;
line-height:27.93px;`

const Text = styled.p`
font-weight: 500;
line-height: 27.93px;
font-size: 13.41px;
color: #7f7f7f;
margin: 0;
letter-spacing: -0.64px;
`
const ArrowContainer= styled.div`
width: 15px;`
const Arrow= styled.img`
display:block;
width:100%;` 
    

export default Women