import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";

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
  border: 1px solid blue;
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
  border: 1px solid blue;
  border-radius: 6px;
  padding: 5px;
`;

const Button = styled.button`
  border-radius: 10px;
  width: 100px;
  color: white;
  padding: 5px 15px;
  border: 1px solid blue;
  background-color: #3ea6ff;
  /* border: none; */
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    console.log("login clicked");
    try {
      //   const res = await axios.post("http://localhost:8080/api/auth/login", {
      const res = await axios.post(
        "http://sbobackend.onrender.com/api/auth/login",
        {
          email,
          password,
        }
      );

      //   console.log(res.data);
      navigate("/");
      dispatch(loginSuccess(res.data));
    } catch (err) {
      console.log(err.message);
      dispatch(loginFailure());
    }
  };

  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);

  return (
    <Container>
      <Wrapper>
        <Text>Welcome back</Text>
        <Input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email or staff ID"
        />
        <Input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <Button onClick={handleLogin}>Login</Button>
      </Wrapper>
    </Container>
  );
};

export default LoginPage;
