import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { detailEmpty } from "../../redux/safeWorkPractiseSlice";
import { unsafeDetailEmpty } from "../../redux/unsafeWorkPractiseSlice";
import { tabNotChosen } from "../../redux/tabSlice";
import { noSboFormCheck, yesSboFormCheck } from "../../redux/sboFormCheckSlice";
import { recommendationDetailEmpty } from "../../redux/recommendationSlice";
import { departmentNotChosen } from "../../redux/departmentSlice";
import { noAddImageProgress } from "../../redux/addFilesProgressSlices/addImageProgressSlice";
import { noAddAudioProgress } from "../../redux/addFilesProgressSlices/addAudioProgressSlice";
import { noAddVideoProgress } from "../../redux/addFilesProgressSlices/addVideoProgressSlice";

const Container = styled.div`
  display: flex;
  gap: 150px;
`;

const Button = styled.button`
  border-radius: 10px;
  width: 100px;
  height: 40px;
  color: white;
  padding: 5px 15px;
  background-color: transparent;
  border: none;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-weight: 800;
  background-color: #003cb3;
`;

const DownButtons = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const detail = useSelector((state) => state.safeWorkPractise);
  const departmentResponsible = useSelector((state) => state.department);
  const recommendationDetail = useSelector((state) => state.recommendation);
  const unsafeDetail = useSelector((state) => state.unsafeWorkPractise);
  const title = useSelector((state) => state.tab);
  const { filesContent } = useSelector((state) => state.files);
  //   console.log("❤", filesContent.imageURL);

  const theDepartmentResponsible = JSON.stringify(departmentResponsible)
    .substring(25)
    .replaceAll(`"}`, "");
  const tabInfo = ["Actions", "Conditions", "Nearmisses"];

  const headOfDepartment = {
    Sandip: "Electrical",
    Pillai: "Maintenance",
    Brian: "Human Resource",
    Eniola: "Quality Assurance",
    Gaius: "CPI",
    Stanley: "Health Safety & Environment",
    Ayotunde: "Quality Control",
    Bellow: "Washer",
    Opeyemi: "PPC",
    Philip: "Tool room",
    Idowu: "Store",
    Jaco: "Security",
    Ignatius: "Warehouse",
    Sreejith: "Operations",
  };

  // console.log("❤", theDepartmentResponsible);

  const key = Object.keys(headOfDepartment).find(
    (key) => headOfDepartment[key] === theDepartmentResponsible
  );

  //   console.log(key);

  //getting SBO category from URL
  const URL = useLocation().search;
  const info = URL.split("/");
  const category = info[0].substring(1).replaceAll("%20", " ");
  const subCategory = info[1].replaceAll("%20", " ");

  const token = currentUser?.token;
  console.log(currentUser.data.staffID);

  console.log("✔✔", currentUser.data.plantLocation);
  //   console.log("✔", subCategory);
  //   tabInfo[title.title] &&
  // subCategory: tabInfo[title.title] && subCategory,

  const handleSummit = async () => {
    console.log(detail.detail);
    console.log(unsafeDetail.unsafeDetail);

    if (detail.detail === null && unsafeDetail.unsafeDetail === null) {
      dispatch(
        yesSboFormCheck(
          "Please ensure you've provided the detail for your SBO report"
        )
      );
      return;
    }

    try {
      console.log("entered");
      dispatch(noSboFormCheck());

      const res = await axios.post(
        currentUser
        //   ? "http://localhost:8080/api/sbo/fillSboStaff"
          ? "https://sbobackend.onrender.com/api/sbo/fillSboStaff"
            // "http://localhost:8080/api/sbo/fillSboVisitor",
          : "https://sbobackend.onrender.com/api/sbo/fillSboVisitor",
        {
          details: detail.detail ? detail.detail : unsafeDetail.unsafeDetail,
          title: tabInfo[title.title]
            ? tabInfo[title.title]
            : "Safe Work Practise",
          category: category,
          subCategory: subCategory,
          staffID: currentUser ? currentUser.data.staffID : undefined,
          staffDepartment: currentUser
            ? currentUser.data.department
            : undefined,
          staffName: currentUser ? currentUser.data.name : undefined,
          plantLocation: currentUser
            ? currentUser.data.plantLocation
            : undefined,
          recommendation: recommendationDetail.recommendationDetail,
          videoURL: filesContent ? filesContent.videoURL : undefined,
          imageURL: filesContent ? filesContent.imageURL : undefined,
          audioURL: filesContent ? filesContent.audioURL : undefined,
          headOfDepartment: key,
          departmentResponsible:
            theDepartmentResponsible === "ull}"
              ? theDepartmentResponsible === null
              : theDepartmentResponsible,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      navigate("/categories");
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }

    dispatch(detailEmpty());
    dispatch(noAddImageProgress());
    dispatch(noAddAudioProgress());
    dispatch(noAddVideoProgress());
    dispatch(unsafeDetailEmpty());
    dispatch(tabNotChosen());
    dispatch(recommendationDetailEmpty());
    dispatch(departmentNotChosen());
  };

  const handleBack = () => {
    navigate("/categories");
    dispatch(detailEmpty());
  };

  return (
    <Container>
      <Button onClick={handleBack}>Back</Button>
      <Button onClick={handleSummit}>Summit</Button>
    </Container>
  );
};

export default DownButtons;
