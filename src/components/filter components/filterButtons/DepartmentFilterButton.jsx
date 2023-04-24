import React from "react";
import styled from "styled-components";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch, useSelector } from "react-redux";
import { departmentPopUp } from "../../../redux/filter-components-slices/departmentSlice";
import { noActionOrConditionPopUp } from "../../../redux/filter-components-slices/actionOrConditionSlice";
import { noCategoryPopUp } from "../../../redux/filter-components-slices/categorySlice";
import { noVisitorPopUp } from "../../../redux/filter-components-slices/visitorSlice";
import { noTimePopUp } from "../../../redux/filter-components-slices/timeSlice";
import { noStaffIDPopUp } from "../../../redux/filter-components-slices/staffIDSlice";
import { noDepartmentQuery } from "../../../redux/filterDataSlices/departmentDataSlice";
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
  /* padding: 6px; */
  font-size: 16px;
  border: none;
  width: 200px;
  border-radius: 5px;
  cursor: pointer;
`;

const Item = styled.div`
  cursor: pointer;
`;

const DepartmentFilterButton = () => {
  const dispatch = useDispatch();

  const handlePopUp = () => {
    dispatch(departmentPopUp());
    dispatch(noActionOrConditionPopUp());
    dispatch(noVisitorPopUp());
    dispatch(noTimePopUp());
    dispatch(noStaffIDPopUp());
    dispatch(noCategoryPopUp());
    dispatch(noPlantLocationPopUp());
    dispatch(noDepartmentStaffPopUp());
  };

  const handleClearData = () => {
    dispatch(noDepartmentQuery());
  };

  const icon = useSelector((state) => state.departmentDataName);

  return (
    <SplitButtonContainer>
      <Outside>
        <Buttons>
          <Item>
            <Item onClick={handleClearData}>
              {icon.departmentDataInitial && <ClearIcon />}
            </Item>
          </Item>
          <Button onClick={handlePopUp}>Department Responsible</Button>
        </Buttons>
      </Outside>
    </SplitButtonContainer>
  );
};

export default DepartmentFilterButton;
