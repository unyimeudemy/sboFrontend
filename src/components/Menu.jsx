import React from "react";
import styled from "styled-components";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  position: absolute;
  background-color: #ccdeff;
  height: 100vh;
  width: 200px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
`;

const Item = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px;
  border-radius: 5px;

  :hover {
    cursor: pointer;
    background-color: #b4cdfb;
  }
`;

const Menu = ({ menu, setMenu }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(`/login`);
    setMenu(!menu);
  };

  const handleSignUp = () => {
    navigate(`/signUp`);
    setMenu(!menu);
  };

  const handleHome = () => {
    navigate(`/home`);
    setMenu(!menu);
  };

  return (
    <Container>
      <Wrapper>
        <Item onClick={handleHome}>
          <HomeOutlinedIcon />
          Home
        </Item>
        <Item onClick={handleSignUp}>
          <HowToRegOutlinedIcon />
          Sign Up
        </Item>
        <Item onClick={handleLogin}>
          <LoginOutlinedIcon />
          Login
        </Item>
        <Item>
          <LogoutOutlinedIcon />
          Logout
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
