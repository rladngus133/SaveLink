import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

export default function SearchBar() {
  return (
    <S.Container>
      <S.Input type="text" />
      <S.Button>
        <FaSearch />
      </S.Button>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    display: flex;
  `,

  Input: styled.input`
    flex: 1;
    padding: 11px;

    border: 1px solid ${({ theme }) => theme.colors.main};
    border-right: none;
    border-radius: 24px 0 0 24px;
    outline: none;
  `,

  Button: styled.button`
    padding-right: 11px;

    border: 1px solid ${({ theme }) => theme.colors.main};
    border-left: none;
    border-radius: 0 24px 24px 0;
  `,
};
