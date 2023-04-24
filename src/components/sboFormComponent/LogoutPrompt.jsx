import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #d9d9d95b;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  z-index: 3;
`;

const Wrapper = styled.div`
  width: 250px;
  height: 90px;
  background-color: #e6eeff;
  color: black;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  border-radius: 5px;
  border: #002b80 solid 1px;
  /* top: 150px; */
  right: 0px;
  align-items: center;
  justify-content: center;
`;

const H1 = styled.div`
  color: #002b80;
  font-weight: 800;
`;

const Buttons = styled.div`
  display: flex;
  gap: 5px;
`;

const Button1 = styled.button`
  border-radius: 10px;
  width: 100px;
  color: white;
  padding: 5px 15px;
  background-color: #002b80;
  border: 1px solid #002b80;
  font-weight: 700;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const Button2 = styled.button`
  border-radius: 10px;
  width: 100px;
  color: #002b80;
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #002b80;
  font-weight: 700;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const LogoutPrompt = ({
  setLogoutPrompt,
  navigateToHomeAfterLogOut,
  setMenu,
  menu,
}) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    setLogoutPrompt(false);
    navigateToHomeAfterLogOut();
  };

  const handleLogoutCancel = () => {
    setLogoutPrompt(false);
    setMenu(!menu);
  };

  return (
    <Container>
      <Wrapper>
        <H1>Sure you want to log out ?</H1>
        <Buttons>
          <Button1 onClick={handleLogoutCancel}>Cancel</Button1>
          <Button2 onClick={handleLogout}>Logout</Button2>
        </Buttons>
      </Wrapper>
    </Container>
  );
};

export default LogoutPrompt;
