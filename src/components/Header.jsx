import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import LOGO from "../images/LOGO.svg";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Menu from "./Menu";
import { useNavigate } from "react-router-dom";

const Fragment = styled.div``;

const Container = styled.div`
  background-color: #f4faff;
  /* position: fixed; */
  top: 0px;
  width: 100%;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  margin: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const MenuAndLogo = styled.div`
  display: flex;
  gap: 4px;
`;

const Item = styled.div`
  color: #002b80;
  font-weight: 1000;
  font-size: large;
  cursor: pointer;
`;

const Item2 = styled.div`
  color: #002b80;
  font-weight: 1000;
  font-size: large;
  cursor: pointer;
  margin-left: auto;
`;

const Lower = styled.div`
  display: flex;
  width: 100%;
  align-content: center;
  justify-content: center;
`;

const Search = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;

  width: 300px;
  height: 30px;
  gap: 10px;
  color: #424656;
  border-radius: 50px;

  background-color: #ccddff;
  border: 1px solid blue;
  border: 1px solid blue;
  padding: 5px;

  @media only screen and (min-width: 768px) {
    width: 600px;
    height: 30px;
    /* margin-left: 20px; */
  }
`;

const Input = styled.input`
  border: none;
  background-color: #ccddff;
  width: 100%;
  /* height: 100%; */
  outline: none;
  padding: 5px;
  /* border-radius: 20px; */
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;

const Logo = styled.img`
  height: 50px;
  width: 70px;

  @media only screen and (min-width: 768px) {
    position: relative;
    /* margin-right: 20px; */
  }
`;

const Upper = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  gap: 80px;
`;

const ProfilePicture = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  background-color: #424656;

  @media only screen and (min-width: 768px) {
    width: 35px;
    height: 35px;
    border-radius: 100%;
    background-color: #404040;
  }
`;

//CONTAINER TWO STYLES

const Container2 = styled.div`
  background-color: #f4faff;
  position: relative;
  top: 0px;
  width: 100%;
  right: 140px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (menu) {
      console.log("inside", menu);
      // Disable scrolling on mount
      document.body.style.overflow = "hidden";
    } else {
      console.log("outside", menu);
      // Re-enable scrolling on unmount
      document.body.style.overflow = "auto";
    }
  }, [menu]);

  //////////////////////////////////////////
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  ////////////////////////////////////////////

  const handleKeyPress = (e) => {
    console.log(e);
    if (e.key === "Enter") {
      navigate(`/searchStaff?q=${q}`);
    }
  };

  return (
    <Fragment ref={menuRef}>
      <Container>
        <Wrapper>
          <Upper>
            <Item onClick={() => setMenu(!menu)}>
              <MenuIcon />
            </Item>
            <Logo src={LOGO} />
            <ProfilePicture></ProfilePicture>
          </Upper>
          <Lower>
            <Search>
              <Input
                type="search"
                placeholder="Search a staff by name or ID"
                onKeyDown={handleKeyPress}
                onChange={(e) => setQ(e.target.value)}
              ></Input>
              <Item onClick={() => navigate(`/searchStaff?q=${q}`)}>
                <SearchIcon />
              </Item>
            </Search>
          </Lower>
        </Wrapper>
      </Container>
      <Container2>
        <Wrapper>
          <Upper>
            <Item onClick={() => setMenu(!menu)}>
              <MenuIcon />
            </Item>
            <Logo src={LOGO} />
            <Lower>
              <Search>
                <Input
                  type="search"
                  placeholder="Search a staff by ID"
                  onKeyDown={handleKeyPress}
                  onChange={(e) => setQ(e.target.value)}
                ></Input>
                <Item onClick={() => navigate(`/searchStaff?q=${q}`)}>
                  <SearchIcon />
                </Item>
              </Search>
            </Lower>
            <Item2>
              <ProfilePicture src="https://i.pravatar.cc/150?img=68" />
            </Item2>
          </Upper>
        </Wrapper>
      </Container2>
      {menu && <Menu menu={menu} setMenu={setMenu} />}
    </Fragment>
  );
};

export default Header;

///////////////////////////////
