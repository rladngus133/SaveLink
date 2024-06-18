import styled from "styled-components";
import Logo from "./common/Logo";
import SearchBar from "./common/SearchBar";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <S.Container>
      <S.LeftSide>
        <Logo />
        <SearchBar />
      </S.LeftSide>
      <S.RightSide>
        <Link to={"/login"}>로그인</Link>
        <Link to={"/register"}>회원가입</Link>
      </S.RightSide>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;

    width: 100%;
    padding-inline: 12px;
    padding-block: 24px;

    position: fixed;
    top: 0;
    z-index: 111;

    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  `,

  LeftSide: styled.div`
    display: flex;
    flex: 1;
    gap: 8px;
  `,
  RightSide: styled.div`
    display: flex;
    gap: 8px;
    padding-left: 8px;
  `,
};
