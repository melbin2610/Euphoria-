import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function BransDeal() {
  return (
    <>
      <BrandsContainer>
        <BrandsContent>
          <Title>Top Brands Deal</Title>
          <Text>
            Up To <Span>60% </Span>off on brands
          </Text>
          <LogoGrid>
            <LogoItem>
              <Logo src={require("../../assets/images/nike.jpg")} alt="Nike" />
            </LogoItem>
            <LogoItem>
              <Logo src={require("../../assets/images/H&M.jpg")} alt="H&M" />
            </LogoItem>
            <LogoItem>
              <Logo src={require("../../assets/images/levis.jpg")} alt="Livis" />
            </LogoItem>
            <LogoItem>
              <Logo src={require("../../assets/images/USPA.jpg")} alt="USPA" />
            </LogoItem>
            <LogoItem>
              <Logo src={require("../../assets/images/puma.jpg")} alt="Puma" />
            </LogoItem>
          </LogoGrid>
        </BrandsContent>
      </BrandsContainer>
    </>
  );
}
const BrandsContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1280px;
  margin-top: 100px;

  @media (max-width: 980px) {
    padding: 30px 0;
  }
`;
const BrandsContent = styled.div`
  border: 1px solid #323232;
  background: #3c4242;
  border-radius: 12px;
  padding: 30px 0;
`;
const Title = styled.h3`
  color: #ffffff;
  font-size: 50px;
  line-height: 49.1px;
  text-align: center;
  font-weight: 800;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 34px;
  }
  @media (max-width: 480px) {
    font-size: 28px;
  }
`;
const Text = styled.p`
  color: #ffffff;
  margin: 20px 0;
  line-height: 26.4px;
  margin-bottom: 60px;
  font-size: 22px;
  font-weight: 400;
  text-align: center;
  @media (max-width: 680px) {
    margin: 20px 0;
  }
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;
const Span = styled.span`
  color: #fbd103;
  font-size: 22px;
  line-height: 26.4px;
  font-weight: 700;
`;
const LogoGrid = styled.div`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0 40px;
  gap: 20px;
  /* #background: #ffffff; */

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
const LogoItem = styled(Link)`
  width: calc(20% - 10px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 20px 40px;
  border-radius: 12px;
 
  @media (max-width: 680px) {
    padding: 10px 20px;
  }
`;
const Logo = styled.img`
  width: 100%;
  display: block;
  @media (max-width: 680px) {
  }
  @media (max-width: 480px) {
    width: 20px;
  }
 
`;

export default BransDeal;
