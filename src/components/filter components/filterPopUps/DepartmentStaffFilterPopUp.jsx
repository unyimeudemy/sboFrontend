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
import { useDispatch, useSelector } from "react-redux";
import { departmentQuery } from "../../../redux/filterDataSlices/departmentDataSlice";
import { departmentStaffPopUp } from "../../../redux/filter-components-slices/departmentStaffSlice";
import { departmentStaffQuery } from "../../../redux/filterDataSlices/departmentStaffDataSlice";

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

const DepartmentStaffFilterPopUp = () => {
  const dispatch = useDispatch();

  const handleElectrical = () => {
    dispatch(departmentStaffQuery("Electrical"));
    dispatch(departmentStaffPopUp());
  };
  const handleMaintenance = () => {
    dispatch(departmentStaffQuery("Maintenance"));
    dispatch(departmentStaffPopUp());
  };
  const handleHumanResource = () => {
    dispatch(departmentStaffQuery("Human Resource"));
    dispatch(departmentStaffPopUp());
  };
  const handleQualityAssurance = () => {
    dispatch(departmentStaffQuery("Quality Assurance"));
    dispatch(departmentStaffPopUp());
  };
  const handleCPI = () => {
    dispatch(departmentStaffQuery("CPI"));
    dispatch(departmentStaffPopUp());
  };
  const handleHSE = () => {
    dispatch(departmentStaffQuery("Health Safety and Environment"));
    dispatch(departmentStaffPopUp());
  };
  const handleQC = () => {
    dispatch(departmentStaffQuery("Quality Control"));
    dispatch(departmentStaffPopUp());
  };
  const handlePPC = () => {
    dispatch(departmentStaffQuery("PPC"));
    dispatch(departmentStaffPopUp());
  };
  const handleToolRoom = () => {
    dispatch(departmentStaffQuery("Tool Room"));
    dispatch(departmentStaffPopUp());
  };
  const handleStore = () => {
    dispatch(departmentStaffQuery("Store"));
    dispatch(departmentStaffPopUp());
  };
  const handleSecurity = () => {
    dispatch(departmentStaffQuery("Security"));
    dispatch(departmentStaffPopUp());
  };
  const handleWarehouse = () => {
    dispatch(departmentStaffQuery("Warehouse"));
    dispatch(departmentStaffPopUp());
  };
  const handleProduction = () => {
    dispatch(departmentStaffQuery("Production"));
    dispatch(departmentStaffPopUp());
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

export default DepartmentStaffFilterPopUp;
