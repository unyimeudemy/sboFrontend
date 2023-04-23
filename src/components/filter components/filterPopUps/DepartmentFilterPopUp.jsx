import React from "react";
import styled from "styled-components";
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
import { useDispatch } from "react-redux";
import { departmentQuery } from "../../../redux/filterDataSlices/departmentDataSlice";
import { departmentPopUp } from "../../../redux/filter-components-slices/departmentSlice";

const Container = styled.div`
  position: absolute;
  top: 195px;
  display: flex;
  align-content: center;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    position: absolute;
    top: 135px;
    left: 570px;
  }
`;

const Wrapper = styled.div`
  border: 1px solid blue;
  height: 600px;
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

const DepartmentFilterPopUp = () => {
  const dispatch = useDispatch();

  const handleElectrical = () => {
    dispatch(departmentQuery("Electrical"));
    dispatch(departmentPopUp());
  };
  const handleMaintenance = () => {
    dispatch(departmentQuery("Maintenance"));
    dispatch(departmentPopUp());
  };
  const handleHumanResource = () => {
    dispatch(departmentQuery("Human Resource"));
    dispatch(departmentPopUp());
  };
  const handleQualityAssurance = () => {
    dispatch(departmentQuery("Quality Assurance"));
    dispatch(departmentPopUp());
  };
  const handleCPI = () => {
    dispatch(departmentQuery("CPI"));
    dispatch(departmentPopUp());
  };
  const handleHSE = () => {
    dispatch(departmentQuery("Health Safety and Environment"));
    dispatch(departmentPopUp());
  };
  const handleQC = () => {
    dispatch(departmentQuery("Quality Control"));
    dispatch(departmentPopUp());
  };
  const handlePPC = () => {
    dispatch(departmentQuery("PPC"));
    dispatch(departmentPopUp());
  };
  const handleToolRoom = () => {
    dispatch(departmentQuery("Tool Room"));
    dispatch(departmentPopUp());
  };
  const handleStore = () => {
    dispatch(departmentQuery("Store"));
    dispatch(departmentPopUp());
  };
  const handleSecurity = () => {
    dispatch(departmentQuery("Security"));
    dispatch(departmentPopUp());
  };
  const handleWarehouse = () => {
    dispatch(departmentQuery("Warehouse"));
    dispatch(departmentPopUp());
  };
  const handleProduction = () => {
    dispatch(departmentQuery("Production"));
    dispatch(departmentPopUp());
  };

  return (
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
  );
};

export default DepartmentFilterPopUp;
