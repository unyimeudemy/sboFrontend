import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: transparent;
  display: flex;
  align-content: center;
  justify-content: center;
  @media only screen and (max-width: 425px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  border-radius: 20px;
  height: 300px;
  width: 600px;

  @media only screen and (max-width: 625px) {
    height: 200px;
    width: 400px;
  }
`;

const Right = styled.div`
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: #3ea6ff;
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const Left = styled.div`
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border: 2px solid #3ea6ff;
  background-color: transparent;
  width: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-content: center;
  justify-content: center;
`;

const Text = styled.div``;

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
`;

const Btn = styled.div`
  display: flex;
  justify-content: center;
`;

const Slide = ({ text, buttonText }) => {
  return (
    <Container>
      <Wrapper>
        <Right>A picture should be here</Right>
        <Left>
          <Text>{text}</Text>
          <Btn>
            <Button>{buttonText}</Button>
          </Btn>
        </Left>
      </Wrapper>
    </Container>
  );
};

export default Slide;
