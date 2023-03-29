import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  gap: 150px;
`;

const Button = styled.button`
  border-radius: 10px;
  width: 100px;
  color: white;
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
  font-weight: 800;
  background-color: #1a1aff;
`;

const DownButtons = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Button onClick={() => navigate("/categories")}>Back</Button>
      <Button>Summit</Button>
    </Container>
  );
};

export default DownButtons;
