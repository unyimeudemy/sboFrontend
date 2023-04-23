import React from "react";
import styled from "styled-components";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useDispatch } from "react-redux";
import { plantLocationQuery } from "../../../redux/filterDataSlices/plantLocationDataSlice";
import { noPlantLocationPopUp } from "../../../redux/filter-components-slices/plantLocationSlice";

const Container = styled.div`
  position: absolute;
  top: 195px;
  display: flex;
  align-content: center;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    position: absolute;
    top: 135px;
    left: 860px;
  }

  /* @media only screen and (min-width: 1024px) {
    position: absolute;
    top: 140px;
    left: 860px;
  } */
`;

const Wrapper = styled.div`
  border: 1px solid blue;
  height: 150px;
  width: 250px;
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

const PlantLocationFilterPopUp = () => {
  const dispatch = useDispatch();

  const handleAba = () => {
    dispatch(plantLocationQuery("Aba plant"));
    dispatch(noPlantLocationPopUp());
  };

  const handleAgbara = () => {
    dispatch(plantLocationQuery("Agbara plant"));
    dispatch(noPlantLocationPopUp());
  };

  const handleSA = () => {
    dispatch(plantLocationQuery("South African plant"));
    dispatch(noPlantLocationPopUp());
  };

  return (
    <Container>
      <Wrapper>
        <Item onClick={handleAba}>
          <LocationOnIcon />
          <Text>Aba Plant</Text>
        </Item>
        <Item onClick={handleAgbara}>
          <LocationOnIcon />
          <Text>Agbara Plant</Text>
        </Item>
        <Item onClick={handleSA}>
          <LocationOnIcon />
          <Text>South African Plant</Text>
        </Item>
      </Wrapper>
    </Container>
  );
};

export default PlantLocationFilterPopUp;
