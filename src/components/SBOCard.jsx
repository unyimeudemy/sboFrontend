import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { format } from "timeago.js";
import styled from "styled-components";
// import date from "date-and-time";
// import format from "date-format";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// var format = require("date-format");

// STYLES FOR SMALL VIEW
const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: auto;
  height: auto;
  background-color: #ccddff;
  border-radius: 10px;
  padding: 8px;
  border: 1px solid blue;
  cursor: pointer;
  margin: 15px;

  @media only screen and (min-width: 768px) {
    height: 130px;
  }
`;

const Top = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const ProfilePicture = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: #404040;
`;

const StaffName = styled.div`
  font-weight: 800;
  /* color: #404040; */
  color: blue;
  font-size: medium;
  overflow-wrap: break-word;

  @media only screen and (max-width: 768px) {
    font-size: small;
  }
`;

const Department = styled.div`
  font-family: cursive;
  font-size: smaller;

  @media only screen and (max-width: 768px) {
    display: none;
    font-weight: 800;
  }
`;

const Time = styled.div`
  /* position: absolute;
  right: 50px; */
  font-size: x-small;
  color: blue;
  font-weight: 800;
`;

const Middle = styled.div`
  display: flex;
  gap: 10px;
`;

const Bottom = styled.div`
  display: flex;
  gap: 100px;
  align-items: center;
  justify-content: center;
`;

const Detail = styled.div`
  word-wrap: break-word;
  font-size: small;
  font-weight: 600;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  position: absolute;
  right: 50px;
  font-weight: 800;
  color: green;
`;

const Line1 = styled.div`
  flex-wrap: wrap;
  margin: 0;
  font-size: smaller;
  font-family: cursive;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const Line2 = styled.div`
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const LineForLarge = styled.div`
  display: none;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const SBODetail = styled.div`
  @media only screen and (max-width: 768px) {
    display: flex;
    gap: 10px;
  }
`;

const SBOHeader = styled.div`
  font-weight: 800;
  color: blue;
  font-size: small;
`;

const SBOBody = styled.div`
  font-size: small;
  font-weight: 500;
  color: #404040;
  font-family: cursive;
`;

const Recommendation = styled.div`
  @media only screen and (max-width: 768px) {
    display: flex;
    gap: 10px;
  }
`;

// STYLES FOR LARGE VIEW

const ContainerLarge = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: auto;
  height: auto;
  background-color: #ccddff;
  border-radius: 10px;
  padding: 8px;
  border: 1px solid blue;
  cursor: pointer;
  margin: 15px;
  padding: 5px;

  @media only screen and (max-width: 768px) {
    /* height: 665px; */
    height: auto;
  }
`;

const Marker = styled.div`
  display: flex;
  gap: 20px;
  align-content: center;
`;

const HrGreen = styled.div`
  border: 1px solid green;
  height: 3px;
  background-color: green;
  width: 250px;

  @media only screen and (min-width: 768px) {
    width: 1190px;
  }
`;

const HrRed = styled.div`
  border: 1px solid red;
  height: 3px;
  background-color: red;
  width: 250px;

  @media only screen and (min-width: 768px) {
    width: 1190px;
  }
`;

const GreenLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Body = styled.div`
  overflow: hidden;
  display: flex;
  gap: 50px;
  /* justify-content: space-around; */

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const BodyTitle = styled.div`
  margin-top: 3px;
  /* margin-bottom: 1px; */
  color: blue;
  font-weight: 700;
  font-size: 14px;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

const BodyDetail = styled.div`
  font-weight: 500;
  font-size: small;
  font-size: 11px;
  font-family: cursive;

  @media only screen and (min-width: 768px) {
    font-size: 13px;
  }
`;

const TitleL = styled.div`
  font-weight: 800;
  color: green;
`;

const ImageWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

const ImageFile = styled.img`
  background-color: #999999;
  height: 154px;
  /* height: ${(props) => (props.isEnlarged ? "560px" : "154px")}; */
  width: 125px;
  /* width: ${(props) => (props.isEnlarged ? "500px" : "125px")}; */
  margin-bottom: 20px;
  border-radius: 10px;

  /* width: 100%; */
  max-width: 400px;
  cursor: pointer;
  ${(props) =>
    props.isEnlarged &&
    `
    position: fixed;
    margin: 10px;
    top: 200px;
    right: 40px;
    width: 100%;
    height: auto;
    object-fit: contain;
    z-index: 999;
    transition: all 0.7s ease-in-out;

  `}

  @media only screen and (max-width: 768px) {
    /* display: none; */
    ${(props) =>
      props.isEnlarged &&
      `
    position: fixed;
    margin: 10px;
    top: 200px;
    right: 10px;
    width: 290px;
    height: auto;
    object-fit: contain;
    z-index: 999;
    transition: all 0.7s ease-in-out;

  `}
  }
`;

const AudioWrapper = styled.div`
  /* border: 1px solid #595959;
  border-radius: 50px; */
`;

const AudioFile = styled.audio`
  width: 250px;
  height: 40px;
  object-fit: cover;
  border: 1px solid #595959;
  border-radius: 50px;
`;

const BodyDetails = styled.div`
  overflow: hidden;
`;

const Words = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-wrap: break-word;
`;

const Green = styled.div`
  color: green;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const Red = styled.div`
  color: red;
`;

const TimeCon = styled.div`
  margin-right: auto;
`;

const Files = styled.div`
  background-color: white;
  margin-left: auto;
  border-radius: 10px;
  padding: 5px;
  height: 370px;
  width: 260px;

  @media only screen and (min-width: 768px) {
    height: 370px;
    width: 260px;
  }
`;

const VideoWrapper = styled.div``;

const VideoFrame = styled.video`
  height: 150px;
  width: 255px;
  border-radius: 10px;
  object-fit: cover;
`;

const ExpandIcon = styled.div`
  margin-left: auto;
`;

const SBOCard = ({ SBO }) => {
  const [small, setSmall] = useState(true);
  const [isEnlarged, setIsEnlarged] = useState(false);
  //   const date = format.parse(
  //     format.ISO8601_WITH_TZ_OFFSET_FORMAT,
  //     SBO.createdAt
  //   );

  const date = format(SBO.createdAt);
  //   date.format(SBO.createdAt, "ddd, MMM DD YYYY"); // => 'Fri, Jan 02 2015'

  //   const detailArr = SBO.details.split(" ").slice(0, 10);
  //   //   const detailArr = SBO.details;

  //   console.log(SBO);

  //   const processDetail = (one, two, three, four, five) => {
  //     if (one === undefined) {
  //       return "";
  //     } else if (two === undefined) {
  //       return `${detailArr[0]}`;
  //     } else if (three === undefined) {
  //       return `${detailArr[0]} ${detailArr[1]}`;
  //     } else if (four === undefined) {
  //       return `${detailArr[0]} ${detailArr[1]} ${detailArr[2]}`;
  //     } else if (five === undefined) {
  //       return `${detailArr[0]} ${detailArr[1]} ${detailArr[2]} ${detailArr[3]}`;
  //     } else {
  //       return "";
  //     }
  //   };

  //   const lineOne = processDetail(
  //     detailArr[0],
  //     detailArr[1],
  //     detailArr[2],
  //     detailArr[3],
  //     detailArr[5]
  //   );
  //   const lineTwo = processDetail(
  //     detailArr[6],
  //     detailArr[7],
  //     detailArr[8],
  //     detailArr[9],
  //     detailArr[10]
  //   );

  const handleEnlarge = () => {
    setSmall(!small);
  };

  const handleImageEnlarged = () => {
    setIsEnlarged(!isEnlarged);
  };

  return (
    <>
      {small === true ? (
        <Container>
          <Top>
            <ProfilePicture></ProfilePicture>
            <StaffName>{SBO?.staffName}</StaffName>
            <Department>{SBO?.staffDepartment}</Department>
            {small === true ? (
              <ExpandIcon onClick={handleEnlarge}>
                <KeyboardArrowUpIcon />
              </ExpandIcon>
            ) : (
              <ExpandIcon onClick={handleEnlarge}>
                <KeyboardArrowDownIcon />
              </ExpandIcon>
            )}
          </Top>
          <Middle>
            <Detail>
              <Words>
                <Line1>{SBO.details}</Line1>
                {/* <Line2>{lineTwo}</Line2> */}
              </Words>
              <LineForLarge>
                <SBODetail>
                  <SBOHeader>Detail</SBOHeader>
                  <SBOBody>{SBO?.details}</SBOBody>
                </SBODetail>
                <Recommendation>
                  <SBOHeader>Recommendation: </SBOHeader>
                  <SBOBody>{SBO?.recommendation}</SBOBody>
                </Recommendation>
              </LineForLarge>
            </Detail>
          </Middle>
          <Bottom>
            <TimeCon>
              <Time>{date}</Time>
            </TimeCon>
            <Title>
              {SBO?.title === "Safe Work Practise" ? (
                <Green>
                  <FiberManualRecordIcon />
                </Green>
              ) : (
                <Red>
                  <FiberManualRecordIcon />
                </Red>
              )}
            </Title>
          </Bottom>
        </Container>
      ) : (
        <ContainerLarge>
          <Top>
            <ProfilePicture></ProfilePicture>
            <StaffName>{SBO?.staffName}</StaffName>
            <Department>{SBO?.staffDepartment}</Department>
            <Time>{date}</Time>
            {small === true ? (
              <ExpandIcon onClick={handleEnlarge}>
                <KeyboardArrowUpIcon />
              </ExpandIcon>
            ) : (
              <ExpandIcon onClick={handleEnlarge}>
                <KeyboardArrowDownIcon />
              </ExpandIcon>
            )}
          </Top>
          <Marker>
            {SBO?.title === "Safe Work Practise" ? (
              <Green>
                <HrGreen />
              </Green>
            ) : (
              <Red>
                <HrRed />
              </Red>
            )}
          </Marker>
          <Body>
            <BodyDetails>
              <BodyTitle>Detail</BodyTitle>
              <BodyDetail>{SBO?.details}</BodyDetail>
              <BodyTitle>Recommendation</BodyTitle>
              <BodyDetail>{SBO.recommendation}</BodyDetail>
              <BodyTitle>Category</BodyTitle>
              <BodyDetail>{SBO?.category}</BodyDetail>
              <BodyTitle>Subcategory</BodyTitle>
              <BodyDetail>{SBO?.subCategory}</BodyDetail>
              <BodyTitle>Department Responsible</BodyTitle>
              <BodyDetail>{SBO?.departmentResponsible}</BodyDetail>
              <BodyTitle>Head of Department</BodyTitle>
              <BodyDetail>{SBO?.headOfDepartment}</BodyDetail>
            </BodyDetails>
            <Files>
              <VideoWrapper>
                <VideoFrame src={SBO.videoURL} controls />
              </VideoWrapper>
              <ImageWrapper>
                <ImageFile
                  src={SBO.imageURL}
                  isEnlarged={isEnlarged}
                  onClick={handleImageEnlarged}
                />
                <ImageFile
                  src={SBO.imageURL}
                  isEnlarged={isEnlarged}
                  onClick={handleImageEnlarged}
                />
              </ImageWrapper>
              <AudioWrapper>
                <AudioFile src={SBO.audioURL} controls />
              </AudioWrapper>
            </Files>
          </Body>
        </ContainerLarge>
      )}
    </>
  );
};

export default SBOCard;
