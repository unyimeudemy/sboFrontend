import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Text = styled.div`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 800;
  cursor: pointer;
`;

const Subtitle = ({ subtitle }) => {
  const navigate = useNavigate();
  const handleSboForm = () => {
    navigate("/sboForm");
  };

  return <Text onClick={handleSboForm}>{`✔ ${subtitle}`}</Text>;
};

export default Subtitle;
