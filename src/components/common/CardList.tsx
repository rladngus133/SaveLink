import { ReactNode } from "react";
import styled from "styled-components";

export default function CardList({ children }: { children: ReactNode }) {
  return <S.Container>{children}</S.Container>;
}

const S = {
  Container: styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 8px;
    padding-inline: 12px;
    padding-block: 8px;
  `,
};
