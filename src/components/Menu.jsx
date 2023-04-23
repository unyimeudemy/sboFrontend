import React, { useState } from "react";
import styled from "styled-components";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userSlice";
import LogoutPrompt from "./sboFormComponent/LogoutPrompt.jsx";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import gziLogo from "../images/gziLogo.svg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Container = styled.div`
  position: absolute;
  background-color: #ccdeff;
  height: 100vh;
  width: 200px;
  z-index: 2;
  top: 0px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.532);

  @media only screen and (min-width: 768px) {
    left: 0px;
  }
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

const Logo = styled.img`
  height: 50px;
  width: 70px;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
  border-radius: 5px;
  align-items: center;
`;

const Menu = ({ menu, setMenu }) => {
  const navigate = useNavigate();
  const [logoutPrompt, setLogoutPrompt] = useState(false);
  const query = useLocation().search;
  const { currentUser } = useSelector((state) => state.user);

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
    console.log(query);
    setMenu(!menu);
  };

  const handleLogOutPrompt = () => {
    setLogoutPrompt(true);
    // setMenu(!menu);
  };

  const navigateToHomeAfterLogOut = () => {
    navigate(`/home`);
    setMenu(!menu);
  };

  const handleMyProfile = () => {
    currentUser ? navigate("/myProfile") : navigate("/login");
    // navigate("/myProfile");
    setMenu(!menu);
  };

  const handleAboutUsPage = () => {
    navigate("/aboutUs");
    setMenu(!menu);
  };

  return (
    <>
      <Container>
        <Wrapper>
          <LogoWrapper>
            <Logo src={gziLogo} />
            <Item>
              <ArrowBackIcon onClick={() => setMenu(!menu)} />
            </Item>
          </LogoWrapper>
          <Item onClick={handleHome}>
            <HomeOutlinedIcon />
            Home
          </Item>
          <Item onClick={handleMyProfile}>
            <AccountCircleOutlinedIcon />
            My profile
          </Item>
          <Item onClick={handleSignUp}>
            <HowToRegOutlinedIcon />
            Sign Up
          </Item>
          <Item onClick={handleLogin}>
            <LoginOutlinedIcon />
            Login
          </Item>
          <Item onClick={handleLogOutPrompt}>
            <LogoutOutlinedIcon />
            Logout
          </Item>
          <Item onClick={handleAboutUsPage}>
            <InfoOutlinedIcon />
            About Us
          </Item>
        </Wrapper>
      </Container>
      {logoutPrompt && (
        <LogoutPrompt
          setLogoutPrompt={setLogoutPrompt}
          navigateToHomeAfterLogOut={navigateToHomeAfterLogOut}
          setMenu={setMenu}
          menu={menu}
        />
      )}
    </>
  );
};

export default Menu;
