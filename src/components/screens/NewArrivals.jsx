import React from "react";
import styled from "styled-components";
import Image1 from "../../assets/images/img-1.jpg";
import Slider from "react-slick";
import { useEffect, useState } from "react";

function NewArrivals() {
    const settings = {
      dots: false,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        autoplaySpeed: 3000,
    };

    const[carditems,setCarditems]=useState([])
    useEffect(() => {
        fetch("/data.json") // Adjust the path as needed
          .then((response) => response.json())
          .then((data) => {
            setCarditems(data.newarival);
          })
          .catch((error) => console.error("Error fetching data:", error));
      }, []);
   

    return (
        <Wrapper>
            <MainContainer>
                <SubContainer>
                    <BlueBlock></BlueBlock>
                    <Heading>New Arrival</Heading>
                </SubContainer>
                <ArrivalContainer>
                  
                    <Slider {...settings}>
                        {carditems.map((item) => (
                            <ArrivalItems>
                                <ArrivalImg>
                                    <img src={item.image} alt="Knitted Joggers" />
                                </ArrivalImg>
                                <ArrivalItemsName>
                              {item.title}
                                </ArrivalItemsName>
                            </ArrivalItems>
                        ))}
                    </Slider>
                </ArrivalContainer>
            </MainContainer>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
`;

const MainContainer = styled.div``;

const SubContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

const BlueBlock = styled.div`
    background-color: #8a33fd;
    width: 6px;
    height: 30px;
    border-radius: 10px;
`;

const Heading = styled.h2`
    color: #3c4242;
    font-size: 34px;
    font-weight: 600;
`;

const ArrivalContainer = styled.div`
    padding: 50px 0;
`;

const ArrivalItems = styled.div`
    text-align: center;  // Center align the text
    padding: 0 10px;  // Optional: add padding between slides
`;

const ArrivalImg = styled.div`
    width: 100%;
    img {
        width: 100%;
        height: auto;  // Maintain aspect ratio
    }
`;

const ArrivalItemsName = styled.span`
    display: block;
    margin-top: 20px;
`;
const SliderWrapper = styled.div`
    .slick-prev,
    .slick-next {
        width: 40px;
        height: 40px;
        background-color: #8a33fd;
        border-radius: 50%;
        color: white;
        border: none;
        z-index: 1;
    }

    .slick-prev {
        left: 10px; // Position the previous arrow
    }

    .slick-next {
        right: 10px; // Position the next arrow
    }

    .slick-prev::before,
    .slick-next::before {
        font-family: "slick";
        font-size: 24px;
        color: white; // Color of the arrows
    }

    .slick-prev::before {
        content: "←"; // Customize the arrow icon
        color: red;
    }

    .slick-next::before {
        content: "→"; // Customize the arrow icon
    }
`;
const CustomArrow = styled.div`
  position: absolute;
  top: 30%;
  transform: translateY(50%);
  z-index: 1;
  cursor: pointer;
`;
const SamplePrevArrow = (props) => {
  const { style, onClick } = props;
  return (
    <CustomArrow
      className="custom-prev"
      style={{ ...style, left: "-17px" }} /* Position on the left side */
      onClick={onClick}
    >
      <img src={require("../../assets/images/arrow-left.svg").default} alt="Previous" />
    </CustomArrow>
  );
};

const SampleNextArrow = (props) => {
  const { style, onClick } = props;
  return (
    <CustomArrow
      className="custom-next"
      style={{ ...style, right: "-17px" }} /* Position on the right side */
      onClick={onClick}
    >
      <img src={require("../../assets/images/arrow-right.svg").default} alt="Next" />
    </CustomArrow>
  );
};

export default NewArrivals;
 