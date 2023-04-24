import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  buildQueryString,
  noBuildQueryString,
} from "../../../redux/filterQuerySlice";
import axios from "axios";
import { noCategoryQuery } from "../../../redux/filterDataSlices/categoryDataSlice";
import { noDepartmentQuery } from "../../../redux/filterDataSlices/departmentDataSlice";
import { noStaffIDQuery } from "../../../redux/filterDataSlices/staffIDDataSlice";
import { noTimeQuery } from "../../../redux/filterDataSlices/timeDataSlice";
import { noTitleQuery } from "../../../redux/filterDataSlices/titleDataSlice";
import { noVisitorQuery } from "../../../redux/filterDataSlices/visitorDataSlice";
import { yesSBO } from "../../../redux/SBOSlice";
import { yesRefresh } from "../../../redux/filter-components-slices/refreshSBOSlice";
import { noPlantLocationPopUp } from "../../../redux/filter-components-slices/plantLocationSlice";
import { noPlantLocationQuery } from "../../../redux/filterDataSlices/plantLocationDataSlice";
import { noDepartmentStaffQuery } from "../../../redux/filterDataSlices/departmentStaffDataSlice";

const Container = styled.div``;

const ApplyFilter = styled.div``;

const Button = styled.button`
  border-radius: 10px;
  width: 150px;
  color: white;
  padding: 5px 15px;
  background-color: #003cb3;
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

const Text = styled.div`
  font-weight: 700;
`;

const FilterButton = () => {
  const dispatch = useDispatch();
  //   const [url, setUrl] = useState("");
  //   dispatch(yesRefresh(true));

  const { categoryDataInitial } = useSelector(
    (state) => state.categoryDataName
  );

  const { departmentDataInitial } = useSelector(
    (state) => state.departmentDataName
  );

  const { departmentStaffDataInitial } = useSelector(
    (state) => state.departmentStaffDataName
  );

  //   console.log("✔✔", departmentStaffDataInitial);

  const { timeDataInitial } = useSelector((state) => state.timeDataName);
  const { titleDataInitial } = useSelector((state) => state.titleDataName);
  const { staffIDDataInitial } = useSelector((state) => state.staffIDDataName);
  const { visitorDataInitial } = useSelector((state) => state.visitorDataName);
  const { plantLocationDataInitial } = useSelector(
    (state) => state.plantLocationDataName
  );

  useEffect(() => {
    const params = new URLSearchParams();
    categoryDataInitial && params.append("category", categoryDataInitial);
    timeDataInitial && params.append("time", timeDataInitial);
    titleDataInitial && params.append("title", titleDataInitial);
    departmentDataInitial &&
      params.append("departmentResponsible", departmentDataInitial);
    departmentStaffDataInitial &&
      params.append("staffDepartment", departmentStaffDataInitial);
    staffIDDataInitial && params.append("staffID", staffIDDataInitial);
    visitorDataInitial && params.append("visitor", visitorDataInitial);
    plantLocationDataInitial &&
      params.append("plantLocation", plantLocationDataInitial);

    console.log(params.toString());
    dispatch(buildQueryString(params.toString()));
  }, [
    categoryDataInitial,
    timeDataInitial,
    titleDataInitial,
    departmentDataInitial,
    staffIDDataInitial,
    visitorDataInitial,
    departmentStaffDataInitial,
    plantLocationDataInitial,
    dispatch,
  ]);

  //   console.log(params.toString());
  const { currentUser } = useSelector((state) => state.user);
  const token = currentUser?.token;

  const { queryString } = useSelector((state) => state.filterQuery);
  const handleFilter = async () => {
    try {
      // console.log(queryString);
      const res = await axios.get(
        // `http://localhost:8080/api/sbo/allSBOs?${queryString}`,
        `https://sbobackend.onrender.com/api/sbo/allSBOs?${queryString}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );

      // console.log(res.data.data);

      dispatch(yesSBO(res.data));

      dispatch(noCategoryQuery());
      dispatch(noDepartmentQuery());
      dispatch(noStaffIDQuery());
      dispatch(noTimeQuery());
      dispatch(noTitleQuery());
      dispatch(noVisitorQuery());
      dispatch(noPlantLocationQuery());
      dispatch(noDepartmentStaffQuery());
      dispatch(noBuildQueryString());
    } catch (error) {
      console.log(error.message);
    }
  };

  //   const { queryString } = useSelector((state) => state.filterQuery);
  //   console.log("💥💥", queryString === null);

  return (
    <Container>
      <ApplyFilter>
        <Button onClick={handleFilter}>
          <FilterAltIcon />
          <Text>Apply Filter</Text>
        </Button>
      </ApplyFilter>
    </Container>
  );
};

export default FilterButton;
