import React from "react";
import styled from "styled-components";
import Men1 from "../assets/images/plan1.png";
import Slider from "react-slick";

export default function Testimonial() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <TestimonialMain>
        <Wrapper>
          <TestimonialTitle>Testimonial</TestimonialTitle>
          <TestimonialPara>
            Its is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            using Lorem
          </TestimonialPara>
          
            <Item>
              <ItemImgDiv>
                <ItemImg src={Men1} alt="Image" />
              </ItemImgDiv>
              <ItemContent>
                <ItemTitle>Den Mark</ItemTitle>
                <ItemPara>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </ItemPara>
              </ItemContent>
            </Item>
        </Wrapper>
      </TestimonialMain>
      <hr />
    </>
  );
}

const TestimonialMain = styled.div`
  padding: 50px 0;
`;
const Wrapper = styled.div`
  width: 85%;
  margin: 0 auto;
`;
const TestimonialTitle = styled.h2`
  font-size: 40px;
  text-align: center;
`;
const TestimonialPara = styled.p`
  font-size: 15px;
  text-align: center;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
`;
const ItemImgDiv = styled.div`
  width: 50%;
`;
const ItemImg = styled.img``;
const ItemContent = styled.div`
  margin-left: 50px;
`;
const ItemTitle = styled.h3``;
const ItemPara = styled.p`
    line-height: 1.5em;
`;
