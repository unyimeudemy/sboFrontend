import React, { useState } from "react";
import styled from "styled-components";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useDispatch, useSelector } from "react-redux";
import { departmentChosen } from "../../redux/departmentSlice";

import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import BuildIcon from "@mui/icons-material/Build";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import PieChartIcon from "@mui/icons-material/PieChart";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import PaletteIcon from "@mui/icons-material/Palette";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import SecurityIcon from "@mui/icons-material/Security";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

const SplitButtonContainer = styled.div`
  /* display: inline-block; */
  display: flex;
  position: relative;
  justify-content: center;
  width: 300px;
  z-index: 1;
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

// const Item = styled.div`
//   cursor: pointer;
// `;

const Dropdown = styled.div`
  /* display: ${({ show }) => (show ? "block" : "none")}; */
  display: flex;
  position: absolute;
  z-index: 1;
  top: 100%;
  /* right: 0; */
  left: 0;
  /* background-color: #f1f1f1; */
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-radius: 5px;
  width: 93%;
  ///////////////////////////////
  position: absolute;
  /* top: 105px; */
  display: flex;
  /* align-content: center;
  justify-content: center; */

  @media only screen and (min-width: 768px) {
    position: absolute;
    /* top: 105px; */
    /* left: 570px; */
  }
`;

// const Text = styled.div`
//   /* font-weight: 700; */
//   cursor: pointer;
// `;

//////////////////////////////////////////////

const Container = styled.div`
  position: absolute;
  /* top: 105px; */
  display: flex;
  align-content: center;
  justify-content: center;
  right: 0px;
  left: 0px;

  @media only screen and (min-width: 768px) {
    position: absolute;
    /* top: 105px; */
  }
`;

const Wrapper = styled.div`
  border: 1px solid blue;
  height: 600px;
  width: 300px;
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

const SplitButton = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [department, setDepartment] = useState("Department responsible");
  const dispatch = useDispatch();

  //   const departmentResponsible = useSelector((state) => state.department);
  //   console.log(
  //     JSON.stringify(departmentResponsible).substring(25).replaceAll(`"}`, "")
  //   );

  const handleButtonClick = () => {
    setShowDropdown(!showDropdown);
  };

  //   const handleDeparment1 = () => {
  const handleElectrical = () => {
    setDepartment("Electrical");
    dispatch(departmentChosen("Electrical"));
    setShowDropdown(!showDropdown);
  };
  //   const handleDeparment2 = () => {
  const handleMaintenance = () => {
    setDepartment("Maintenance");
    dispatch(departmentChosen("Maintenance"));
    setShowDropdown(!showDropdown);
  };
  const handleHumanResource = () => {
    setDepartment("Human Resource");
    dispatch(departmentChosen("Human Resource"));
    setShowDropdown(!showDropdown);
  };
  const handleQualityAssurance = () => {
    setDepartment("Quality Assurance");
    dispatch(departmentChosen("Quality Assurance"));
    setShowDropdown(!showDropdown);
  };
  const handleCPI = () => {
    setDepartment("CPI");
    dispatch(departmentChosen("CPI"));
    setShowDropdown(!showDropdown);
  };
  const handleHSE = () => {
    setDepartment("Health Safety & Environment");
    dispatch(departmentChosen("Health Safety and Environment"));
    setShowDropdown(!showDropdown);
  };
  const handleQC = () => {
    setDepartment("Quality Control");
    dispatch(departmentChosen("Quality Control"));
    setShowDropdown(!showDropdown);
  };
  const handleDeparment8 = () => {
    setDepartment("Washer");
    dispatch(departmentChosen("Washer"));
    setShowDropdown(!showDropdown);
  };
  const handlePPC = () => {
    setDepartment("PPC");
    dispatch(departmentChosen("PPC"));
    setShowDropdown(!showDropdown);
  };
  const handleToolRoom = () => {
    setDepartment("Tool room");
    dispatch(departmentChosen("Tool Room"));
    setShowDropdown(!showDropdown);
  };
  const handleStore = () => {
    setDepartment("Store");
    dispatch(departmentChosen("Store"));
    setShowDropdown(!showDropdown);
  };
  const handleSecurity = () => {
    setDepartment("Security");
    dispatch(departmentChosen("Security"));
    setShowDropdown(!showDropdown);
  };
  const handleWarehouse = () => {
    setDepartment("Warehouse");
    dispatch(departmentChosen("Warehouse"));
    setShowDropdown(!showDropdown);
  };
  const handleProduction = () => {
    setDepartment("Operations");
    dispatch(departmentChosen("Production"));
    setShowDropdown(!showDropdown);
  };

  return (
    <SplitButtonContainer>
      <Outside>
        <Buttons onClick={handleButtonClick}>
          <Item>
            {showDropdown ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
          </Item>
          <Button>{department}</Button>
        </Buttons>
        {showDropdown && (
          <Dropdown>
            {/* ///////////////////////////////////////////////// */}
            <Container>
              <Wrapper>
                <Item onClick={handleElectrical}>
                  <ElectricalServicesIcon />
                  <Text>Electrical</Text>
                </Item>
                <Item onClick={handleMaintenance}>
                  <BuildIcon />
                  <Text>Maintenance</Text>
                </Item>
                <Item onClick={handleHumanResource}>
                  <PeopleAltIcon />
                  <Text>Human Resource</Text>
                </Item>
                <Item onClick={handleQualityAssurance}>
                  <SignalCellularAltIcon />
                  <Text>Quality Assurance</Text>
                </Item>
                <Item onClick={handleCPI}>
                  <PieChartIcon />
                  <Text>CPI</Text>
                </Item>
                <Item onClick={handleHSE}>
                  <LocalHospitalIcon />
                  <Text>Health Safety and Environment</Text>
                </Item>
                <Item onClick={handleQC}>
                  <EqualizerIcon />
                  <Text>Quality Control</Text>
                </Item>
                <Item onClick={handlePPC}>
                  <PaletteIcon />
                  <Text>PPC</Text>
                </Item>
                <Item onClick={handleToolRoom}>
                  <PrecisionManufacturingIcon />
                  <Text>Tool Room</Text>
                </Item>
                <Item onClick={handleStore}>
                  <WarehouseIcon />
                  <Text>Store</Text>
                </Item>
                <Item onClick={handleSecurity}>
                  <SecurityIcon />
                  <Text>Security</Text>
                </Item>
                <Item onClick={handleWarehouse}>
                  <WarehouseIcon />
                  <Text>Warehouse</Text>
                </Item>
                <Item onClick={handleProduction}>
                  <ManageAccountsIcon />
                  <Text>Production</Text>
                </Item>
              </Wrapper>
            </Container>

            {/* ////////////////////////////////////// */}
            {/* <Text onClick={handleDeparment1}>Electrical</Text>
            <Text onClick={handleDeparment2}>Maintenance</Text>
            <Text onClick={handleDeparment3}>Human Resource</Text>
            <Text onClick={handleDeparment4}>Quality Assurance</Text>
            <Text onClick={handleDeparment5}>CPI</Text>
            <Text onClick={handleDeparment6}>Health Safety & Environment</Text>
            <Text onClick={handleDeparment7}>Quality Control</Text>
            <Text onClick={handleDeparment8}>Washer</Text>
            <Text onClick={handleDeparment9}>PPC</Text>
            <Text onClick={handleDeparment10}>Tool room</Text>
            <Text onClick={handleDeparment11}>Store</Text>
            <Text onClick={handleDeparment12}>Security</Text>
            <Text onClick={handleDeparment13}>Warehouse</Text>
            <Text onClick={handleDeparment14}>Operations</Text> */}
          </Dropdown>
        )}
      </Outside>
    </SplitButtonContainer>
  );
};

export default SplitButton;
