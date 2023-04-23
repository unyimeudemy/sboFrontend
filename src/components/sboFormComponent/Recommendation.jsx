import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { recommendationDetailFilled } from "../../redux/recommendationSlice";
// import { unsafeDetailEmpty } from "../../redux/unsafeWorkPractiseSlice";
// import { tabNotChosen } from "../../redux/tabSlice";

const Container = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-content: center;
  justify-content: center;
`;

const Text = styled.textarea`
  width: 330px;
  height: 80px;
  background-color: transparent;
  padding: 10px;
`;

const H1 = styled.div`
  color: #424656;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const Title = styled.div``;

const SafeWorkPractise = () => {
  //   const [getDetail, setGetDetail] = useState("");
  const dispatch = useDispatch();

  const handleDetail = (e) => {
    e.preventDefault();
    //   setGetDetail(e.target.value);
    //   dispatch(unsafeDetailEmpty());
    //   dispatch(tabNotChosen());
    //   dispatch(detailFilled(getDetail));
    dispatch(recommendationDetailFilled(e.target.value));
  };

  return (
    <Container>
      <Wrapper>
        <H1>
          <Title>RECOMMENDATION</Title>
        </H1>
        <Text
          placeholder="Describtion"
          name="describtion"
          onChange={handleDetail}
        ></Text>
      </Wrapper>
    </Container>
  );
};

export default SafeWorkPractise;
