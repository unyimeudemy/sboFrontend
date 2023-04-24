import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div``;

const MenuContainer = styled.div`
  position: absolute;
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  /* width: 300px; */
  width: 300px;
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

const Wrapper = styled.div``;

const Text = styled.div`
  padding: 7px;
  border-radius: 5px;
  :hover {
    cursor: pointer;
    background-color: white;
  }
`;

const SelectDepartmentSignUp = () => {
  return (
    <MenuContainer>
      <Wrapper>
        <Text>Electrical</Text>
        <Text>Maintenance</Text>
        <Text>Human Resources</Text>
      </Wrapper>
    </MenuContainer>
  );
};

export default SelectDepartmentSignUp;

///////////////////////////////
