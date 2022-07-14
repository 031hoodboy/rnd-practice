import React from "react";
import styled from "styled-components";
import { ReactComponent as LogoIcon } from "../assets/logo.svg";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { ReactComponent as GridIcon } from "../assets/grid.svg";
import { ReactComponent as PiechartIcon } from "../assets/pie-chart.svg";
import { ReactComponent as DownloadIcon } from "../assets/download.svg";

const Header = () => {
  return (
    <HeaderBlock>
      <LogoBlock>
        <LogoIcon />
      </LogoBlock>
      <SearchbarBlock>
        <SearchbarWrapper>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <Searchinput placeholder="주소를 입력해주세요. (예시. 지번주소)" />
        </SearchbarWrapper>
      </SearchbarBlock>
      <Sidebar>
        <Nav style={{ backgroundColor: "#f7f7f7", color: "#1E88E5" }}>
          <GridIcon />
          리포트
        </Nav>
        <Nav>
          <PiechartIcon />
          분석
        </Nav>
        <Nav>
          <DownloadIcon />
          데이터 다운로드
        </Nav>
      </Sidebar>
    </HeaderBlock>
  );
};

const HeaderBlock = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
`;

const LogoBlock = styled.div`
  width: 258px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #f2f2f2;
`;

const SearchbarBlock = styled.div`
  width: calc(100% - 258px);
  height: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f2f2f2;
`;

const Sidebar = styled.div`
  width: 258px;
  height: 100%;
  background-color: #fff;
  position: fixed;
  top: 65px;
  left: 0;
`;

const Nav = styled.div`
  display: flex;
  font-size: 13px;
  padding: 12px 28px 12px 32px;
  display: flex;
  align-items: center;
  color: #7a8190;
  svg {
    margin-right: 16px;
    color: #7a8190;
    font-size: 20px;
    width: 20px;
    height: 20px;
    opacity: 0.5;
  }
`;

const SearchbarWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 12px;
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  margin-left: 12px;
  svg {
    margin-top: 4px;
    width: 22px;
    height: 22px;
  }
`;

const Searchinput = styled.input`
  width: 458px;
  font-size: 13px;
  padding: 10px 10px 10px 48px;
  outline: none;
  border: none;
  font-weight: 400;
  line-height: 1.4375em;
  color: rgba(0, 0, 0, 0.87);
  &:hover {
    background-color: #f4f4f5;
  }
`;

export default Header;
