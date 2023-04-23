import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import LandscapeIcon from "@mui/icons-material/Landscape";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { useDispatch, useSelector } from "react-redux";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { yesFiles } from "../../redux/filesSlice";
import { yesAddVideoProgress } from "../../redux/addFilesProgressSlices/addVideoProgressSlice";
import { yesAddAudioProgress } from "../../redux/addFilesProgressSlices/addAudioProgressSlice";
import { yesAddImageProgress } from "../../redux/addFilesProgressSlices/addImageProgressSlice";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 10px;
`;

const VideoFileChosen = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 3px solid
    ${(props) => (props.choosenVideo === 100 ? "#00e600" : "none")};
`;

const ImageFileChosen = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 3px solid
    ${(props) => (props.choosenImage === 100 ? "#00e600" : "none")};
`;

const AudioFileChosen = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 3px solid
    ${(props) => (props.choosenAudio === 100 ? "#00e600" : "none")};
`;

const Icon = styled.label`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  /* border: 1px solid #737373; */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1a1aff;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const AddFiles = () => {
  const dispatch = useDispatch();
  const [video, setVideo] = useState(undefined);
  const [image, setImage] = useState(undefined);
  const [audio, setAudio] = useState(undefined);
  const [videoPercentage, setVideoPercentage] = useState(0);
  const [imagePercentage, setImagePercentage] = useState(0);
  const [audioPercentage, setAudioPercentage] = useState(0);
  const [input, setInput] = useState({});

  //   const handleChange = (e) => {
  // console.log(e.target.files);
  // setInput((prev) => {
  //   return { ...prev, [e.target.name]: e.target.value };
  // });
  //   };

  //   handleChange();

  const uploadFile = (file, urlType) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        if (urlType === "videoURL") {
          setVideoPercentage(Math.round(progress));
          dispatch(yesAddVideoProgress(Math.round(progress)));
        } else if (urlType === "imageURL") {
          setImagePercentage(Math.round(progress));
          dispatch(yesAddImageProgress(Math.round(progress)));
        } else if (urlType === "audioURL") {
          setAudioPercentage(Math.round(progress));
          dispatch(yesAddAudioProgress(Math.round(progress)));
        }

        console.log("video loading " + videoPercentage);
        console.log("image loading " + imagePercentage);
        // console.log("audio loading " + audioPercentage);
        console.log("audio loading " + progress);
        //   urlType === "ImageUrl"
        //     ? setImagePercentage(Math.round(progress))
        //     : setVideoPercentage(Math.round(progress));
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setInput((prev) => {
            return { ...prev, [urlType]: downloadURL };
          });
        });
        // console.log("✔", input);
      }

      //
    );
  };

  useEffect(() => {
    video && uploadFile(video, "videoURL");
  }, [video]);

  useEffect(() => {
    image && uploadFile(image, "imageURL");
  }, [image]);

  useEffect(() => {
    audio && uploadFile(audio, "audioURL");
  }, [audio]);

  //   console.log("✔", { ...input });
  dispatch(yesFiles({ ...input }));

  const cancelUpload = () => {
    // uploadTask.cancel();
  };

  //   const { addAudioProgressContent } = useSelector(
  //     (state) => state.addAudioProgress
  //   );
  //   console.log("😂", addAudioProgressContent);

  const { addAudioProgressContent } = useSelector(
    (state) => state.addAudioProgress
  );

  const { addVideoProgressContent } = useSelector(
    (state) => state.addVideoProgress
  );

  const { addImageProgressContent } = useSelector(
    (state) => state.addImageProgress
  );

  console.log("😂😂", addVideoProgressContent);
  console.log("😂😂", addAudioProgressContent);
  console.log("😂😂", addImageProgressContent);

  return (
    <Container>
      <Wrapper>
        <VideoFileChosen choosenVideo={addVideoProgressContent}>
          <Icon>
            <PlayArrowIcon />
            <input
              type="file"
              id="videoInput"
              accept="video/*"
              style={{ display: "none" }}
              onChange={(e) => setVideo(e.target.files[0])}
            />
          </Icon>
        </VideoFileChosen>
        <ImageFileChosen choosenImage={addImageProgressContent}>
          <Icon>
            <LandscapeIcon />
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              style={{ display: "none" }}
              onChange={(e) => setImage(e.target.files[0])}
            />
          </Icon>
        </ImageFileChosen>
        <AudioFileChosen choosenAudio={addAudioProgressContent}>
          <Icon>
            <KeyboardVoiceIcon />
            <input
              type="file"
              id="audioInput"
              accept="audio/*"
              style={{ display: "none" }}
              onChange={(e) => setAudio(e.target.files[0])}
            />
          </Icon>
        </AudioFileChosen>
      </Wrapper>
    </Container>
  );
};

export default AddFiles;

/////////////////////////////////////////////////

// const Decagon = styled.div`
/* position: relative;
  width: 100px;
  height: 100px;
  background-color: red;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: inherit;
  }

  &::before {
    width: 0;
    height: 0;
    border-bottom: 100px solid red;
    border-left: 35px solid transparent;
    border-right: 35px solid transparent;
    transform-origin: 50% 0;
    transform: rotate(36deg);
  }

  &::after {
    width: 0;
    height: 0;
    border-top: 100px solid red;
    border-left: 35px solid transparent;
    border-right: 35px solid transparent;
    transform-origin: 50% 100%;
    transform: rotate(-36deg);
  } */
// `;
