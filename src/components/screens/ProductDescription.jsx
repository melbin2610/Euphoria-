import React from "react";
import styled from "styled-components";

function ProductDescription() {
    return (
        <>
            <Wrapper>
                <DescrptionContainer>
                    <Container>
                        <BlueBlock></BlueBlock>
                        <Heading>Product Description</Heading>
                    </Container>
                    <NavigationHeadingContainer>
                        <NavigationHeading>Description</NavigationHeading>
                        <NavigationHeading>User comments</NavigationHeading>
                        <CommentBlock>21</CommentBlock>
                        <NavigationHeading>Question & Answer</NavigationHeading>
                        <Question>4</Question>
                    </NavigationHeadingContainer>
                    <TextContainer>
                        <Text>
                            100% Bio-washed Cotton – makes the fabric extra soft & silky.
                            Flexible ribbed crew neck. Precisely stitched with no pilling & no
                            fading. Provide all-time comfort. Anytime, anywhere. Infinite
                            range of matte-finish HD prints.
                        </Text>
                    </TextContainer>
                </DescrptionContainer>
                <TableWrapper>
                    <ProductDetails>
                        <DetailItem>
                            <Category>
                                <p style={{ marginTop: "0" }}>Fabric</p>
                            </Category>
                            <Value>
                                <p style={{ margin: "0" }}>Bio-washed Cotton</p>
                            </Value>
                        </DetailItem>
                        <DetailItem>
                            <Category>
                                <p style={{ marginTop: "0" }}>Pattern</p>
                            </Category>
                            <Value>
                                <p style={{ margin: "0" }}>Printed</p>
                            </Value>
                        </DetailItem>
                        <DetailItem>
                            <Category>
                                <p style={{ marginTop: "0" }}>Fit</p>
                            </Category>
                            <Value>
                                <p style={{ margin: "0" }}>Regular-fit</p>
                            </Value>
                        </DetailItem>
                        <DetailItem>
                            <Category>
                                <p style={{ marginTop: "0" }}>Neck</p>
                            </Category>
                            <Value>
                                <p style={{ margin: "0" }}>Round Neck</p>
                            </Value>
                        </DetailItem>
                        <DetailItem>
                            <Category>
                                <p style={{ marginTop: "0" }}>Sleeve</p>
                            </Category>
                            <Value>
                                <p style={{ margin: "0" }}>Half-sleeves</p>
                            </Value>
                        </DetailItem>
                        <DetailItem>
                            <Category>
                                <p style={{ marginTop: "0" }}>Style</p>
                            </Category>
                            <Value>
                                <p style={{ margin: "0" }}>Casual Wear</p>
                            </Value>
                        </DetailItem>
                    </ProductDetails>
                </TableWrapper>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1280px;
  padding: 60px 0;
  display: flex;
  gap: 30px;
  @media (max-width: 1400px) {
 
    
  }
  @media (max-width: 1080px) {
    flex-direction: column;

  }
  @media (max-width: 680px) {
    padding-top: 55px;

  }
`;

const Container = styled.div`
  margin-bottom: 35px;
  display: flex;
  align-items: center;
  gap: 15px;
`;
const BlueBlock = styled.div`
  width: 6px;
  height: 30px;
  border-radius: 10px;
  background-color: #8a33fd;
`;
const Heading = styled.h3`
  font-size: 28px;
  font-weight: 600;
  line-height: 33.5px;
  letter-spacing: 0.32px;
  color: #3c4242;
  @media (max-width: 680px) {
    font-size: 28px;
  }
  @media (max-width: 680px) {
    font-size: 18px;
  }
`;
const DescrptionContainer = styled.div``;

const NavigationHeadingContainer = styled.div`
  display: flex;
  gap: 30px;
  @media (max-width: 320px) {
    gap: 10px;
    text-align: center;
  }
`;
const NavigationHeading = styled.div`
  margin-bottom: 20px;
  font-weight: 500;
  line-height: 21.6px;
  font-size: 18px;
  @media (max-width: 1280px) {
    font-size: 12px;
  }
  @media (max-width: 1080px) {
    font-size: 18px;
  }
  @media (max-width: 680px) {
    font-size: 14px;
  }
  @media (max-width: 540px) {
  font-size: 12px;
}
`;
const CommentBlock=styled.div`
    background-color: blueviolet;
    width:20px;
    height:20px;
    border-radius: 6px;
    text-align: center;
    font-size: 10px;
  color: #FFFFFF;
  line-height: 18px;
  font-family: 500;
  @media (max-width: 480px) {
   display: none;
  }
    `;
const Question=styled.div`
  background-color: #3c4242;
    width:20px;
    height:20px;
    border-radius: 6px;
    text-align: center;
    font-size: 10px;
  color: #FFFFFF;
  line-height: 18px;
  font-family: 500;
  @media (max-width: 480px) {
   display: none;
  }
`    
  

const TextContainer = styled.div``;
const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0.02em;
  color: #807d7e;
  @media (max-width: 1280px) {
    line-height: 22px;
    font-size: 13px;
  }
  @media (max-width: 1080px) {
    line-height: 22px;
        font-size: 15px;
        width: 69%;
  }
`;
const TableWrapper = styled.div`
  margin: 0 auto;
`;

const ProductDetails = styled.div`
  width: 632px;
  background-color: #f6f6f6;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-radius: 12px;
  @media (max-width: 1400px) {
    width: 515px;
    
  }

  @media (max-width: 680px) {
    width: 100%;
  }
`;

const DetailItem = styled.div`
  flex: 1 1 calc(33.33% - 10px);
  padding: 20px 40px;
  box-sizing: border-box;
  border-right: 1px solid #bebcbd;
  border-bottom: 1px solid #bebcbd;
  &:nth-child(n + 4) {
    border-bottom: none;
  }
  &:nth-child(3n) {
    border-right: none;
  }
  @media (max-width: 680px) {
    padding: 10px 20px;
  }
  @media (max-width: 320px) {
    padding: 10px;
  }
`;
const Category = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #807d7e;
  @media (max-width: 360px) {
    font-size: 12px;
    @media (max-width: 320px) {
    font-size: 8px;
  }
  }
`;
const Value = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #3c4242;
  @media (max-width: 1280px) {
    font-size: 15px;
  }
`;

export default ProductDescription;
