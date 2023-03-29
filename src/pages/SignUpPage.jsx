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
  height: auto;
  width: 250px;
  background-color: transparent;
  border: 2px solid #aecaff;
  padding: 20px;
  gap: 10px;

  @media only screen and (min-width: 625px) {
    height: auto;
    width: 500px;
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

const Textsm = styled.div`
  font-size: smaller;
  font-weight: 300;
`;

const Avatar = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 50px;
  background-color: #999;

  @media only screen and (min-width: 625px) {
    width: 74px;
    height: 74px;
  }
`;

const SignUpPage = () => {
  return (
    <Container>
      <Wrapper>
        <Text>SignUp as a new staff member</Text>
        <Avatar />
        <Input placeholder="Full name" />
        <Input placeholder="Email" />
        <Input placeholder="Staff ID" />
        <Input placeholder="Password" />
        <Input placeholder="Password confirm" />
        <Input placeholder="Plant Location" />
        <Input placeholder="Department" />
        <Input placeholder="Position" />
        <Textsm>If you are a contractor</Textsm>
        <Input placeholder="Company" />
        <Button>SignUp</Button>
      </Wrapper>
    </Container>
  );
};

export default SignUpPage;
