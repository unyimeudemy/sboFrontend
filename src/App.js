import styled from "styled-components";
import LandingPage from "./pages/LandingPage.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import MyProfile from "./pages/MyProfile.jsx";
import FindSBOPage from "./pages/FindSBOPage.jsx";

import {
  //   createBrowserRouter,
  //   RouterProvider,
  BrowserRouter,
  Routes,
  Route,
  //   Link,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import SboForm from "./pages/SboForm.jsx";
import FindStaffPage from "./pages/FindStaffPage.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import FeedBackPage from "./pages/FeedBackPage.jsx";
import { useEffect } from "react";

const Container = styled.div`
  background-color: #f4faff;
`;

const Wrapper = styled.div`
  /* background-color: #ddebea; */
`;

const Hr = styled.hr`
  margin: 70px 20px;
  border: 1px solid red;
`;

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Wrapper>
          {/* <Header /> */}
          {/* <Hr /> */}
          <Routes>
            <Route path="/">
              <Route index element={<LandingPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="home" element={<LandingPage />} />
              <Route path="myProfile" element={<MyProfile />} />
              <Route path="findSBOs" element={<FindSBOPage />} />
              <Route path="searchStaff" element={<FindStaffPage />} />
              <Route path="aboutUs" element={<AboutUsPage />} />
              <Route path="feedback" element={<FeedBackPage />} />
              <Route path="categories" element={<CategoryPage />} />
              <Route path="sboForm" element={<SboForm />} />
              <Route path="signUp" element={<SignUpPage />} />
            </Route>
          </Routes>
          {/* <Hr /> */}
          {/* <Footer /> */}
        </Wrapper>
      </BrowserRouter>
    </Container>
  );
}

export default App;
