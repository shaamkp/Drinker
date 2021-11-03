import React from "react";
import styled from "styled-components";
import Bottle from "../assets/images/store_img1.png";

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
              <ItemImg src={Bottle} alt="" />
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
            </ItemContent>
          </Item>
        </Wrapper>
      </StoreMain>
    </>
  );
}

const StoreMain = styled.div``;
const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const Storetitle = styled.h2`
  font-size: 40px;
  text-align: center;
  margin-top: 50px;
`;
const StoresubTitle = styled.span`
  font-size: 40px;
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
  width: 20%;
`;
const ItemImg = styled.img``;
const ItemContent = styled.div`
  margin-left: 20px;
`;
const ItemTitle = styled.h3``;
const ItemPara = styled.p`
  width: 560 px;
  line-height: 1.4;
`;
