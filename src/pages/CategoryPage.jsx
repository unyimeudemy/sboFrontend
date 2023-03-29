import React from "react";
import styled from "styled-components";
import CategoryCard from "../components/CategoryCard";
import { categoryAPI } from "../APIs/categoryAPI";

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
  margin: 30px;

  @media only screen and (max-width: 625px) {
    height: 200px;
    width: 400px;
  }
`;

const CategoryPage = () => {
  return (
    <Container>
      <Wrapper>
        {categoryAPI?.map((category, i) => (
          <CategoryCard
            key={i}
            title={category.title}
            subtitles={category.subtitle}
          />
        ))}
      </Wrapper>
    </Container>
  );
};

export default CategoryPage;
