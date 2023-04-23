import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import Header from "../components/Header";
import warehouse from "../images/warehouse.jpg";
import safety1 from "../images/safety1.png";
import safety2 from "../images/safety2.jfif";
import safety3 from "../images/safety3.avif";

import teamSBO2 from "../images/teamSBO2.png";
import latestEvent from "../images/latestEvent.jfif";
import AllSBO from "../images/AllSBO.jfif";

import CommentIcon from "@mui/icons-material/Comment";
import TelegramIcon from "@mui/icons-material/Telegram";

const Container = styled.div`
  margin: 0px;
`;
const Wrapper = styled.div``;

const Button = styled.button`
  border-radius: 10px;
  width: 200px;
  color: white;
  padding: 5px 15px;
  background-color: #003cb3;
  border: 1px solid blue;
  font-weight: 900;
  font-size: large;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  box-shadow: 0px 6px 10px hsl(0, 0%, 100%);

  @media only screen and (max-width: 768px) {
    width: 120px;
    padding: 5px 15px;
    font-size: medium;
  }
`;

const ButtonFloat = styled.button`
  border-radius: 10px;
  width: 150px;
  height: 70px;
  color: white;
  padding: 5px 15px;
  background-color: #003cb3;
  border: 1px solid blue;
  font-weight: 900;
  font-size: large;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: 4px solid white;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);

  @media only screen and (max-width: 768px) {
    border-radius: 100%;
    width: 55px;
    height: 55px;
    font-size: medium;
    font-weight: 600;
  }
`;

const Upper = styled.div`
  height: 400px;
  width: auto;
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  background: linear-gradient(
      to right,
      rgba(236, 236, 246, 0.723),
      rgba(0, 0, 0, 0)
    ),
    url(${warehouse});

  @media only screen and (max-width: 768px) {
    height: 300px;
  }
`;

const Middle = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 3px;
    margin-top: 5px;
  }
`;

// const Bottom = styled.div``;

const Content = styled.div`
  background-color: transparent;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 100px;
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;

  @media only screen and (max-width: 768px) {
    margin-left: 20px;
  }
`;

const Text = styled.div`
  color: #003cb3;
  font-size: 80px;
  font-weight: 900;

  @media only screen and (max-width: 768px) {
    font-size: 40px;
    overflow-wrap: break-word;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 30px;

  @media only screen and (max-width: 768px) {
    gap: 10px;
  }
`;

const ButtonFloating = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media only screen and (max-width: 768px) {
    right: 20px;
    bottom: 20px;
    gap: 15px;
  }
`;

const QuoteCard1 = styled.div`
  height: 300px;
  width: 300px;
  background-color: #ccddff;
  /* padding: 15px; */
  border-radius: 10px;
  border: 1px solid blue;
  margin: 20px;

  @media only screen and (max-width: 768px) {
    height: 230px;
    width: 270px;
    margin: 7px;
  }
`;

const QuoteCard2 = styled.div`
  height: 300px;
  width: 300px;
  background-color: #ccddff;
  /* padding: 15px; */
  border-radius: 10px;
  border: 1px solid blue;
  margin: 20px;

  @media only screen and (max-width: 768px) {
    height: 230px;
    width: 270px;
    margin: 7px;
  }
`;

const QuoteCard3 = styled.div`
  height: 300px;
  width: 300px;
  background-color: #ccddff;
  /* padding: 15px; */
  border-radius: 10px;
  border: 1px solid blue;
  margin: 20px;

  @media only screen and (max-width: 768px) {
    height: 230px;
    width: 270px;
    margin: 10px;
  }
`;

const Top1 = styled.div`
  background-image: url(${safety1});
  height: 70%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-repeat: no-repeat;
  background-size: 300px 250px;
  width: 100%;
`;
const Top2 = styled.div`
  background-image: url(${safety2});
  height: 70%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-repeat: no-repeat;
  background-size: 300px 250px;
`;
const Top3 = styled.div`
  background-image: url(${safety3});
  height: 70%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-repeat: no-repeat;
  background-size: 300px 250px;
`;

const Bottom = styled.div`
  background-color: transparent;
  height: 70%;
  margin-top: 5px;
  display: flex;

  align-content: center;
  justify-content: center;
  padding: 8px;
`;

const Item = styled.div`
  margin: 5px;
  display: flex;
  justify-content: center;
  color: #003cb3;
  font-weight: 900;
  gap: 10px;
  font-family: cursive;
`;

const BottomLast = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RightText = styled.div`
  height: 200px;
  width: auto;
  display: flex;
  cursor: pointer;
  background: linear-gradient(to right, hsl(220, 100%, 30%), rgba(0, 0, 0, 0));
  justify-content: space-around;

  transition: all 0.2s ease-in-out;

  &:hover {
    height: 230px;
  }

  @media only screen and (max-width: 768px) {
    height: 60px;

    &:hover {
      height: 70px;
    }
  }
`;

const LeftText = styled.div`
  height: 200px;
  width: auto;
  display: flex;
  cursor: pointer;
  justify-content: space-around;
  background: linear-gradient(
    to left,
    hsla(220, 100%, 30%, 0.773),
    rgba(0, 0, 0, 0)
  );

  transition: all 0.2s ease-in-out;

  &:hover {
    height: 230px;
  }

  @media only screen and (max-width: 768px) {
    height: 60px;

    &:hover {
      height: 70px;
    }
  }
`;

const Info = styled.div`
  color: white;
  font-size: 40px;
  font-weight: 900;
  margin-left: auto;
  padding: 10px;

  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const InfoR = styled.div`
  color: white;
  font-size: 40px;
  font-weight: 900;
  margin-right: auto;
  padding: 10px;

  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const FloatText = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Picture = styled.img`
  width: 400px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const LandingPage = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  const handleCategory = () => {
    currentUser === null ? navigate("/login") : navigate("/categories");
  };

  console.log("💥💥", currentUser);

  return (
    <>
      <Container>
        <Header />
        <Wrapper>
          <Upper>
            <Content>
              <Text>Have you filled an SBO?</Text>
              {currentUser === null && (
                <Buttons>
                  <Button onClick={() => navigate(`/login`)}>Log in</Button>
                  <Button onClick={() => navigate(`/signUp`)}>Sign up</Button>
                </Buttons>
              )}
            </Content>
          </Upper>
          <Middle>
            <QuoteCard1>
              <Top1></Top1>
              <Bottom>
                <Item>"We need you, work safely"</Item>
              </Bottom>
            </QuoteCard1>
            <QuoteCard2>
              <Top2></Top2>
              <Bottom>
                <Item>"Safety is gainful, accident is painful"</Item>
              </Bottom>
            </QuoteCard2>
            <QuoteCard3>
              <Top3></Top3>
              <Bottom>
                <Item>"Safety is free, use plenty of it"</Item>
              </Bottom>
            </QuoteCard3>
          </Middle>
          <BottomLast>
            <RightText>
              <InfoR>All SBOs in one Place</InfoR>
              <Picture src={AllSBO}></Picture>
            </RightText>
            <LeftText>
              <Picture src={latestEvent}></Picture>
              <Info>Recent events</Info>
            </LeftText>
            <RightText>
              <InfoR>Manage SBOs for your team</InfoR>
              <Picture src={teamSBO2}></Picture>
            </RightText>
          </BottomLast>
        </Wrapper>
      </Container>
      <ButtonFloating>
        <ButtonFloat onClick={handleCategory}>
          <CommentIcon />
          <FloatText>Fill an SBO</FloatText>
        </ButtonFloat>
        <ButtonFloat onClick={() => navigate("/feedback")}>
          <TelegramIcon />
          <FloatText>Feedback</FloatText>
        </ButtonFloat>
      </ButtonFloating>
    </>
  );
};

export default LandingPage;
