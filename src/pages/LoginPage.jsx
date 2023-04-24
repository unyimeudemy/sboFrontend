import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import LOGO from "../images/LOGO.svg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

const Wrapper = styled.div``;

const BackButton = styled.div`
  display: flex;
  background-color: transparent;
  width: 100%;
  height: 20px;
  /* margin-bottom: auto; */
`;

const Item = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 10px;
  font-weight: 700;
  color: #002b80;
  cursor: pointer;
`;

const WrapperInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  height: 200px;
  width: 250px;
  background-color: transparent;
  border: 1px solid #002b80;
  padding: 20px;
  gap: 10px;
  margin-top: 30px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.27);

  @media only screen and (min-width: 625px) {
    height: 250px;
    width: 300px;
  }
`;

const Text = styled.div`
  font-weight: 800;
  color: #002b80;
`;

const Input = styled.input`
  background-color: transparent;
  width: 100%;
  height: 20px;
  outline: none;
  color: #424656;
  border: 1px solid #002b80;
  border-radius: 6px;
  padding: 5px;
`;

const Button = styled.button`
  border-radius: 10px;
  width: 100px;
  color: white;
  padding: 5px 15px;
  border: 1px solid blue;
  background-color: #002b80;
  /* border: none; */
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-weight: 700;
`;

const Logo = styled.img`
  height: 50px;
  width: 70px;

  /* @media only screen and (min-width: 768px) {
    position: relative;
    /* margin-right: 20px; */
  /* }  */
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
      const res = await axios.post("http://localhost:8080/api/auth/login", {
        //   const res = await axios.post(
        //     "https://sbobackend.onrender.com/api/auth/login",
        //     {
        email,
        password,
      });

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
        <BackButton>
          <Item onClick={() => navigate("/home")}>
            <ArrowBackIcon />
            Home
          </Item>
        </BackButton>
        <WrapperInner>
          <Logo src={LOGO} />
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
        </WrapperInner>
      </Wrapper>
    </Container>
  );
};

export default LoginPage;
