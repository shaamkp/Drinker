import React from "react";
import styled from "styled-components";

export default function Contact() {
  return (
    <>
      <ContactMain>
        <Wrapper>
          <ContactTitle>
            About <Sub>Store</Sub>
          </ContactTitle>
          <ContactPara>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.Many desktop publishing
            packages
          </ContactPara>
          <ContactButton>Read More</ContactButton>
        </Wrapper>
      </ContactMain>
      <hr />
    </>
  );
}

const ContactMain = styled.div`
  padding: 50px 0;
`;
const Wrapper = styled.div`
  width: 85%;
  margin: 0 auto;
`;
const ContactTitle = styled.h2`
    text-align:center;
    font-size: 40px;
`;
const Sub = styled.span`
    color:#ee4433;
`;
const ContactPara = styled.p`
    text-align: center;
    line-height:1.5em;
    color: #000;
`;
const ContactButton = styled.button`
    display: block;
    margin: 0 auto;
    margin-top: 40px;
    border: none;
    background: black;
    color: #fff;
    padding: 15px 30px;
    cursor: pointer;
`;
