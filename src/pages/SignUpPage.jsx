import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../redux/userSlice";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 20px;
  height: auto;
  width: 250px;
  background-color: transparent;
  border: 2px solid #aecaff;
  padding: 20px;
  gap: 10px;

  @media only screen and (min-width: 625px) {
    height: auto;
    width: 500px;
  }
`;

const Text = styled.div`
  font-weight: 800;
  color: #424656;
`;

const Input = styled.input`
  background-color: transparent;
  width: 100%;
  height: 20px;
  outline: none;
  color: #424656;
  border: 2px solid #aecaff;
  border-radius: 6px;
  padding: 5px;
`;

const Button = styled.button`
  border-radius: 10px;
  width: 100px;
  color: white;
  padding: 5px 15px;
  background-color: #3ea6ff;
  border: none;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const Textsm = styled.div`
  font-size: smaller;
  font-weight: 300;
`;

const Avatar = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 50px;
  background-color: #999;

  @media only screen and (min-width: 625px) {
    width: 74px;
    height: 74px;
  }
`;

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [staffID, setStaffID] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [plantLocation, setPlantLocation] = useState("");
  const [department, setDepartment] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      //   const res = await axios.post("http://localhost:8080/api/auth/signUp", {
      const res = await axios.post(
        "https://sbobackend.onrender.com/api/auth/signUp",
        {
          name,
          email,
          staffID,
          contact,
          password,
          passwordConfirm,
          plantLocation,
          department,
          role,
          company,
        }
      );

      console.log(res.data);
      dispatch(loginSuccess(res.data));
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Text>SignUp as a new staff member</Text>
        <Avatar />
        <Input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name"
        />
        <Input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <Input
          type="text"
          onChange={(e) => setStaffID(e.target.value)}
          placeholder="Staff ID"
        />
        <Input
          type="tel"
          onChange={(e) => setContact(e.target.value)}
          placeholder="Phone number"
        />
        <Input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <Input
          type="password"
          onChange={(e) => setPasswordConfirm(e.target.value)}
          placeholder="Password confirm"
        />
        <Input
          type="text"
          onChange={(e) => setPlantLocation(e.target.value)}
          placeholder="Plant Location"
        />
        <Input
          type="text"
          onChange={(e) => setDepartment(e.target.value)}
          placeholder="Department"
        />
        <Input
          type="text"
          onChange={(e) => setRole(e.target.value)}
          placeholder="Role"
        />
        <Textsm>If you are a contractor</Textsm>
        <Input
          type="text"
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Company"
        />
        <Button onClick={handleSignUp}>SignUp</Button>
      </Wrapper>
    </Container>
  );
};

export default SignUpPage;
