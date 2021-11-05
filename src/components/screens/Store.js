import React from "react";
import styled from "styled-components";
import Bottle from "../assets/images/store_img1.png";
import Bottle2 from "../assets/images/store_img2.png";
import Bottle3 from "../assets/images/store_img3.png";

export default function Store() {
  return (
    <>
      <StoreMain>
        <Wrapper>
          <Storetitle>
            Best Wines <StoresubTitle>In Our Store</StoresubTitle>
          </Storetitle>
          <StorePara>
            Its a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem
          </StorePara>
          <Item>
            <ItemImgDiv>
              <ItemImg src={Bottle} alt="Image" />
            </ItemImgDiv>
            <ItemContent>
              <ItemTitle>Black Wine</ItemTitle>
              <ItemPara>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </ItemPara>
              <ItemLink>Read more</ItemLink>
            </ItemContent>
          </Item>

          <Item>
            <ItemImgDiv>
              <ItemImg src={Bottle2} alt="Image" />
            </ItemImgDiv>
            <ItemContent>
              <ItemTitle>Red Wine</ItemTitle>
              <ItemPara>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.Many
                desktop publishing packages
              </ItemPara>
              <ItemLink>Read more</ItemLink>
            </ItemContent>
          </Item>

          <Item>
            <ItemImgDiv>
              <ItemImg src={Bottle3} alt="Image" />
            </ItemImgDiv>
            <ItemContent>
              <ItemTitle>White Wine</ItemTitle>
              <ItemPara>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.Many
                desktop publishing packages
              </ItemPara>
              <ItemLink>Read more</ItemLink>
            </ItemContent>
          </Item>
        </Wrapper>
      </StoreMain>
      <hr />
    </>
  );
}

const StoreMain = styled.div`
  padding-bottom: 50px;
`;
const Wrapper = styled.div`
  width: 85%;
  margin: 0 auto;
`;
const Storetitle = styled.h2`
  font-size: 40px;
  text-align: center;
  margin-top: 50px;
`;
const StoresubTitle = styled.span`
  font-size: 40px;
  color:#ee4433;
`;
const StorePara = styled.p`
  text-align: center;
  font-size: 15px;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
`;
const ItemImgDiv = styled.div`
  width: 30%;
  box-shadow: 14px 9px 19px -8px rgba(0,0,0,0.5);
`;
const ItemImg = styled.img``;
const ItemContent = styled.div`
  margin-left: 50px;
`;
const ItemTitle = styled.h3`
  font-size: 32px;
`;
const ItemPara = styled.p`
  line-height: 1.4;
  color: #807f7f;
  width: 674px;
`;

const ItemLink = styled.span`
  font-size: 15px;
  margin-top: 20px;
  text-decoration: underline;
  cursor: pointer;
`;