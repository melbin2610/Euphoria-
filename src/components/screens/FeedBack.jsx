import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Feedback() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // screen width at which to apply this rule
        settings: {
          slidesToShow: 1, // show 1 slide at a time
        },
      },
    ],
  };

  return (
    <Wrapper>
      <FeedBackContainer>
        <Container>
          <HeadIcon />
          <Heading>Feedback</Heading>
        </Container>
        <ContentAll>
          <Slider {...settings}>
            <CustomSlide>
              <Card>
                <UserAndRating>
                  <UserImage>
                    <Image
                      src={require("../../assets/images/span-1.svg").default}
                      alt="user"
                    />
                  </UserImage>
                  <Rating>
                    <Stars>
                      {Array(4)
                        .fill(0)
                        .map((_, index) => (
                          <Star
                            key={index}
                            src={require("../../assets/images/star.svg").default}
                            alt="star"
                          />
                        ))}
                    </Stars>
                  </Rating>
                </UserAndRating>
                <TextContainer>
                  <Title>Floyd Miles</Title>
                  <Text>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                   
                  </Text>
                </TextContainer>
              </Card>
            </CustomSlide>
            <CustomSlide>
              <Card>
                <UserAndRating>
                  <UserImage>
                    <Image
                      src={require("../../assets/images/span-2.svg").default}
                      alt="user"
                    />
                  </UserImage>
                  <Rating>
                    <Stars>
                      {Array(4)
                        .fill(0)
                        .map((_, index) => (
                          <Star
                            key={index}
                            src={require("../../assets/images/star.svg").default}
                            alt="star"
                          />
                        ))}
                    </Stars>
                  </Rating>
                </UserAndRating>
                <TextContainer>
                  <Title>Floyd Miles</Title>
                  <Text>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                    
                  </Text>
                </TextContainer>
              </Card>
            </CustomSlide>
            <CustomSlide>
              <Card>
                <UserAndRating>
                  <UserImage>
                    <Image
                      src={require("../../assets/images/span-3.svg").default}
                      alt="user"
                    />
                  </UserImage>
                  <Rating>
                    <Stars>
                      {Array(4)
                        .fill(0)
                        .map((_, index) => (
                          <Star
                            key={index}
                            src={require("../../assets/images/star.svg").default}
                            alt="star"
                          />
                        ))}
                    </Stars>
                  </Rating>
                </UserAndRating>
                <TextContainer>
                  <Title>Floyd Miles</Title>
                  <Text>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                    
                  </Text>
                </TextContainer>
              </Card>
            </CustomSlide>
          </Slider>
        </ContentAll>
      </FeedBackContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1280px;
  padding:50px;
  
  @media all and (max-width: 480px) {
  
  
    padding: 25px 0;
    }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 60px;
  @media all and (max-width: 480px) {
  display: flex;
    align-items: center;
 
    margin-bottom: 26px;
  }

`;

const HeadIcon = styled.span`
  width: 6px;
  height: 30px;
  border-radius: 10px;
  background-color: #8a33fd;
`;

const Heading = styled.h3`
  font-size: 34px;
  color: #3C4242  ;
  font-weight: 600;
  line-height: 33.5px;
  letter-spacing: 0.32px;
  @media (max-width: 480px) {
   font-size: 24px;
}
`;

const FeedBackContainer = styled.div`
  max-width: 1240px;
  @media (max-width: 860px) {
    width: 100%;
  }
`;

const ContentAll = styled.div`
  width: 100%;
`;

const CustomSlide = styled.div`
  max-width: 397px;
  padding: 0 10px;
  @media all and (max-width: 980px) {
    max-width: none;
    }
`;

const Card = styled.div`
  margin-right: 20px;

  padding: 23px;
  border-radius: 10px;
  border: 1.8px solid #bebcbd;
  &.last-child {
    margin-right: 0px;
  }
  @media all and (max-width: 1280px) {
    height:none;
    }
    @media all and (max-width: 1080px) {
    width: 100%;
    }

  @media all and (max-width: 320px) {
    margin-right: 3px;
  
    padding: 17px;
    }
`;

const UserAndRating = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 860px) {
    
  }
`;

const UserImage = styled.span``;

const Image = styled.img`
  width: 100%;
  display: block;
`;

const Rating = styled.div``;

const Stars = styled.span`
  display: flex;
  gap: 10px;
  @media (max-width: 860px) {
    gap: 3px;
  }
  @media (max-width: 320px) {
    gap: 1px;
  }
`;

const Star = styled.img`
  width: 100%;
  display: block;
`;

const TextContainer = styled.div`
  width: 100%;
`;

const Title = styled.h5`
  margin: 20px 0;
  color: #3c4242;
  font-size: 22px;
  font-weight: 500;
  line-height: 21.6px;
  letter-spacing: 0.32px;
  @media all and (max-width: 1080px) {
      font-size: 18px;
}
`;

const Text = styled.p`
  margin-bottom: 0;
  color: #807d7e;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.8px;
  letter-spacing: 0.32px;
  @media all and (max-width: 1080px) {
      font-size: 9px;
}
@media all and (max-width: 980px) {
      font-size: 12px;
}
@media all and (max-width: 320px) {
      font-size: 6px;
}
`;

export default Feedback;
