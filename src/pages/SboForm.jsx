import React from "react";
import styled from "styled-components";
import UnsafeWorkPractise from "../components/sboFormComponent/UnsafeWorkPractise";
import AddFiles from "../components/sboFormComponent/AddFiles";
import SafeWorkPractise from "../components/sboFormComponent/SafeWorkPractise";
import DownButtons from "../components/sboFormComponent/DownButtons";
// import { Container } from "@mui/system";

const Container = styled.div`
  margin: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-content: center;
  justify-content: center;
  padding: 10px;
`;

const Items = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;

const SboForm = () => {
  return (
    <Container>
      <Wrapper>
        <Items>
          <AddFiles />
        </Items>
        <Items>
          <SafeWorkPractise />
        </Items>
        <Items>
          <UnsafeWorkPractise />
        </Items>
        <Items>
          <DownButtons />
        </Items>
      </Wrapper>
    </Container>
  );
};

export default SboForm;
