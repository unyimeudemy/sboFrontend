import React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { Label1, Label2, Label3 } from "./Labels";
import { useDispatch } from "react-redux";
import { tabChosen, tabNotChosen } from "../../redux/tabSlice";
import { unsafeDetailFilled } from "../../redux/unsafeWorkPractiseSlice";
import { detailEmpty } from "../../redux/safeWorkPractiseSlice";
import { recommendationDetailEmpty } from "../../redux/recommendationSlice";

const Container = styled.div`
  /* width: 200px; */
  /* height: 300px; */
  display: flex;
  justify-content: center;
  align-content: center;
`;

const Wrapper = styled.div`
  /* width: 330px;
  height: 200px;
  border: 1px solid #3ea6ff;
  border-radius: 10px;
  background-color: #3ea6ff;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  gap: 5px;
  padding: 5px; */
`;

const CardInside = styled.div`
  width: 300px;
  height: 300px;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: small;
  /* align-content: center; */
  justify-content: center;
  margin-bottom: 5px;
  padding: 5px;
`;

const Describtion = styled.textarea`
  border: 1px solid #8c8c8c;
  color: black;
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 330px;
  height: 60px;
`;

const UnsafeWorkPractise = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const dispatch = useDispatch();

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
    dispatch(tabChosen(newTabIndex));
  };

  /////////////////////////////////////////////////////////////
  const [getDetail, setGetDetail] = useState("");
  const handleDetail = (e) => {
    e.preventDefault();
    setGetDetail(e.target.value);
    dispatch(recommendationDetailEmpty());
    dispatch(detailEmpty());
    dispatch(unsafeDetailFilled(getDetail));
  };

  return (
    <Container>
      <Wrapper>
        <Tabs value={tabIndex} onChange={handleTabChange}>
          <Tab label={Label1().props.children} />
          <Tab label={Label2().props.children} />
          <Tab label={Label3().props.children} />
        </Tabs>
        <Describtion
          placeholder="Describtion"
          name="describtion"
          onChange={handleDetail}
        />
      </Wrapper>
    </Container>
  );
};

export default UnsafeWorkPractise;
