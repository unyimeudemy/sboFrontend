import React from "react";
import styled from "styled-components";
import PersonIcon from "@mui/icons-material/Person";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import { useDispatch } from "react-redux";
import { visitorQuery } from "../../../redux/filterDataSlices/visitorDataSlice";
import { noVisitorPopUp } from "../../../redux/filter-components-slices/visitorSlice";

const Container = styled.div`
  position: absolute;
  top: 195px;
  display: flex;
  align-content: center;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    position: absolute;
    top: 135px;
    left: 860px;
  }

  /* @media only screen and (min-width: 1024px) {
    position: absolute;
    top: 140px;
    left: 860px;
  } */
`;

const Wrapper = styled.div`
  border: 1px solid blue;
  height: 100px;
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

const VisitorFilterPopUp = () => {
  const dispatch = useDispatch();

  const handleGZI = () => {
    dispatch(visitorQuery("false"));
    dispatch(noVisitorPopUp());
  };

  const handleVisitors = () => {
    dispatch(visitorQuery("true"));
    dispatch(noVisitorPopUp());
  };

  return (
    <Container>
      <Wrapper>
        <Item onClick={handleGZI}>
          <PersonIcon />
          <Text>GZ Industries</Text>
        </Item>
        <Item onClick={handleVisitors}>
          <PersonOffIcon />
          <Text>Visitor</Text>
        </Item>
      </Wrapper>
    </Container>
  );
};

export default VisitorFilterPopUp;
