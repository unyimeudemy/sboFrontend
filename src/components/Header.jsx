import React, { useState } from "react";
import styled from "styled-components";
import gziLogo from "../images/gziLogo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Menu from "./Menu";

const Container = styled.div`
  background-color: #aecaff;
  /* position: fixed; */
  top: 0px;
  width: 100%;
`;

const Wrapper = styled.div`
  margin: 5px;
  display: flex;
  align-items: center;
`;

const MenuAndLogo = styled.div`
  display: flex;
  gap: 4px;
`;

const Item = styled.div``;

const Search = styled.div`
  margin-left: auto;
`;

const Logo = styled.img`
  height: 20px;
  width: 40px;
`;

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <Container>
        <Wrapper>
          <MenuAndLogo>
            <Item onClick={() => setMenu(!menu)}>
              <MenuIcon />
            </Item>
            <Logo src={gziLogo} />
          </MenuAndLogo>
          <Search>
            <SearchIcon />
          </Search>
        </Wrapper>
      </Container>
      {menu && <Menu menu={menu} setMenu={setMenu} />}
    </>
  );
};

export default Header;
