import React from "react";
import styled from "styled-components";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import mission3 from "../images/mission3.avif";
import vision from "../images/vision.png";
import values from "../images/values.webp";
import Header from "../components/Header";
import COREVALUES2 from "../images/COREVALUES2.jpg";
import MISSION from "../images/MISSION.png";
import VISION4 from "../images/VISION4.jfif";

import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";
import Man2OutlinedIcon from "@mui/icons-material/Man2Outlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import FloatingButtons from "../components/FloatingButtons";

const Container = styled.div`
  /* background-color: #aecaff; */
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
  margin-right: 140px;
  padding: 10px;
  gap: 10px;
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 13px;
`;

const TextsmM = styled.div`
  font-size: smaller;
  font-weight: 600;
`;

const MediaIcons = styled.button`
  display: flex;
  justify-content: center;
  align-content: center;
  /* width: 5px; */
  /* height: 1px; */
  margin-bottom: 15px;

  border-radius: 10px;
  width: 200px;
  color: white;
  padding: 5px 15px;
  background-color: #003cb3;
  border: 1px solid blue;
  font-weight: 900;
  font-size: large;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  box-shadow: 0px 6px 10px hsl(0, 0%, 100%);
`;

// const Others = styled.div`
//   display: flex;
//   justify-content: center;
//   align-content: center;
//   gap: 25px;
// `;

// const Text = styled.div`
//   font-size: smaller;
//   font-weight: 400;
// `;

// const Down = styled.div`
//   display: flex;
//   justify-content: center;
// `;

const Middle = styled.div`
  display: flex;
  gap: 20px;
  align-content: center;
  justify-content: center;
  margin-top: 30px;
`;

// const Bottom = styled.div``;

const QuoteCard1 = styled.div`
  height: 700px;
  width: 300px;
  background-color: #ccddff;
  /* padding: 15px; */
  border-radius: 10px;
  border: 1px solid blue;
  /* margin: 10px; */
`;

const QuoteCard2 = styled.div`
  height: 270px;
  width: 300px;
  background-color: #ccddff;
  /* padding: 15px; */
  border-radius: 10px;
  border: 1px solid blue;
  margin-top: 0px;
  margin-left: 5px;
  margin-bottom: 5px;
`;
const QuoteCard3 = styled.div`
  height: 417px;
  width: 300px;
  background-color: #ccddff;
  /* padding: 15px; */
  border-radius: 10px;
  border: 1px solid blue;
  margin: 5px;
`;

const Top1 = styled.div`
  background-image: url(${COREVALUES2});
  height: 30%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-repeat: no-repeat;
  background-size: 300px 250px;
  width: 100%;
`;
const Top2 = styled.div`
  background-image: url(${VISION4});
  height: 70%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-repeat: no-repeat;
  background-size: 300px 250px;
`;
const Top3 = styled.div`
  background-image: url(${MISSION});
  height: 52%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-repeat: no-repeat;
  background-size: 300px 250px;
`;

const Bottom = styled.div`
  background-color: transparent;
  height: 70%;
  margin-top: 5px;
  display: flex;

  align-content: center;
  justify-content: center;
  padding: 8px;
`;

const Bottom2 = styled.div`
  background-color: transparent;
  /* height: 70%; */
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  /* align-content: center; */
  /* justify-content: flex-start; */
  padding-left: 75px;
  padding-top: 8px;
`;

const Bottomsm = styled.div`
  background-color: transparent;
  /* height: 70%; */
  margin-top: 2px;
  display: flex;
  flex-direction: column;
  gap: 2px;

  /* align-content: center; */
  /* justify-content: flex-start; */
  padding-left: 5px;
  /* padding-top: 4px; */
`;

const Item = styled.div`
  margin: 5px;
  display: flex;
  /* justify-content: center; */
  color: #003cb3;
  font-weight: 900;
  gap: 10px;
  font-family: cursive;
  font-size: medium;
`;

const ItemM = styled.div`
  margin: 5px;
  display: flex;
  /* justify-content: center; */
  color: #003cb3;
  font-weight: 900;
  gap: 10px;
  font-family: cursive;
  font-size: small;
`;

const Itemsm = styled.div`
  margin: 5px;
  display: flex;
  /* justify-content: center; */
  color: #003cb3;
  font-weight: 700;
  gap: 5px;
  font-family: cursive;
  font-size: x-small;
`;

const Right = styled.div``;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

const Text = styled.div``;

const Textsm = styled.div``;

const Icon = styled.div``;

const Footer = () => {
  const handleClick = (link) => {
    // window.location.href = link;
    window.open(link, "_blank");
  };

  return (
    <>
      <Container>
        <Header />
        <Wrapper>
          <Middle>
            <Right>
              <QuoteCard1>
                <Top1 />
                <Bottom2>
                  <Item>
                    <EmojiEventsOutlinedIcon />
                    <Text>Quality</Text>
                  </Item>
                  <Item>
                    <TipsAndUpdatesOutlinedIcon />
                    <Text>Innovation</Text>
                  </Item>
                  <Item>
                    <HandshakeOutlinedIcon />
                    <Text>Commitment</Text>
                  </Item>
                  <Item>
                    <GroupsOutlinedIcon />
                    <Text>Teamwork</Text>
                  </Item>
                  <Item>
                    <VerifiedUserOutlinedIcon />
                    <Text>Accountability</Text>
                  </Item>
                  <Item>
                    <BalanceOutlinedIcon />
                    <Text>Integrity</Text>
                  </Item>
                  <Item>
                    <Man2OutlinedIcon />
                    <Text>Leaership</Text>
                  </Item>
                  <Item>
                    <EngineeringOutlinedIcon />
                    <Text>Safety</Text>
                  </Item>
                </Bottom2>
              </QuoteCard1>
            </Right>
            <Left>
              <QuoteCard2>
                <Top2 />
                <Bottom>
                  <ItemM>
                    "To be Sub-Saharan Africa’s leading aluminium beverage can
                    supplier."
                  </ItemM>
                </Bottom>
              </QuoteCard2>
              <QuoteCard3>
                <Top3 />
                <Bottomsm>
                  <Itemsm>
                    <Brightness1Icon />
                    <Textsm>
                      To be a world class organisation, outperforming our
                      competitors in terms of growth, quality and service.
                    </Textsm>
                  </Itemsm>
                  <Itemsm>
                    <Brightness1Icon />
                    <Textsm>
                      To drive customer growth through innovative solutions.
                    </Textsm>
                  </Itemsm>
                  <Itemsm>
                    <Brightness1Icon />
                    <Textsm>
                      To remain committed to caring for the environment,
                      offering only responsible and sustainable packaging to our
                      customers and communities.
                    </Textsm>
                  </Itemsm>
                  <Itemsm>
                    <Brightness1Icon />
                    <Textsm>We are proud to work for GZI</Textsm>
                  </Itemsm>
                </Bottomsm>
              </QuoteCard3>
            </Left>
          </Middle>
          <SocialMedia>
            <MediaIcons
              onClick={() =>
                handleClick("https://twitter.com/gzindustries?lang=en")
              }
            >
              <TwitterIcon />
              <TextsmM>Twitter</TextsmM>
            </MediaIcons>
            <MediaIcons
              onClick={() =>
                handleClick(
                  "https://www.linkedin.com/company/gz-industries-ltd/?originalSubdomain=ng"
                )
              }
            >
              <LinkedInIcon />
              <TextsmM>LinkedIn</TextsmM>
            </MediaIcons>
            <MediaIcons
              onClick={() =>
                handleClick(
                  "https://www.facebook.com/profile.php?id=100076126882317"
                )
              }
            >
              <FacebookIcon />
              <TextsmM>Facebook</TextsmM>
            </MediaIcons>
          </SocialMedia>
          {/* <SocialMedia>
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
        </Down> */}
        </Wrapper>
      </Container>
      <FloatingButtons />
    </>
  );
};

export default Footer;
