import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileCard from "../components/ProfileCard";
import FloatingButtons from "../components/FloatingButtons";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  justify-content: center;
  align-items: center;
`;

const FindStaffPage = () => {
  const query = useLocation().search;
  const [staffs, setStaffs] = useState([]);

  const { currentUser } = useSelector((state) => state.user);
  const token = currentUser.token;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          //   `http://localhost:8080/api/user/getAllStaff${query}`,
          `https://sbobackend.onrender.com/api/user/getAllStaff${query}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }
        );

        setStaffs(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUser();
  }, [query]);

  return (
    <>
      <Container>
        <Header />
        <Wrapper>
          {staffs?.map((staff) => (
            <ProfileCard key={staff._id} staff={staff} />
          ))}
        </Wrapper>
      </Container>
      <FloatingButtons />
    </>
  );
};

export default FindStaffPage;
