import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { yesSBO } from "../redux/SBOSlice";
import Header from "../components/Header";
import FloatingButtons from "../components/FloatingButtons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

const ProfilePicture = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  margin-bottom: 20px;
  margin-top: 180px;
  position: absolute;
  left: 60px;

  @media only screen and (min-width: 768px) {
    margin-top: 100px;
    top: 30px;
    left: 570px;
  }
`;

const UserName = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const UserBio = styled.p`
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border-radius: 10px;
  width: 200px;
  color: #424656;
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid blue;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const Right = styled.div`
  height: 500px;
  width: 300px;
  background-color: #ccddff;
  margin: 10px;
  /* padding: 15px; */
  border-radius: 10px;
  border: 1px solid blue;
`;

const Left = styled.div``;

const Top = styled.div`
  background-color: white;
  height: 25%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

const Bottom = styled.div`
  background-color: transparent;
  height: 70%;
  margin-top: 60px;
`;

const Item = styled.div`
  margin: 5px;
  display: flex;
  justify-content: center;
`;

const MyProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.user);
  const token = currentUser.token;

  const handleSBOPage = async () => {
    navigate("/findSBOs");
    try {
      //   const res = await axios.get("http://localhost:8080/api/sbo/mySBOs", {
      const res = await axios.get(
        "https://sbobackend.onrender.com/api/sbo/mySBOs",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      dispatch(yesSBO(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <Header />
        <Wrapper>
          <Right>
            <Top></Top>
            <Bottom>
              <Item>
                <Button onClick={handleSBOPage}>Get all SBOs</Button>
              </Item>
            </Bottom>
          </Right>
          <Left></Left>
        </Wrapper>
        <ProfilePicture src="https://i.pravatar.cc/150?img=68" />
      </Container>
      <FloatingButtons />
    </>
  );
};

export default MyProfile;
