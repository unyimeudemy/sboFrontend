import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../redux/userSlice";
import LOGO from "../images/LOGO.svg";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SelectDepartmentSignUp from "../components/SelectDepartmentSignUp";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;

const BackButton = styled.div`
  display: flex;
  background-color: transparent;
  width: 100%;
  height: 20px;
  /* margin-bottom: auto; */
`;

const Item = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 10px;
  font-weight: 700;
  color: #002b80;
  cursor: pointer;
`;

const Wrapper = styled.div``;

const WrapperInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  height: auto;
  width: 250px;
  background-color: transparent;
  border: 1px solid #002b80;
  padding: 20px;
  gap: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.27);

  @media only screen and (min-width: 625px) {
    height: auto;
    width: 500px;
  }
`;

const Text = styled.div`
  font-weight: 800;
  color: #002b80;
`;

const Input = styled.input`
  background-color: transparent;
  width: 100%;
  height: 20px;
  outline: none;
  color: #424656;
  border: 1px solid #002b80;
  border-radius: 6px;
  padding: 5px;
`;

const Button = styled.button`
  border-radius: 10px;
  width: 100px;
  color: white;
  padding: 5px 15px;
  border: 1px solid blue;
  background-color: #002b80;
  /* border: none; */
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-weight: 700;
`;

const Textsm = styled.div`
  font-size: smaller;
  font-weight: 300;
`;

const Icon = styled.label`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  /* border: 1px solid #737373; */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #002b80;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const Logo = styled.img`
  height: 50px;
  width: 70px;

  /* @media only screen and (min-width: 768px) {
    position: relative;
    /* margin-right: 20px; */
  /* }  */
`;

const FullName = styled.input`
  background-color: transparent;
  width: 100%;
  height: 20px;
  outline: none;
  color: #424656;
  border: 1px solid #002b80;
  border-radius: 6px;
  padding: 5px;
`;

const EmailAndID = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  align-content: center;
  justify-items: center;
`;

const Email = styled.input`
  width: 80%;
  background-color: transparent;
  height: 20px;
  outline: none;
  color: #424656;
  border: 1px solid #002b80;
  border-radius: 6px;
  padding: 5px;
`;

const ID = styled.input`
  background-color: transparent;
  width: 20%;
  height: 20px;
  outline: none;
  color: #424656;
  border: 1px solid #002b80;
  border-radius: 6px;
  padding: 5px;
`;

const PhoneAndPlantLocation = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  align-content: center;
  justify-items: center;
`;

const DepartmentAndRole = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  align-content: center;
  justify-items: center;
`;

const Department = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  width: 50%;
  height: 20px;
  border-radius: 5px;
  border: 1px solid #002b80;
  padding: 5px;
`;

const DepartmentText = styled.div`
  color: black;
  font-size: smaller;
  overflow: hidden;
`;

const PlantLocation = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  width: 50%;
  height: 20px;
  border-radius: 5px;
  border: 1px solid #002b80;
  padding: 5px;
`;

const PlantLocationText = styled.div`
  color: black;
  font-size: smaller;
  overflow: hidden;
`;

const DownIcon = styled.div`
  margin-left: auto;
`;

const PasswordAndPasswordConfirm = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  align-content: center;
  justify-items: center;
`;

//DEPARTMENT POPUP STYLES
const MenuContainer = styled.div`
  position: absolute;
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  /* width: 300px; */
  width: 240px;
  height: 100px;
  background-color: #e6eeff;
  gap: 10px;
  padding: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.27);
  /* color: #002b80; */

  @media only screen and (min-width: 425px) {
    /* display: none; */
    /* width: 900px;
    height: 50px; */
    /* ::-webkit-scrollbar {
      display: none;
    } */
  }
`;

const WrapperPopUp = styled.div``;

const TextPopUp = styled.div`
  padding: 7px;
  border-radius: 5px;
  font-size: small;
  font-weight: 700;
  :hover {
    cursor: pointer;
    background-color: white;
  }
`;

// PLANT LOCATION POPUP
const MenuContainerPlant = styled.div`
  position: absolute;
  margin-top: 35px;
  margin-left: 300px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  /* width: 300px; */
  width: 180px;
  height: 100px;
  background-color: #e6eeff;
  gap: 10px;
  padding: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.27);
  /* color: #002b80; */

  @media only screen and (max-width: 425px) {
    margin-left: 50px;
  }
`;

const SignUpPage = () => {
  const [departmentPop, setDepartmentPop] = useState(false);
  const [plantLocationPopUp, setPlantLocationPopUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [staffID, setStaffID] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [plantLocation, setPlantLocation] = useState("Plant Location");
  const [department, setDepartment] = useState("Department");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/auth/signUp", {
        //   const res = await axios.post(
        //     "https://sbobackend.onrender.com/api/auth/signUp",
        //     {
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
      });

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
        <BackButton>
          <Item onClick={() => navigate("/home")}>
            <ArrowBackIcon />
            Home
          </Item>
        </BackButton>
        <WrapperInner>
          <Logo src={LOGO} />

          <Text>SignUp as a new staff member</Text>
          <Icon>
            <PersonAddIcon />
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              style={{ display: "none" }}
            />
          </Icon>
          <FullName
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
          />
          <EmailAndID>
            <Email
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <ID
              type="text"
              onChange={(e) => setStaffID(e.target.value)}
              placeholder="Staff ID"
            />
          </EmailAndID>
          <PhoneAndPlantLocation>
            <Input
              type="tel"
              onChange={(e) => setContact(e.target.value)}
              placeholder="Phone number"
            />
            <PlantLocation
              onClick={() => setPlantLocationPopUp(!plantLocationPopUp)}
            >
              <PlantLocationText>{plantLocation} </PlantLocationText>
              <DownIcon>
                {plantLocationPopUp ? (
                  <KeyboardArrowDownIcon />
                ) : (
                  <KeyboardArrowUpIcon />
                )}
              </DownIcon>
            </PlantLocation>
            {plantLocationPopUp && (
              <MenuContainerPlant>
                <WrapperPopUp>
                  <TextPopUp
                    onClick={() => {
                      setPlantLocation("Aba Plant");
                      setPlantLocationPopUp(!plantLocationPopUp);
                    }}
                  >
                    Aba Plant
                  </TextPopUp>
                  <TextPopUp
                    onClick={() => {
                      setPlantLocation("Agbara Plant");
                      setPlantLocationPopUp(!plantLocationPopUp);
                    }}
                  >
                    Agbara Plant
                  </TextPopUp>
                  <TextPopUp
                    onClick={() => {
                      setPlantLocation("South African Plant");
                      setPlantLocationPopUp(!plantLocationPopUp);
                    }}
                  >
                    South African Plant
                  </TextPopUp>
                </WrapperPopUp>
              </MenuContainerPlant>
            )}
            {/* <Input
              type="text"
              onChange={(e) => setPlantLocation(e.target.value)}
              placeholder="Plant Location"
            /> */}
          </PhoneAndPlantLocation>
          <DepartmentAndRole>
            <Department onClick={() => setDepartmentPop(!departmentPop)}>
              <DepartmentText>{department} </DepartmentText>
              <DownIcon>
                {departmentPop ? (
                  <KeyboardArrowDownIcon />
                ) : (
                  <KeyboardArrowUpIcon />
                )}
              </DownIcon>
            </Department>
            {departmentPop && (
              <MenuContainer>
                <WrapperPopUp>
                  <TextPopUp
                    onClick={() => {
                      setDepartment("Electrical");
                      setDepartmentPop(!departmentPop);
                    }}
                  >
                    Electrical
                  </TextPopUp>
                  <TextPopUp
                    onClick={() => {
                      setDepartment("Maintenance");
                      setDepartmentPop(!departmentPop);
                    }}
                  >
                    Maintenance
                  </TextPopUp>
                  <TextPopUp
                    onClick={() => {
                      setDepartment("Human Resources");
                      setDepartmentPop(!departmentPop);
                    }}
                  >
                    Human Resources
                  </TextPopUp>
                  <TextPopUp
                    onClick={() => {
                      setDepartment("Quality Assurance");
                      setDepartmentPop(!departmentPop);
                    }}
                  >
                    Quality Assurance
                  </TextPopUp>
                  <TextPopUp
                    onClick={() => {
                      setDepartment("Quality Control");
                      setDepartmentPop(!departmentPop);
                    }}
                  >
                    Quality Control
                  </TextPopUp>
                  <TextPopUp
                    onClick={() => {
                      setDepartment("CPI");
                      setDepartmentPop(!departmentPop);
                    }}
                  >
                    CPI
                  </TextPopUp>
                  <TextPopUp
                    onClick={() => {
                      setDepartment("Health Safety and Environment");
                      setDepartmentPop(!departmentPop);
                    }}
                  >
                    Health Safety and Environment
                  </TextPopUp>
                  <TextPopUp
                    onClick={() => {
                      setDepartment("Washer");
                      setDepartmentPop(!departmentPop);
                    }}
                  >
                    Washer
                  </TextPopUp>
                  <TextPopUp
                    onClick={() => {
                      setDepartment("PPC");
                      setDepartmentPop(!departmentPop);
                    }}
                  >
                    PPC
                  </TextPopUp>
                  <TextPopUp
                    onClick={() => {
                      setDepartment("Store");
                      setDepartmentPop(!departmentPop);
                    }}
                  >
                    Store
                  </TextPopUp>
                  <TextPopUp
                    onClick={() => {
                      setDepartment("Security");
                      setDepartmentPop(!departmentPop);
                    }}
                  >
                    Security
                  </TextPopUp>
                  <TextPopUp
                    onClick={() => {
                      setDepartment("Warehouse");
                      setDepartmentPop(!departmentPop);
                    }}
                  >
                    Warehouse
                  </TextPopUp>
                  <TextPopUp
                    onClick={() => {
                      setDepartment("Production");
                      setDepartmentPop(!departmentPop);
                    }}
                  >
                    Production
                  </TextPopUp>
                </WrapperPopUp>
              </MenuContainer>
            )}
            {/* <Input
              type="text"
              onChange={(e) => setDepartment(e.target.value)}
              placeholder="Department"
            /> */}
            <Input
              type="text"
              onChange={(e) => setRole(e.target.value)}
              placeholder="Role"
            />
          </DepartmentAndRole>
          <PasswordAndPasswordConfirm>
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
          </PasswordAndPasswordConfirm>

          <Textsm>If you are a contractor</Textsm>
          <Input
            type="text"
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Company"
          />
          <Button onClick={handleSignUp}>SignUp</Button>
        </WrapperInner>
      </Wrapper>
    </Container>
  );
};

export default SignUpPage;

//////////////////////////////////////////////////////////////////////////
