import React from "react";
import styled from "styled-components";
import axios from "axios";
import TimeFilterPopUp from "./filterPopUps/TimeFilterPopUp";
import { useSelector, useDispatch } from "react-redux";
import ActionOrConditionFilterPopUp from "./filterPopUps/ActionOrConditionFilterPopUp";
import CategoryFilterPopUp from "./filterPopUps/CategoryFilterPopUp";
import DepartmentFilterPopUp from "./filterPopUps/DepartmentFilterPopUp";
import StaffIDFilterPopUp from "./filterPopUps/StaffIDFilterPopUp";
import VisitorFilterPopUp from "./filterPopUps/VisitorFilterPopUp";
import CachedIcon from "@mui/icons-material/Cached";
// import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SBOCard from "../SBOCard";
import FilterButton from "./filterButtons/FilterButton";
import SBONotFoundPage from "../../pages/SBONotFoundPage";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { yesSBO } from "../../redux/SBOSlice";
import {
  noRefresh,
  yesRefresh,
} from "../../redux/filter-components-slices/refreshSBOSlice";
import DepartmentStaffFilterPopUp from "./filterPopUps/DepartmentStaffFilterPopUp";
import PlantLocationFilterPopUp from "./filterPopUps/PlantLocationPopUp";

const Container = styled.div``;

const Hr = styled.hr`
  margin: 3px 10px;
  border: 0.5px solid #b3b3b3;
`;

const PopUp = styled.div`
  position: absolute;
  top: 130px;
  left: 150px;
`;

const Others = styled.div`
  display: flex;
  gap: 100px;
  justify-content: space-around;
  align-items: center;
`;

const Total = styled.div`
  font-weight: 900;
  color: blue;
`;

const FarRight = styled.div`
  display: flex;
  gap: 3px;
`;

const Button = styled.button`
  border-radius: 10px;
  width: 50px;
  color: white;
  padding: 5px 15px;
  background-color: blue;
  border: 1px solid blue;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
`;

const Container2Outer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;

const Container2 = styled.div`
  @media only screen and (min-width: 425px) {
    position: absolute;
    display: flex;
    gap: 10px;
    background-color: red;
    width: 900px;
    height: 7px;
    justify-content: space-between;
    /* margin-top: 10px; */
  }
`;

const Position = styled.div`
  height: 3px;
  width: 30px;
  background-color: white;
`;

const Divider = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [refreshedSBOs, setRefreshedSBOs] = useState([]);
  const { timeBolean } = useSelector((state) => state.time);

  const { actionOrConditionBolean } = useSelector(
    (state) => state.actionOrCondition
  );

  const { categoryBolean } = useSelector((state) => state.category);
  const { departmentBolean } = useSelector((state) => state.departmentPopUp);
  const { departmentStaffBolean } = useSelector(
    (state) => state.departmentStaffPopUp
  );
  const { staffIDBolean } = useSelector((state) => state.staffID);

  const { visitorBolean } = useSelector((state) => state.visitor);
  const { plantLocationBolean } = useSelector((state) => state.plantLocation);
  const { fetchedSBOs } = useSelector((state) => state.SBO);
  const SBOs = fetchedSBOs.data;
  //   let refreshedData;

  //   console.log("❤❤", plantLocationBolean);

  const { currentUser } = useSelector((state) => state.user);
  const token = currentUser?.token;

  dispatch(yesRefresh(false));
  const refreshedSBOPage = useSelector((state) => state.refresh);

  const handleRefresh = async () => {
    dispatch(yesRefresh(true));
    try {
      //   const res = await axios.get(`http://localhost:8080/api/sbo/allSBOs`, {
      const res = await axios.get(
        `https://sbobackend.onrender.com/api/sbo/allSBOs`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      setRefreshedSBOs(res.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  //   console.log("💥", refreshedSBOPage);
  //   console.log(refreshedSBOs);

  return (
    <>
      <Container>
        <Hr />

        <Others>
          <Total>{`Total: ${fetchedSBOs.length}`}</Total>
          <FarRight>
            <FilterButton />
            {/* <Button onClick={handleRefresh}>
              <CachedIcon />
            </Button> */}
          </FarRight>
        </Others>

        {SBOs.length === 0 ? (
          <SBONotFoundPage />
        ) : (
          SBOs?.map((SBO) => <SBOCard key={SBO._id} SBO={SBO} />)
        )}
      </Container>
      {/* <Container2Outer>
          <Container2>
            <Position>
                
            </Position>
            <Position></Position>
            <Position></Position>
            <Position></Position>
            <Position></Position>
            <Position></Position>
            <Position></Position> */}
      {timeBolean && <TimeFilterPopUp />}
      {actionOrConditionBolean && <ActionOrConditionFilterPopUp />}
      {categoryBolean && <CategoryFilterPopUp />}
      {staffIDBolean && <StaffIDFilterPopUp />}
      {departmentBolean && <DepartmentFilterPopUp />}
      {departmentStaffBolean && <DepartmentStaffFilterPopUp />}
      {visitorBolean && <VisitorFilterPopUp />}
      {plantLocationBolean && <PlantLocationFilterPopUp />}
      {/* </Container2>
        </Container2Outer> */}
    </>
  );
};

export default Divider;

// ) : false ? (
//   SBOs?.map((SBO) => <SBOCard key={SBO._id} SBO={SBO} />)
// ) : (
//   refreshedSBOs?.map((SBO) => <SBOCard key={SBO._id} SBO={SBO} />)
// )}
