import React from "react";
import styled from "styled-components";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import { useDispatch } from "react-redux";
// import { buildQueryString } from "../../../redux/filterQuerySlice";
import { titleQuery } from "../../../redux/filterDataSlices/titleDataSlice";
import { actionOrConditionPopUp } from "../../../redux/filter-components-slices/actionOrConditionSlice";

const Container = styled.div`
  position: absolute;
  top: 195px;
  left: 70px;
  display: flex;
  align-content: center;
  justify-content: center;
  cursor: pointer;

  @media only screen and (min-width: 768px) {
    position: absolute;
    top: 135px;
    left: 220px;
  }
`;

const Wrapper = styled.div`
  height: 170px;
  width: 200px;
  background-color: #ccddff;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  border-radius: 10px;
  padding: 15px;
  gap: 10px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.25);
  border: 1px solid blue;
`;

const Item = styled.div`
  display: flex;
  gap: 10px;
  border: 1px solid blue;
  padding: 5px;
  border-radius: 10px;

  :hover {
    cursor: pointer;
    background-color: #6666ff;
  }
`;

const Text = styled.div``;

const ActionOrConditionFilterPopUp = () => {
  const dispatch = useDispatch();

  const handleAction = () => {
    dispatch(titleQuery("Action"));
    dispatch(actionOrConditionPopUp());
  };

  const handleCondition = () => {
    dispatch(titleQuery("Conditions"));
    dispatch(actionOrConditionPopUp());
  };

  const handleNearmisses = () => {
    dispatch(titleQuery("Nearmisses"));
    dispatch(actionOrConditionPopUp());
  };

  const handleSafe = () => {
    dispatch(titleQuery("Safe Work Practise"));
    dispatch(actionOrConditionPopUp());
  };

  //   const rr = useSelector((state) => state.filterQuery);
  //   console.log(rr);

  return (
    <Container>
      <Wrapper>
        <Item onClick={handleAction}>
          <AutoAwesomeIcon />
          <Text>Action</Text>
        </Item>
        <Item onClick={handleCondition}>
          <AirlineSeatReclineExtraIcon />
          <Text>Condition</Text>
        </Item>
        <Item onClick={handleNearmisses}>
          <AutoGraphIcon />
          <Text>Nearmisses</Text>
        </Item>
        <Item onClick={handleSafe}>
          <HealthAndSafetyIcon />
          <Text>Safe</Text>
        </Item>
      </Wrapper>
    </Container>
  );
};

export default ActionOrConditionFilterPopUp;
