import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-content: center;
  justify-content: center;
`;

const Text = styled.textarea`
  width: 330px;
  height: 80px;
  background-color: transparent;
  padding: 10px;
`;

const H1 = styled.div`
  color: #424656;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const Title = styled.div``;

const SafeWorkPractise = () => {
  return (
    <Container>
      <Wrapper>
        <H1>
          <Title>SAFE WORK PRACTISE</Title>
        </H1>
        <Text></Text>
      </Wrapper>
    </Container>
  );
};

export default SafeWorkPractise;
