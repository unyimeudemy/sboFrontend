import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CommentIcon from "@mui/icons-material/Comment";
import TelegramIcon from "@mui/icons-material/Telegram";

const ButtonFloating = styled.div`
  position: fixed;
  bottom: 60px;
  right: 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media only screen and (max-width: 768px) {
    right: 20px;
    gap: 15px;
    bottom: 60px;
  }
`;

const ButtonFloat = styled.button`
  border-radius: 10px;
  width: 130px;
  height: 55px;
  color: white;
  padding: 5px 15px;
  background-color: #003cb3;
  border: 1px solid blue;
  font-weight: 900;
  font-size: medium;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: 4px solid white;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);

  @media only screen and (max-width: 768px) {
    border-radius: 100%;
    width: 55px;
    height: 55px;
    font-size: medium;
    font-weight: 600;
  }
`;

const FloatText = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

// PLEASE NOTE
// FLOAT BUTTON ON LANDING PAGE IS DEFINED ON LANDING PAGE WHILE FLOAT
// BUTTON ON OTHER PAGES IS A SEPARATE COMPONENT

const FloatingButtons = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  const handleCategory = () => {
    console.log(currentUser);
    currentUser === null ? navigate("/login") : navigate("/categories");
  };

  return (
    <ButtonFloating>
      <ButtonFloat onClick={handleCategory}>
        <CommentIcon />
        <FloatText>Fill an SBO</FloatText>
      </ButtonFloat>
      <ButtonFloat onClick={() => navigate("/feedback")}>
        <TelegramIcon />
        <FloatText>Feedback</FloatText>
      </ButtonFloat>
    </ButtonFloating>
  );
};

export default FloatingButtons;
