import React from "react";
import styled from "styled-components";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch, useSelector } from "react-redux";
import { timePopUp } from "../../../redux/filter-components-slices/timeSlice";
import { noStaffIDPopUp } from "../../../redux/filter-components-slices/staffIDSlice";
import { noDepartmentPopUp } from "../../../redux/filter-components-slices/departmentSlice";
import { noActionOrConditionPopUp } from "../../../redux/filter-components-slices/actionOrConditionSlice";
import { noCategoryPopUp } from "../../../redux/filter-components-slices/categorySlice";
import { noVisitorPopUp } from "../../../redux/filter-components-slices/visitorSlice";
import { noTimeQuery } from "../../../redux/filterDataSlices/timeDataSlice";

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

// const Dropdown = styled.div`
//   /* display: ${({ show }) => (show ? "block" : "none")}; */
//   display: flex;
//   position: absolute;
//   z-index: 1;
//   top: 100%;
//   /* right: 0; */
//   left: 0;
//   background-color: #f1f1f1;
//   min-width: 160px;
//   box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
//   padding: 12px;
//   display: flex;
//   flex-direction: column;
//   gap: 5px;
//   border-radius: 5px;
//   width: 93%;
//   z-index: 3;
// `;

// const Text = styled.div`
//   /* font-weight: 700; */
//   cursor: pointer;
// `;

const TimeFilterButton = () => {
  const dispatch = useDispatch();

  const handleTime = () => {
    dispatch(timePopUp());
    dispatch(noStaffIDPopUp());
    dispatch(noDepartmentPopUp());
    dispatch(noActionOrConditionPopUp());
    dispatch(noVisitorPopUp());
    dispatch(noCategoryPopUp());
  };

  const handleClearData = () => {
    dispatch(noTimeQuery());
  };

  const icon = useSelector((state) => state.timeDataName);

  return (
    <SplitButtonContainer>
      <Outside>
        <Buttons>
          <Item>
            <Item onClick={handleClearData}>
              {icon.timeDataInitial && <ClearIcon />}
            </Item>{" "}
          </Item>
          <Button onClick={handleTime}>Time</Button>
        </Buttons>
      </Outside>
    </SplitButtonContainer>
  );
};

export default TimeFilterButton;
