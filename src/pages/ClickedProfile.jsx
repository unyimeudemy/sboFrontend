import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div``;

const ClickedProfile = ({ staff }) => {
  const clickedProfile = useSelector((state) => state.ClickedProfile);
  console.log(clickedProfile);

  return <Container>ClickedProfile</Container>;
};

export default ClickedProfile;
