import React from "react";
import styled from "styled-components";
import Slide from "../components/Slide";
import { slideInfo } from "../APIs/endPoint";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  margin: 0px;
`;
const Wrapper = styled.div``;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #424656;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const H1 = styled.div``;

const Text = styled.div`
  @media only screen and (min-width: 425px) {
    display: none;
  }
`;

const Button = styled.button`
  border-radius: 10px;
  width: 100px;
  color: #424656;
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  @media only screen and (min-width: 425px) {
    display: none;
  }
`;

const Hr = styled.hr`
  margin: 80px 20px;
  border: 1px solid red;
`;

const LandingPage = () => {
  const navigate = useNavigate();

  const handleCategory = () => {
    navigate("/categories");
  };

  return (
    <Container>
      <Wrapper>
        <Body>
          <H1>Welcome to GZ Industries Safety Behavioural Observation page.</H1>
          {slideInfo?.map((info, i) => (
            <Slide key={i} text={info.text} buttonText={info.buttonText} />
          ))}
          <Text>
            Are you visitor? You can quickly fill an SBO with the button below
            and we will take care of the rest.{" "}
          </Text>
          <Button onClick={handleCategory}>Fill an SBO</Button>
          <Text>
            Are you a new staff member ? Sign up with the button below and wait
            for your account to be verified.
          </Text>
          <Button>Sign Up</Button>

          <Text>
            Are you a staff member ? Please login let's make GZI safe !!
          </Text>
          <Button>Log in</Button>
        </Body>
      </Wrapper>
    </Container>
  );
};

export default LandingPage;
