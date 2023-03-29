import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 20px;
  height: 200px;
  width: 250px;
  background-color: transparent;
  border: 2px solid #aecaff;
  padding: 20px;
  gap: 10px;

  @media only screen and (min-width: 625px) {
    height: 250px;
    width: 300px;
  }
`;

const Text = styled.div`
  font-weight: 800;
  color: #424656;
`;

const Input = styled.input`
  background-color: transparent;
  width: 100%;
  height: 20px;
  outline: none;
  color: #424656;
  border: 2px solid #aecaff;
  border-radius: 6px;
  padding: 5px;
`;

const Button = styled.button`
  border-radius: 10px;
  width: 100px;
  color: white;
  padding: 5px 15px;
  background-color: #3ea6ff;
  border: none;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const LoginPage = () => {
  return (
    <Container>
      <Wrapper>
        <Text>Welcome back</Text>
        <Input placeholder="Email or staff ID" />
        <Input placeholder="password" />
        <Button>Login</Button>
      </Wrapper>
    </Container>
  );
};

export default LoginPage;
