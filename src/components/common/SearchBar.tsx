import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

export default function SearchBar() {
  return (
    <S.Container>
      <S.Input type="text" id="search-input" />
      <S.Button>
        <FaSearch color="#bbb" />
      </S.Button>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    width: 100%;
  `,

  Input: styled.input`
    flex: 1;
    padding: 11px;
    background-color: #eee;

    border: none;
    border-right: none;
    border-radius: 24px 0 0 24px;
    outline: none;
  `,

  Button: styled.button`
    padding-right: 11px;
    background-color: #eee;
    border-left: none;
    border-radius: 0 24px 24px 0;
  `,
};
