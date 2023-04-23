import React from "react";
import styled from "styled-components";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch, useSelector } from "react-redux";
import { categoryPopUp } from "../../../redux/filter-components-slices/categorySlice";
import { noActionOrConditionPopUp } from "../../../redux/filter-components-slices/actionOrConditionSlice";
import { noDepartmentPopUp } from "../../../redux/filter-components-slices/departmentSlice";
import { noVisitorPopUp } from "../../../redux/filter-components-slices/visitorSlice";
import { noTimePopUp } from "../../../redux/filter-components-slices/timeSlice";
import { noStaffIDPopUp } from "../../../redux/filter-components-slices/staffIDSlice";
import { noCategoryQuery } from "../../../redux/filterDataSlices/categoryDataSlice";

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
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Item = styled.div`
  cursor: pointer;
`;

const CategoryFilterButton = () => {
  const dispatch = useDispatch();

  const handlePopUp = () => {
    dispatch(noActionOrConditionPopUp());
    dispatch(noDepartmentPopUp());
    dispatch(noVisitorPopUp());
    dispatch(noTimePopUp());
    dispatch(noStaffIDPopUp());
    dispatch(categoryPopUp());
  };

  const handleClearData = () => {
    dispatch(noCategoryQuery());
  };

  const icon = useSelector((state) => state.categoryDataName);

  return (
    <SplitButtonContainer>
      <Outside>
        <Buttons>
          <Item>
            <Item onClick={handleClearData}>
              {icon.categoryDataInitial && <ClearIcon />}
            </Item>
          </Item>
          <Button onClick={handlePopUp}>category</Button>
        </Buttons>
      </Outside>
    </SplitButtonContainer>
  );
};

export default CategoryFilterButton;
