import React from "react";
import styled from "styled-components";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import LandscapeIcon from "@mui/icons-material/Landscape";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 10px;
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 1px solid #737373;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1a1aff;
  color: #ffffff;
`;

const AddFiles = () => {
  return (
    <Container>
      <Wrapper>
        <Icon>
          <PlayArrowIcon />
        </Icon>
        <Icon>
          <LandscapeIcon />
        </Icon>
        <Icon>
          <KeyboardVoiceIcon />
        </Icon>
      </Wrapper>
    </Container>
  );
};

export default AddFiles;
