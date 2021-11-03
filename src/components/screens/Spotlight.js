import React from 'react';
import styled from 'styled-components';
import Logo from "../assets/images/logo.png";
import Bottle from "../assets/images/box_img.png";
import Sidecurve from "../assets/images/midil.png"

export default function Spotlight() {
    return (
        <div>
            <Spotlights>
                <Header>
                    <HeaderLeft>
                        <LeftDiv>
                            <MainLogo src={Logo} alt="Logo" />
                        </LeftDiv>
                    </HeaderLeft>
                    <HeaderRight>
                        <HeaderNav>
                            <HeaderList>About</HeaderList>
                            <HeaderList>Contact Us</HeaderList>
                        </HeaderNav>
                    </HeaderRight>
                </Header>
                <Main>
                    <MainImagecontainer>
                        <MainImage src={Bottle} alt="" />
                    </MainImagecontainer>
                    <MainTitle>Spend the best time with best wine</MainTitle>
                    <MainButton>Read More</MainButton>
                </Main>
                <hr />
            </Spotlights>
        </div>
    )
}

const Spotlights = styled.div`
    background: url(${Sidecurve}) no-repeat;
    background-position: right 2px;
`;
const Header = styled.header`
    padding: 10px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const HeaderLeft = styled.div``;
const LeftDiv = styled.div``;
const MainLogo = styled.img``;
const HeaderRight = styled.div``;
const RightImage =  styled.img``;
const HeaderNav = styled.ul`
    display: flex;
    justify-content: space-between;
`;
const HeaderList = styled.li`
    margin-left: 10px;
    color: #fff;
    font-weight: 500;
    cursor: pointer;
`;
const Main = styled.div``;
const MainImagecontainer = styled.div`
    width: 50%;
    margin: 0 auto;
`;
const MainImage = styled.img``;
const MainTitle = styled.h2`
    font-size: 40px;
    text-align: center;
    font-size: 700;
`;
const MainButton = styled.button`
    margin: 0 auto;
    display: block;
    border: none;
    background: black;
    color: #fff;
    padding: 15px 30px;
    margin-bottom: 20px;
`;