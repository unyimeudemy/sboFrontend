import ClearIcon from "@mui/icons-material/Clear";
import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { plantLocationPopUp } from "../../../redux/filter-components-slices/plantLocationSlice";
import { noVisitorPopUp } from "../../../redux/filter-components-slices/visitorSlice";
import { noTimePopUp } from "../../../redux/filter-components-slices/timeSlice";
import { noStaffIDPopUp } from "../../../redux/filter-components-slices/staffIDSlice";
import { noDepartmentPopUp } from "../../../redux/filter-components-slices/departmentSlice";
import { noActionOrConditionPopUp } from "../../../redux/filter-components-slices/actionOrConditionSlice";
import { noCategoryPopUp } from "../../../redux/filter-components-slices/categorySlice";
import { noPlantLocationQuery } from "../../../redux/filterDataSlices/plantLocationDataSlice";

// import { departmentChosen } from "../../../redux/departmentSlice";

const SplitButtonContainer = styled.div`
  /* display: inline-block; */
  display: flex;
  position: relative;
  justify-content: center;
  width: 300px;
`;

const Outside = styled.div`
  /* margin-left: auto; */
`;

const Buttons = styled.div`
  display: flex;
  gap: 1px;
  color: white;
  background-color: #1a1aff;
  border-radius: 5px;
  padding: 6px;
`;

const Button = styled.button`
  background-color: #1a1aff;
  color: white;
  /* padding: 6px; */
  font-size: 16px;
  width: 120px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Item = styled.div`
  cursor: pointer;
`;

const PlantLocationFilterButton = () => {
  const dispatch = useDispatch();

  const handlePopUp = () => {
    dispatch(plantLocationPopUp());
    dispatch(noVisitorPopUp());
    dispatch(noTimePopUp());
    dispatch(noStaffIDPopUp());
    dispatch(noDepartmentPopUp());
    dispatch(noActionOrConditionPopUp());
    dispatch(noCategoryPopUp());
  };

  const handleClearData = () => {
    dispatch(noPlantLocationQuery());
  };

  const icon = useSelector((state) => state.plantLocationDataName);
  //   console.log(icon);

  return (
    <SplitButtonContainer>
      <Outside>
        <Buttons>
          <Item>
            <Item onClick={handleClearData}>
              {icon.plantLocationDataInitial && <ClearIcon />}
            </Item>{" "}
          </Item>
          <Button onClick={handlePopUp}>Plant Location</Button>
        </Buttons>
      </Outside>
    </SplitButtonContainer>
  );
};

export default PlantLocationFilterButton;
