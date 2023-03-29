import React from "react";
import styled from "styled-components";

const Text = styled.div`
  font-size: x-small;
  font-weight: 500;
`;

export const Label1 = () => {
  return <Text>Action</Text>;
};

export const Label2 = () => {
  return <Text>Conditions</Text>;
};

export const Label3 = () => {
  return <Text>Nearmisses</Text>;
};
