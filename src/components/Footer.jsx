import React from "react";
import styled from "styled-components";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

const Container = styled.div`
  background-color: #aecaff;
  border-top: 3px #424656;
  position: relative;
  bottom: 0px;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-top: 20px;
  padding: 10px;
  gap: 10px;
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 10px;
`;

const Textsm = styled.div`
  font-size: smaller;
  font-weight: 600;
`;

const MediaIcons = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  /* width: 5px; */
  height: 1px;
  margin-bottom: 15px;
`;

const Others = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 25px;
`;

const Text = styled.div`
  font-size: smaller;
  font-weight: 400;
`;

const Down = styled.div`
  display: flex;
  justify-content: center;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <SocialMedia>
          <MediaIcons>
            <TwitterIcon />
            <Textsm>Twitter</Textsm>
          </MediaIcons>
          <MediaIcons>
            <LinkedInIcon />
            <Textsm>LinkedIn</Textsm>
          </MediaIcons>
          <MediaIcons>
            <FacebookIcon />
            <Textsm>Facebook</Textsm>
          </MediaIcons>
        </SocialMedia>
        <Others>
          <Text>Help</Text>
          <Text>Feeback</Text>
          <Text>About</Text>
        </Others>
        <Others>
          <Text>Privacy</Text>
          <Text>Terms</Text>
        </Others>
        <Down>
          <Text>Yes we can !</Text>
        </Down>
      </Wrapper>
    </Container>
  );
};

export default Footer;
