import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import UnsafeWorkPractise from "../components/sboFormComponent/UnsafeWorkPractise";
import AddFiles from "../components/sboFormComponent/AddFiles";
import SafeWorkPractise from "../components/sboFormComponent/SafeWorkPractise";
import DownButtons from "../components/sboFormComponent/DownButtons";
import Recommendation from "../components/sboFormComponent/Recommendation";
import Department from "../components/sboFormComponent/Department";
// import { Container } from "@mui/system";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import FloatingButtons from "../components/FloatingButtons";

const Container = styled.div`
  margin: 5px;
  overflow-wrap: break-word;
  overflow: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-content: center;
  justify-content: center;
  padding: 10px;

  @media only screen and (min-width: 768px) {
    padding-right: 110px;
  }
`;

const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemsProgress = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* /* display: ${(props) => props.percentageAudio === 100 && "none"}; */
  display: ${(props) => props.percentage === 100 && "none"};
  display: ${(props) => props.percentage === 100 && "none"};
`;

const Item = styled.div`
  width: 100%;
`;

const ErrorMessage = styled.div`
  height: 20px;
  width: 350px;
  background-color: #ffe6e6;
  border: 1px solid red;
  border-radius: 5px;
  padding: 5px;
  padding-right: 10px;
  font-size: x-small;
  font-weight: 700;
  color: red;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const VideoProgressBarBorder = styled.div`
  border: 1px solid #808080;
  border-radius: 5px;
  height: 8px;
  width: 170px;
  display: ${(props) => props.percentageVideo === null && "none"};
`;

const AudioProgressBarBorder = styled.div`
  border: 1px solid #808080;
  border-radius: 5px;
  height: 8px;
  width: 170px;
  display: ${(props) => props.percentageAudio === 100 && "none"};
`;

const ImageProgressBarBorder = styled.div`
  border: 1px solid #808080;
  border-radius: 5px;
  height: 8px;
  width: 170px;
  display: ${(props) => props.percentageAudio === 100 && "none"};
`;

const VideoProgressBar = styled.div`
  height: 8px;

  width: ${(props) => (props.percentageVideo > 20 ? "34px" : "none")};
  width: ${(props) => (props.percentageVideo > 1 ? "17px" : "none")};
  width: ${(props) => (props.percentageVideo > 30 ? "51px" : "none")};
  width: ${(props) => (props.percentageVideo > 40 ? "68px" : "none")};
  width: ${(props) => (props.percentageVideo > 50 ? "85px" : "none")};
  width: ${(props) => (props.percentageVideo > 60 ? "102px" : "none")};
  width: ${(props) => (props.percentageVideo > 70 ? "119px" : "none")};
  width: ${(props) => (props.percentageVideo > 80 ? "136px" : "none")};
  width: ${(props) => (props.percentageVideo > 90 ? "153px" : "none")};
  width: ${(props) => (props.percentageVideo > 90 ? "158px" : "none")};
  width: ${(props) => (props.percentageVideo > 90 ? "165px" : "none")};
  width: ${(props) => (props.percentageVideo > 100 ? "170px" : "none")};

  /* width: 50px; */
  border-radius: 5px;
  background-color: green;
`;
const AudioProgressBar = styled.div`
  height: 8px;

  width: ${(props) => (props.percentageAudio > 20 ? "34px" : "none")};
  width: ${(props) => (props.percentageAudio > 1 ? "17px" : "none")};
  width: ${(props) => (props.percentageAudio > 30 ? "51px" : "none")};
  width: ${(props) => (props.percentageAudio > 40 ? "68px" : "none")};
  width: ${(props) => (props.percentageAudio > 50 ? "85px" : "none")};
  width: ${(props) => (props.percentageAudio > 60 ? "102px" : "none")};
  width: ${(props) => (props.percentageAudio > 70 ? "119px" : "none")};
  width: ${(props) => (props.percentageAudio > 80 ? "136px" : "none")};
  width: ${(props) => (props.percentageAudio > 90 ? "153px" : "none")};
  width: ${(props) => (props.percentageAudio > 90 ? "158px" : "none")};
  width: ${(props) => (props.percentageAudio > 90 ? "165px" : "none")};
  width: ${(props) => (props.percentageAudio > 100 ? "170px" : "none")};

  /* width: 50px; */
  border-radius: 5px;
  background-color: green;
`;
const ImageProgressBar = styled.div`
  height: 8px;

  width: ${(props) => (props.percentageImage > 20 ? "34px" : "none")};
  width: ${(props) => (props.percentageImage > 1 ? "17px" : "none")};
  width: ${(props) => (props.percentageImage > 30 ? "51px" : "none")};
  width: ${(props) => (props.percentageImage > 40 ? "68px" : "none")};
  width: ${(props) => (props.percentageImage > 50 ? "85px" : "none")};
  width: ${(props) => (props.percentageImage > 60 ? "102px" : "none")};
  width: ${(props) => (props.percentageImage > 70 ? "119px" : "none")};
  width: ${(props) => (props.percentageImage > 80 ? "136px" : "none")};
  width: ${(props) => (props.percentageImage > 90 ? "153px" : "none")};
  width: ${(props) => (props.percentageImage > 90 ? "158px" : "none")};
  width: ${(props) => (props.percentageImage > 90 ? "165px" : "none")};
  width: ${(props) => (props.percentageImage > 100 ? "170px" : "none")};
  /* width: 50px; */
  border-radius: 5px;
  background-color: green;
`;

const SboForm = () => {
  const { sboFormCheckContent } = useSelector((state) => state.sboFormCheck);

  const { addAudioProgressContent } = useSelector(
    (state) => state.addAudioProgress
  );

  const { addVideoProgressContent } = useSelector(
    (state) => state.addVideoProgress
  );

  const { addImageProgressContent } = useSelector(
    (state) => state.addImageProgress
  );
  //   console.log("😂", addAudioProgressContent);

  return (
    <>
      <Container>
        <Item>
          <Header />
        </Item>
        <Wrapper>
          <Items>
            <AddFiles />
          </Items>
          {/* <ItemsProgress
            percentageAudio={addAudioProgressContent}
            percentageVideo={addVideoProgressContent}
            percentageImage={addImageProgressContent}
          >
            <ProgressBar>
              <VideoProgressBarBorder>
                <VideoProgressBar percentageVideo={addVideoProgressContent} />
              </VideoProgressBarBorder>
              <AudioProgressBarBorder>
                <AudioProgressBar percentageAudio={addAudioProgressContent} />
              </AudioProgressBarBorder>
              <ImageProgressBarBorder>
                <ImageProgressBar percentageImage={addImageProgressContent} />
              </ImageProgressBarBorder>
            </ProgressBar>
          </ItemsProgress> */}
          <Items>
            <Department />
          </Items>
          {sboFormCheckContent && (
            <Items>
              <ErrorMessage>{sboFormCheckContent}</ErrorMessage>
            </Items>
          )}
          <Items>
            <SafeWorkPractise />
          </Items>
          <Items>
            <UnsafeWorkPractise />
          </Items>
          <Items>
            <Recommendation />
          </Items>
          <Items>
            <DownButtons />
          </Items>
        </Wrapper>
      </Container>
      <FloatingButtons />
    </>
  );
};

export default SboForm;

//////////////////////////////////////////
