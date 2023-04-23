import React from "react";
import styled from "styled-components";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import sboNotFound from "../images/sboNotFound.avif";
import FloatingButtons from "../components/FloatingButtons";

const Container = styled.div`
  margin: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

const Image = styled.img`
  width: 600px;
  height: 600px;

  @media only screen and (max-width: 768px) {
    width: 320px;
    height: 320px;
  }
`;

const SBONotFoundPage = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Image src={sboNotFound} />
        </Wrapper>
      </Container>
      <FloatingButtons />
    </>
  );
};

export default SBONotFoundPage;
