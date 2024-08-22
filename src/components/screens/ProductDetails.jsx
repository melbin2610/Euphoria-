import React from 'react';
import styled from 'styled-components';
import Arrow from '../../assets/images/right-arrow-light.svg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowRight from '../../assets/images/arrowup.svg';



function ProductDetails({data}) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  
  
  return (
    <Wrapper>
      <MainContainer>
        
        <SliderContainer>
           <Slider {...settings}>
          {
            data.images.map((item)=>(
              <SliderImageDiv>

              <img src={item} alt="image" />
            </SliderImageDiv>

            ))
          }
          </Slider >
        </SliderContainer>
        <MainImageContainer>
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
            <Items>{data.title}</Items>
          </NavContainer>
          <HeadingContainer>
            {data.header}
          </HeadingContainer>
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
            <CommentSpan>{data.comments} comment</CommentSpan>
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
              {data.sizes.map((item)=>(
                   <Sizes>
                <Size>{item}</Size>
          
              </Sizes>
              ))}
              
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
              <Price>{data.price}</Price>
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
        </MainImageContainer>
      </MainContainer>
    </Wrapper>
  );
  
}
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <ArrowContainer onClick={onClick}>
      <Arrowimg src={ArrowRight} />
    </ArrowContainer>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <ArrowContainerup onClick={onClick}>
      <Arrowimg src={ArrowRight} />
    </ArrowContainerup>
  );
};



const Arrowimg = styled.img`
 
`;
const ArrowContainer = styled.div`
 
 background: gray;
 padding: 10px;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  top: 50px;
  left: 95px;
`;
const ArrowContainerup = styled.div`
    background-color: white;
    padding: 10px;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  top: 284px;
  left: 95px;
  transform: rotate(180deg);
`;
const Wrapper = styled.div`
  width: 90%;
  /* max-width: 1280px; */
  margin-inline: auto;
`;

const MainContainer = styled.div`
    display:flex;
    `;
 const MainImageContainer = styled.div`
   display: flex;
     @media all and (max-width: 1080px) {
    flex-direction:column ;
  }   `  ; 

const SliderContainer = styled.div`
  background-color:#f6f6f6;
  width: 281px;
  height: 784px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media all and (max-width: 1080px) {
    background-color: white;
    width: 35%;
  }
  @media all and (max-width: 480px) {
    background-color: white;
    width: 40%;
  }
`;

const SliderImageDiv = styled.div`
  width: 64px;
  height: 64px;
  width: 51% !important;
    margin: 8px auto !important;
    display: block !important;
  
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
    @media all and (max-width: 1080px) {
    width:100% ;
  }
    `;
const BannerImage = styled.div`

img {
    width: 100%;
    height: 784px; /* Ensure the image fills the div */
    display: block;
  }`
const RightSideSection = styled.div`
    padding:42px;
    @media all and (max-width: 1080px) {
    margin-left:-257px;
    }
    @media all and (max-width: 780px) {
      margin-left:-98px;}
      @media all and (max-width: 780px) {
        margin-left:-76px;
      }`
const NavContainer = styled.ul`
    margin-left:-34px;
    display:flex;
    gap:14px;`
const Items = styled.li`
    font-size: 18px;
    color:#807D7E;
    line-height: 21.6px;
    font-weight:500;
    @media all and (max-width: 480px) {
        font-size: 14px;
      }
    `
const HeadingContainer = styled.p`
    display: block;
    color: #3C4242;
    font-size:34px;
    font-weight:600;
    letter-spacing: 0.32px;
    line-height:47.6px;
    @media (max-width: 780px) {
      font-size:22px;
      line-height:31px;
  }
  @media all and (max-width: 480px) {
        font-size: 20px;
      }`
    

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
  font-size: 18px;
  line-height: 21.6px;
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
  font-size: 18px;
  color:#3F4646;
  font-weight: 600;
  margin-right: 20px; 
  cursor: pointer;
  &:hover {
    color: #3f4646;
    font-weight: 700;
  }
`;
const SelectGuide = styled.span`
  font: 18px;
  color: #807d7e; 
  margin-right: 15px;
  font-weight: 500;
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
  @media all and (max-width: 780px) {
    padding: 8px 35px;
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
  font-weight: 600;
  font-size: 18px;
  @media all and (max-width: 1280px) {
    font-size: 13px;
  }
  @media all and (max-width: 780px) {
    font-size: 8px;
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
  font-size: 18px;
  font-weight: 700;
  line-height: 21.6px;
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
    gap: 0px;
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
  font-size: 18px;
  font-weight: 500;
  line-height: 21.6px;
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
