import React from "react";
import styled from "styled-components";
import SBOFilterOptions from "../components/filter components/SBOFilterOptions";
import Divider from "../components/filter components/Divider";
import Header from "../components/Header";
import FloatingButtons from "../components/FloatingButtons";

const Container = styled.div`
  margin: 20px;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  gap: 10px;
  height: 100vh;
  /* justify-content: center; */
  align-content: center;
  /* justify-items: center; */
`;

const OptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const FindSBOPage = () => {
  return (
    <>
      <Container>
        <Header />
        <OptionWrapper>
          <Wrapper>
            <SBOFilterOptions />
          </Wrapper>
          <Divider />
        </OptionWrapper>
      </Container>
      <FloatingButtons />
    </>
  );
};

export default FindSBOPage;
