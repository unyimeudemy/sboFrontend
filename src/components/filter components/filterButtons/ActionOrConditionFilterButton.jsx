import React from "react";
import styled from "styled-components";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch, useSelector } from "react-redux";
import { actionOrConditionPopUp } from "../../../redux/filter-components-slices/actionOrConditionSlice";
import { noCategoryPopUp } from "../../../redux/filter-components-slices/categorySlice";
import { noDepartmentPopUp } from "../../../redux/filter-components-slices/departmentSlice";
import { noVisitorPopUp } from "../../../redux/filter-components-slices/visitorSlice";
import { noTimePopUp } from "../../../redux/filter-components-slices/timeSlice";
import { noStaffIDPopUp } from "../../../redux/filter-components-slices/staffIDSlice";
import { noTitleQuery } from "../../../redux/filterDataSlices/titleDataSlice";
import { noPlantLocationPopUp } from "../../../redux/filter-components-slices/plantLocationSlice";
import { noDepartmentStaffPopUp } from "../../../redux/filter-components-slices/departmentStaffSlice";
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
  background-color: #003cb3;
  border-radius: 5px;
  padding: 6px;
`;

const Button = styled.button`
  background-color: #003cb3;
  color: white;
  width: 150px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Item = styled.div`
  cursor: pointer;
`;

const ActionOrConditionFilterButton = () => {
  const dispatch = useDispatch();

  const handlePopUp = () => {
    dispatch(actionOrConditionPopUp());
    dispatch(noDepartmentPopUp());
    dispatch(noPlantLocationPopUp());
    dispatch(noDepartmentStaffPopUp());
    dispatch(noVisitorPopUp());
    dispatch(noTimePopUp());
    dispatch(noStaffIDPopUp());
    dispatch(noCategoryPopUp());
  };

  const handleClearData = () => {
    dispatch(noTitleQuery());
  };

  const icon = useSelector((state) => state.titleDataName);

  //   icon.titleDataInitial && console.log("✔✔", icon.titleDataInitial);

  return (
    <SplitButtonContainer>
      <Outside>
        <Buttons>
          <Item onClick={handleClearData}>
            {icon.titleDataInitial && <ClearIcon />}
          </Item>
          <Button onClick={handlePopUp}>Action/Condition</Button>
        </Buttons>
      </Outside>
    </SplitButtonContainer>
  );
};

export default ActionOrConditionFilterButton;
