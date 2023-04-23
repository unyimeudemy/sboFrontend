import React from "react";
import styled from "styled-components";
import TimeFilterButton from "./filterButtons/TimeFilterButton";
import ActionOrConditionFilterButton from "./filterButtons/ActionOrConditionFilterButton";
import CategoryFilterButton from "./filterButtons/CategoryFilterButton";
import DepartmentFilterButton from "./filterButtons/DepartmentFilterButton";
import StaffIDDFilterButton from "./filterButtons/StaffIDDilterButton";
import VisitorFilterButton from "./filterButtons/VisitorFilterButton";
import PlantLocationFilterButton from "./filterButtons/PlantLocationFilterButton";
import DepartmentStaffFilterButton from "./filterButtons/DepartmentStaffFilterButton";
import { useSelector } from "react-redux";

const MenuContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  /* width: 300px; */
  width: auto;
  border-radius: 5px;
  height: 35px;
  background-color: transparent;
  /* border: 1px solid #3ea6ff; */
  gap: 7px;
  padding: 2px;

  @media only screen and (min-width: 425px) {
    /* display: none; */
    width: 900px;
    height: 50px;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

const SBOFilterOptions = () => {
  const { currentUser } = useSelector((state) => state.user);

  const myDepartment = [
    "HSE Manager",
    "HSE Supervisor",
    "HSE Officer",
    "Supervisor",
  ];
  const staffID = ["HSE Manager", "HSE Supervisor", "HSE Officer"];
  const visitor = ["HSE Manager", "HSE Supervisor", "HSE Officer"];
  const plantLocation = ["HSE Manager"];

  const departmentPermission = (permitedRoles) => {
    return permitedRoles.includes(currentUser.data.role);
  };

  return (
    <MenuContainer>
      <TimeFilterButton />
      <ActionOrConditionFilterButton />
      <CategoryFilterButton />
      <DepartmentFilterButton />
      {departmentPermission(myDepartment) && <DepartmentStaffFilterButton />}
      {departmentPermission(staffID) && <StaffIDDFilterButton />}
      {departmentPermission(visitor) && <VisitorFilterButton />}
      {departmentPermission(plantLocation) && <PlantLocationFilterButton />}
    </MenuContainer>
  );
};

export default SBOFilterOptions;
