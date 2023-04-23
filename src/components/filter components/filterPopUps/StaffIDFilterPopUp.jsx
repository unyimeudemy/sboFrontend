import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { staffIDQuery } from "../../../redux/filterDataSlices/staffIDDataSlice";
import { staffIDPopUp } from "../../../redux/filter-components-slices/staffIDSlice";

const Container = styled.div`
  position: absolute;
  top: 195px;
  display: flex;
  align-content: center;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    position: absolute;
    top: 135px;
    left: 710px;
  }
`;

const Wrapper = styled.div`
  border: 1px solid blue;
  height: 120px;
  width: 260px;
  background-color: #ccddff;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.25);
`;

const Dates = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Text = styled.div`
  font-weight: 700;
  color: #4d4d4d;
`;

const StartDate = styled.input`
  height: 25px;
  border-radius: 10px;
  padding: 5px;
`;

const EndDate = styled.input`
  height: 25px;
  border-radius: 10px;
  padding: 5px;
`;

const Button = styled.button`
  border-radius: 10px;
  width: 100%;
  height: 35px;
  color: white;
  padding: 5px 15px;
  background-color: #0040ff;
  /* border: 1px solid #3ea6ff; */
  border: none;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  /* @media only screen and (min-width: 425px) {
    display: none;
  } */
`;

const StaffIDFilterPopUp = () => {
  const [staffID, setStaffID] = useState("");
  const dispatch = useDispatch();

  const handleApply = (e) => {
    e.preventDefault();
    dispatch(staffIDQuery(staffID));
    dispatch(staffIDPopUp());
  };

  return (
    <Container>
      <Wrapper>
        <Dates>
          <Input>
            <Text>STAFF ID</Text>
            <StartDate
              onChange={(e) => setStaffID(e.target.value)}
              placeholder="Input staff ID"
            ></StartDate>
          </Input>
          <Button onClick={handleApply}>Apply</Button>
        </Dates>
      </Wrapper>
    </Container>
  );
};

export default StaffIDFilterPopUp;
