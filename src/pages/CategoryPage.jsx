import React from "react";
import styled from "styled-components";
import CategoryCard from "../components/CategoryCard";
import { categoryAPI } from "../APIs/categoryAPI";
import Header from "../components/Header";
import FloatingButtons from "../components/FloatingButtons";
// import { Link } from "react-router-dom";
//    <Link to="trend" style={{ textDecoration: "none", color: "inherit" }}>

const Container = styled.div`
  background-color: transparent;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  bottom: 0%;
  overflow: hidden;

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

  @media only screen and (min-width: 768px) {
    flex-flow: row wrap;
    padding-right: 90px;
  }
  /* @media only screen and (max-width: 625px) {
    height: 200px;
    width: 400px;
  } */
`;

const CategoryPage = () => {
  return (
    <>
      <Container>
        <Header />
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
      <FloatingButtons />
    </>
  );
};

export default CategoryPage;
