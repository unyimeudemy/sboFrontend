import React from "react";
import styled from "styled-components";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import EngineeringIcon from "@mui/icons-material/Engineering";
import ConstructionIcon from "@mui/icons-material/Construction";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FactoryIcon from "@mui/icons-material/Factory";
import { useDispatch } from "react-redux";
import { categoryQuery } from "../../../redux/filterDataSlices/categoryDataSlice";
import { categoryPopUp } from "../../../redux/filter-components-slices/categorySlice";

// import { useState, useEffect } from "react";

const Container = styled.div`
  position: absolute;
  top: 195px;
  display: flex;
  align-content: center;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    position: absolute;
    top: 135px;
    left: 310px;
  }
`;

const Wrapper = styled.div`
  border: 1px solid blue;
  height: 300px;
  width: 260px;
  background-color: #ccddff;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  border-radius: 10px;
  padding: 15px;
  gap: 10px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.25);
`;

const Item = styled.div`
  display: flex;
  gap: 10px;
  border: 1px solid blue;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;

  :hover {
    cursor: pointer;
    background-color: #6666ff;
  }
`;

const Text = styled.div``;

const CategoryFilterPopUp = () => {
  const dispatch = useDispatch();

  const handlePeople = () => {
    dispatch(categoryQuery("Peoples Initial Reaction"));
    dispatch(categoryPopUp());
  };

  const handleBody = () => {
    dispatch(categoryQuery("Body Position"));
    dispatch(categoryPopUp());
  };

  const handlePPE = () => {
    dispatch(categoryQuery("Personal Protective Equipment"));
    dispatch(categoryPopUp());
  };

  const handleTools = () => {
    dispatch(categoryQuery("Tools and Equipment"));
    dispatch(categoryPopUp());
  };

  const handleProcedure = () => {
    dispatch(categoryQuery("Procedures"));
    dispatch(categoryPopUp());
  };

  const handleWork = () => {
    dispatch(categoryQuery("Work Environment"));
    dispatch(categoryPopUp());
  };

  return (
    <Container>
      <Wrapper>
        <Item onClick={handlePeople}>
          <SentimentSatisfiedAltIcon />
          <Text>People's Initial Reaction</Text>
        </Item>
        <Item onClick={handleBody}>
          <AirlineSeatReclineExtraIcon />
          <Text>Body Position</Text>
        </Item>
        <Item onClick={handlePPE}>
          <EngineeringIcon />
          <Text>Personal Protective Equipment</Text>
        </Item>
        <Item onClick={handleTools}>
          <ConstructionIcon />
          <Text>Tools and Equipment</Text>
        </Item>
        <Item onClick={handleProcedure}>
          <FormatListBulletedIcon />
          <Text>Procedures</Text>
        </Item>
        <Item onClick={handleWork}>
          <FactoryIcon />
          <Text>Work Environment</Text>
        </Item>
      </Wrapper>
    </Container>
  );
};

export default CategoryFilterPopUp;
