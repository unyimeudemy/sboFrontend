import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FloatingButtons from "../components/FloatingButtons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding: 20px;
  gap: 10px;

  @media only screen and (min-width: 768px) {
    margin-right: 130px;
  }
`;

const ChooseFileButton = styled.label`
  border-radius: 10px;
  width: 200px;
  color: white;
  padding: 5px 15px;
  background-color: #003cb3;
  border: 1px solid blue;
  font-weight: 900;
  font-size: medium;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  /* box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4); */
`;

const Detail = styled.textarea`
  width: 250px;
  height: 150px;
  border-radius: 10px;
  border: 1px solid blue;
  padding: 20px;

  @media only screen and (min-width: 768px) {
    width: 350px;
    height: 250px;
  }
`;

const Buttons = styled.div`
  display: flex;
  /* justify-items: space-around; */
  gap: 70px;

  @media only screen and (min-width: 768px) {
    gap: 210px;
  }
`;

const CancelButton = styled.div`
  /* margin-left: 0px; */
  border-radius: 10px;
  width: 60px;
  color: white;
  padding: 5px 15px;
  background-color: #003cb3;
  border: 1px solid blue;
  font-weight: 900;
  font-size: medium;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  /* box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4); */
`;

const SendButton = styled.div`
  /* margin-right: 0px; */
  border-radius: 10px;
  width: 60px;
  color: white;
  padding: 5px 15px;
  background-color: #003cb3;
  border: 1px solid blue;
  font-weight: 900;
  font-size: medium;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  /* box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4); */
`;

const AboutUsPage = () => {
  const [detail, setDetail] = useState("");
  const [file, setFile] = useState(undefined);
  const navigate = useNavigate();

  const handleFeedBack = async () => {
    try {
    //   const res = await axios.post("http://localhost:8080/api/user/feedback", {
          const res = await axios.post(
            "https://sbobackend.onrender.com/api/user/feedback",
            {
        file: file,
        detail: detail,
      });

      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Container>
        <Header />
        <Wrapper>
          <ChooseFileButton>
            <FolderOpenOutlinedIcon />
            Attach File
            <input
              type="file"
              id="imageInput"
              accept="/*"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </ChooseFileButton>
          <Detail
            placeholder="Recommendation or Complaint. You can add a file with the button above."
            onChange={(e) => setDetail(e.target.value)}
          />
          <Buttons>
            <CancelButton onClick={() => navigate("/home")}>
              Cancel
            </CancelButton>
            <SendButton onClick={handleFeedBack}>Send</SendButton>
          </Buttons>
        </Wrapper>
      </Container>
      <FloatingButtons />
    </>
  );
};

export default AboutUsPage;
