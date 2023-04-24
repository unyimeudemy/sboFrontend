import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
// import { buildQueryString } from "../../../redux/filterQuerySlice";
import { noTimePopUp } from "../../../redux/filter-components-slices/timeSlice";
import { timeQuery } from "../../../redux/filterDataSlices/timeDataSlice";

const Container = styled.div`
  position: absolute;
  top: 195px;
  /* left: 110px; */
  display: flex;
  align-content: center;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    position: absolute;
    top: 135px;
    left: 100px;
  }

  /* @media only screen and (min-width: 1024px) {
    position: absolute;
    top: 140px;
    left: 118px;
  }  */
`;

const Wrapper = styled.div`
  border: 1px solid blue;
  height: 190px;
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

const TimeFilterPopUp = () => {
  const dispatch = useDispatch();
  const [dates, setDates] = useState({
    startDate: "",
    endDate: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDates({ ...dates, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { startDate, endDate } = dates;
    const date = `${startDate}/${endDate}`;
    dispatch(timeQuery(date));
    dispatch(noTimePopUp());
  };

  //   const filterOptions = useSelector((state) => state.filterQuery);
  //   console.log("💥", filterOptions); // successful

  return (
    <Container>
      <Wrapper>
        <Dates>
          <Input>
            <Text>From</Text>
            <StartDate
              type="text"
              name="startDate"
              value={dates.name}
              onChange={handleChange}
              placeholder="E.g March-1-2023"
            ></StartDate>
          </Input>
          <Input>
            <Text>To</Text>
            <EndDate
              type="text"
              name="endDate"
              value={dates.name}
              onChange={handleChange}
              placeholder="E.g March-1-2023"
            ></EndDate>
          </Input>
          <Button onClick={handleSubmit}>Apply</Button>
        </Dates>
      </Wrapper>
    </Container>
  );
};

export default TimeFilterPopUp;
