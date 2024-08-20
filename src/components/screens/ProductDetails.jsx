import React from 'react';
import styled from 'styled-components';
import MyImage1 from '../../assets/images/img-25.jpg';
import MyImage2 from '../../assets/images/img-16.jpg';
import MyImage3 from '../../assets/images/img-26.jpg';
import Arrow from '../../assets/images/right-arrow-light.svg';

function ProductDetails({data}) {
  return (
    <Wrapper>
      <MainContainer>
        <SliderContainer>
          {
            data.images.map((item)=>(
              <SliderImageDiv>

              <img src={item} alt="image" />
            </SliderImageDiv>

            ))
          }
        
       
        </SliderContainer>
        <BannerImageContainer>
          <BannerImage>
            <img src={data.image} alt="image" />
          </BannerImage>
        </BannerImageContainer>
        <RightSideSection>
          <NavContainer>
            <Items>Shop</Items>
            <Items> <img src={Arrow} alt="image" /></Items>
            <Items>{data.category}</Items>
            <Items><img src={Arrow} alt="image" /></Items>
            <Items>T{data.title}</Items>
          </NavContainer>
          <HeadingContainer>Raven Hoodie With<br />
            Black colored Design</HeadingContainer>
          <RatingDiv>
            <RatingImgContainer>
              <RatingImg
                src={require("../../assets/images/review5.svg").default}
              />
            </RatingImgContainer>
            <RatingSpan>3.5</RatingSpan>
            <CommentImgContainer>
              <CommentImg
                src={require("../../assets/images/message.svg").default}
              />
            </CommentImgContainer>
            <CommentSpan>120 comment</CommentSpan>
          </RatingDiv>

          <SizeContainer>
            <SizeSubDiv>
              <SelectSize>Select Size</SelectSize>
              <SelectGuide>SelectGuide</SelectGuide>
              <RightArrowDiv>
                <RightArrow
                  src={
                    require("../../assets/images/arrow-right.svg")
                      .default
                  }
                />
              </RightArrowDiv>
            </SizeSubDiv>
            <SelectionSize>
              <Sizes>
                <Size>XS</Size>
              </Sizes>
              <Sizes>
                <Size>S</Size>
              </Sizes>
              <Sizes>
                <Size>M</Size>
              </Sizes>
              <Sizes>
                <Size>L</Size>
              </Sizes>
              <Sizes>
                <Size>XL</Size>
              </Sizes>
            </SelectionSize>
          </SizeContainer>
          <ColorsContainer>
            <ColorsAvailableText>Colours Available</ColorsAvailableText>
            <Colors>
              <BlackContainer>
                <Black></Black>
              </BlackContainer>
              <BlackContainer>
                <Yellow></Yellow>
              </BlackContainer>
              <BlackContainer>
                <Pink></Pink>
              </BlackContainer>
              <BlackContainer>
                <Brown></Brown>
              </BlackContainer>
            </Colors>
          </ColorsContainer>
          <BuyContainer>
            <AddCartDiv>
              <CartContainer>
                <CartImgContainer>
                  <CartImg
                    src={
                      require("../../assets/images/cart-1.svg").default
                    }
                  />
                </CartImgContainer>
                <CartText>Add to cart</CartText>
              </CartContainer>
            </AddCartDiv>
            <PriceDiv>
              <Price>$63.00</Price>
            </PriceDiv>
          </BuyContainer>
          <Divider></Divider>
          <DetailsDiv>
            <PaymentandSize>
              <PaymentContainer>
                <PaymentImgContainer>
                  <PaymetImg
                    src={
                      require("../../assets/images/credit card.svg")
                        .default
                    }
                  />
                </PaymentImgContainer>
                <PaymentText>Secure payment</PaymentText>
              </PaymentContainer>
              <SizeFitContainer>
                <SizeImgContainer>
                  <SizeImg
                    src={
                      require("../../assets/images/Size&Fit.svg")
                        .default
                    }
                  />
                </SizeImgContainer>
                <PaymentText>Size & Fit</PaymentText>
              </SizeFitContainer>
            </PaymentandSize>
            <ShippingandReturn>
              <ShippingContainer>
                <ShippingsImgContainer>
                  <ShippingsImg
                    src={
                      require("../../assets/images/truck.svg").default
                    }
                  />
                </ShippingsImgContainer>
                <PaymentText>Free shipping</PaymentText>
              </ShippingContainer>
              <ReturnsContain>
                <ReturnsImgContainer>
                  <ReturnsImg
                    src={
                      require("../../assets/images/Free-Shipping&Returns.svg")
                        .default
                    }
                  />
                </ReturnsImgContainer>
                <PaymentText>Free Shipping & Returns</PaymentText>
              </ReturnsContain>
            </ShippingandReturn>
          </DetailsDiv>
        </RightSideSection>
      </MainContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 90%;
  max-width: 1280px;
  margin-inline: auto;
`;

const MainContainer = styled.div`
    display:flex;
    `; // Corrected the typo

const SliderContainer = styled.div`
  background-color:#f6f6f6;
  width: 281px;
  height: 784px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const SliderImageDiv = styled.div`
  width: 64px;
  height: 64px;
  
  /* This is where the img styles should go */
  img {
    width: 100%;
    height: 100%; /* Ensure the image fills the div */
    display: block;
    border-radius: 20px;
  }
`;
const BannerImageContainer = styled.div`
    width:520px;
    height: 784px;
    `
const BannerImage = styled.div`

img {
    width: 100%;
    height: 784px; /* Ensure the image fills the div */
    display: block;
  }`
const RightSideSection = styled.div`
    padding:42px;`
const NavContainer = styled.ul`
    margin-left:-34px;
    display:flex;
    gap:14px;`
const Items = styled.li`
    font-size: 18px;
    color:#807D7E;
    font-weight:500;
    `
const HeadingContainer = styled.p`
    display: block;
    font-size:34px;
    font-weight:600;
    line-height:48px`;

const RatingDiv = styled.div`
    
    display: flex;
    align-items: center;
    gap: 25px;
    margin-top: 25px;
`;
const RatingImgContainer = styled.div`
    width: 30%;
`;
const RatingImg = styled.img`
    display: block;
    width: 100%;
`;
const RatingSpan = styled.span`
    font-size: 15px;
    color: #807d7e;
    @media all and (max-width: 360px) {
    font-size: 12px;
  }
`;
const CommentImgContainer = styled.div`
  width: 18px;
`;
const CommentImg = styled.img`
  display: block;
  width: 100%;
`;
const CommentSpan = styled.span`
  font-size: 15px;
  color: #807d7e;
  @media all and (max-width: 360px) {
    font-size: 12px;
  }
`;

const SizeContainer = styled.div`
  margin-top: 35px;
  margin-bottom: 25px;
  @media all and (max-width: 1280px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;
const SizeSubDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  @media all and (max-width: 1280px) {
    margin-bottom: 20px;
  }
`;
const SelectSize = styled.span`
  font-size: 15px;
  color: #807d7e;
  margin-right: 20px;
  font-family: "poppinsregular";
  cursor: pointer;
  &:hover {
    color: #3f4646;
    font-weight: 600;
  }
`;
const SelectGuide = styled.span`
  font: 15px;
  color: #807d7e;
  margin-right: 15px;
  font-family: "poppinsregular";
  cursor: pointer;

  &:hover {
    color: #3f4646;
    font-weight: 600;
  }
`;
const RightArrowDiv = styled.div`
  width: 14px;
`;
const RightArrow = styled.img`
  display: block;
  width: 100%;
`;
const SelectionSize = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Sizes = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 12px;
  border: 1.5px solid #bebcbd;
  align-content: center;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #3c4242;
    color: #ffffff;
  }
`;
const Size = styled.span`
  font-size: 12px;
  font-family: "poppinsregular";
  color: #3c4242;
  padding: 8px 12px;
  &:hover {
    color: #ffffff;
  }
`;
const ColorsContainer = styled.div``;
const ColorsAvailableText = styled.p`
  font-family: "poppinsmedium";
  font-size: 16px;
  color: #3f4646;
`;
const Colors = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  height: 40px;
`;
const BlackContainer = styled.div`
  padding: 3px 3px;
  border-radius: 50%;
  &:hover {
    border: 1px solid #3f4646;
  }
`;

const Black = styled.div`
  width: 30px;
  height: 30px;
  background-color: #3f4646;
  border-radius: 50%;
`;
const Yellow = styled.div`
  width: 30px;
  height: 30px;
  background-color: #edd146;
  border-radius: 50%;
`;
const Pink = styled.div`
  width: 30px;
  height: 30px;
  background-color: #eb84b0;
  border-radius: 50%;
`;
const Brown = styled.div`
  width: 30px;
  height: 30px;
  background-color: #9c1f35;
  border-radius: 50%;
`;
const BuyContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 36px;
  gap: 40px;
  @media all and (max-width: 1280px) {
    margin-top: 25px;
  }
  @media all and (max-width: 360px) {
    flex-wrap: wrap;
    flex-direction: column;
    align-items: baseline;
    gap: 10px;
  }
`;
const AddCartDiv = styled.div`
  padding: 10px 50px;
  border-radius: 8px;
  background-color: #8a33fd;
  cursor: pointer;
  @media all and (max-width: 1280px) {
    padding: 10px 35px;
  }
  @media all and (max-width: 480px) {
    padding: 10px 20px;
  }
`;
const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const CartImgContainer = styled.div`
  width: 15px;
`;
const CartImg = styled.img`
  display: block;
  width: 100%;
`;
const CartText = styled.p`
  color: #ffffff;
  margin: 0;
  font-size: 15px;
  @media all and (max-width: 1280px) {
    font-size: 13px;
  }
`;
const PriceDiv = styled.div`
  padding: 10px 50px;
  border: 1px solid #3c4242;
  border-radius: 8px;
  cursor: pointer;
  @media all and (max-width: 1280px) {
    padding: 9px 35px;
  }
`;
const Price = styled.p`
  font-size: 15px;
  font-weight: 700;
  margin: 0;
  @media all and (max-width: 1280px) {
    font-size: 13px;
  }
`;
const Divider = styled.div`
  border-bottom: 1px solid #bebcbd;
  margin-top: 37px;
`;
const DetailsDiv = styled.div`
  padding-left: 15px;
  margin-top: 40px;
  @media all and (max-width: 1280px) {
    margin-top: 20px;
  }
  @media all and (max-width: 980px) {
    padding-left: 0;
  }
`;
const PaymentandSize = styled.div`
  display: flex;
  align-items: center;
  gap: 68px;
  margin-bottom: 20px;
  @media all and (max-width: 1280px) {
    flex-wrap: wrap;
    flex-direction: column;
    gap: 0;
    align-items: baseline;
    margin-bottom: 0;
  }
`;
const PaymentContainer = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
`;
const PaymentImgContainer = styled.div`
  width: 16px;
  margin-right: 29px;
`;
const PaymetImg = styled.img`
  display: block;
  width: 100%;
`;
const PaymentText = styled.div`
  font-size: 14px;
  font-family: "poppinsregular";
  color: #3c4242;
`;
const SizeFitContainer = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
`;
const SizeImgContainer = styled.div`
  width: 16px;
  margin-right: 29px;
`;
const SizeImg = styled.img`
  display: block;
  width: 100%;
`;

const ShippingandReturn = styled.div`
  display: flex;
  align-items: center;
  gap: 92px;
  @media all and (max-width: 1280px) {
    flex-wrap: wrap;
    flex-direction: column;
    gap: 0;
    align-items: baseline;
  }
`;
const ShippingContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const ShippingsImgContainer = styled.div`
  width: 16px;
  margin-right: 29px;
`;
const ShippingsImg = styled.img`
  display: block;
  width: 100%;
`;
const ReturnsContain = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const ReturnsImgContainer = styled.div`
  width: 16px;
  margin-right: 29px;
`;
const ReturnsImg = styled.img`
  display: block;
  width: 100%;
`;





export default ProductDetails;
