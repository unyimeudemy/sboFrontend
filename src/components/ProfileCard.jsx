import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ClickedProfile from "../pages/ClickedProfile";
import { useDispatch } from "react-redux";
import { yesClickedProfile } from "../redux/clickedProfileSlice";

const Container = styled.div`
  width: 290px;
  height: 60px;
  margin: 8px;
  background-color: #ccddff;
  border-radius: 10px;
  border: 1px solid blue;
  display: flex;
  gap: 10px;
  padding: 5px;
  cursor: pointer;

  :hover {
    cursor: pointer;
    background-color: #b7cffa;
  }

  @media only screen and (min-width: 768px) {
    width: 600px;
    margin-right: 144px;
  }
`;

const ProfilePicture = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 100%;
  background-color: #737373;
`;

const BasicInfo = styled.div``;

const Name = styled.div`
  font-weight: 800;
  font-size: small;
  color: #333333;
`;

const Department = styled.div`
  font-weight: 800;
  font-size: small;
  color: #333333;
`;

const StaffID = styled.div`
  font-weight: 800;
  font-size: small;
  color: #333333;
`;

const ProfileCard = ({ staff }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Container
      onClick={() => {
        dispatch(yesClickedProfile(staff));
        navigate("/clickedProfile");
      }}
    >
      <ProfilePicture src="https://i.pravatar.cc/150?img=68" />
      <BasicInfo>
        <Name>{staff.name}</Name>
        <Department>{staff.department}</Department>
        <StaffID>GZI-{staff.staffID}</StaffID>
      </BasicInfo>
    </Container>
  );
};

export default ProfileCard;
