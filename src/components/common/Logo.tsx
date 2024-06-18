import styled from "styled-components";

export default function Logo() {
  return <S.H1>S</S.H1>;
}

const S = {
  H1: styled.h1`
    color: ${({ theme }) => theme.colors.main};
    font-weight: 700;
    font-size: 36px;
    text-align: center;
  `,
};
