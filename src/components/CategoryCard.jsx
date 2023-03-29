import React from "react";
import styled from "styled-components";
import Subtitle from "./Subtitle";

const Container = styled.div`
  background-color: transparent;
  display: flex;
  align-content: center;
  justify-content: center;
  /* @media only screen and (max-width: 425px) {
    display: none;
  } */
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  /* @media only screen and (max-width: 625px) {
    height: 200px;
    width: 400px;
  } */
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 600;
  color: white;
`;

const Card = styled.div`
  width: 200px;
  height: auto;
  border: 1px solid #3ea6ff;
  border-radius: 10px;
  background-color: #3ea6ff;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  gap: 5px;
  padding: 5px;
`;

const CardInside = styled.div`
  width: 190px;
  height: auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: small;
  /* align-content: center; */
  justify-content: center;
  margin-bottom: 5px;
  padding: 5px;
`;

const CategoryDetail = styled.div`
  display: flex;
  justify-content: center;
`;

const CategoryCard = ({ title, subtitles }) => {
  subtitles?.map((subtitle, i) => console.log(subtitle));
  return (
    <Container>
      <Wrapper>
        <Card>
          <Text>{title}</Text>
          <CategoryDetail>
            <CardInside>
              {subtitles?.map((subtitle, i) => (
                <Subtitle subtitle={subtitle} />
              ))}
            </CardInside>
          </CategoryDetail>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default CategoryCard;

// const Button = styled.button`
//   border-radius: 10px;
//   width: 100px;
//   color: #424656;
//   padding: 5px 15px;
//   background-color: transparent;
//   border: 1px solid #3ea6ff;
//   font-weight: 500;
//   cursor: pointer;
//   text-align: center;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 5px;
// `;
