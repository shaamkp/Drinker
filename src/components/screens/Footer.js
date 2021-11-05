import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <div>
      <Main>
        <Wrapper>
          <MainContainer>
            <MainLeft>
              <Righttitle>Lets Talk for wines</Righttitle>
              <RightPara>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.Many
                desktop publishing packages
              </RightPara>
              <RightSubtitle>
                Free Multipurpose Responsive Landing Page 2019
              </RightSubtitle>
            </MainLeft>
            <MainRight>
              <Form action="">
                <InputTxt type="text" placeholder="Name" />
                <InputNumber type="telto" placeholder="Phonenumber" />
                <InputEmail type="email" placeholder="Email" />
                <InputMessage type="Message" placeholder="Message" />
              </Form>
              <RightButton>Send</RightButton>
            </MainRight>
          </MainContainer>
        </Wrapper>
      </Main>
      <hr  /> 
    </div>
  );
}

const Main = styled.div`
  padding: 50px 0;
`;
const Wrapper = styled.div`
  width: 85%;
  margin: 0 auto;
`;
const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const MainLeft = styled.div`
    width: 50%;
`;
const Righttitle = styled.h2``;
const RightPara = styled.p``;
const RightSubtitle = styled.h2``;
const MainRight = styled.div`
    width: 40%;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    
`;
const InputTxt = styled.input`
    padding: 15px;
    border: none;
    background: none;
    border-bottom: 1px solid  grey;

`;
const InputNumber = styled.input`
    margin-top: 20px;
    padding: 15px;
    border: none;
    background: none;
    border-bottom: 1px solid  grey;

`;
const InputEmail = styled.input`
    margin-top: 20px;
    padding: 15px;
    border: none;
    background: none;
    border-bottom: 1px solid  grey;

`;
const InputMessage = styled.input`
    margin-top: 20px;
    padding: 15px;
    border: none;
    background: none;
    border-bottom: 1px solid  grey;

`;
const RightButton = styled.button`
    display: block;
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 30px;
    padding: 15px 60px;
    background: #000;
    color: #fff;
    cursor: pointer;
`;
