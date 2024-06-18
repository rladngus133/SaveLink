import Card from "../components/common/Card";
import PlusButton from "../components/common/PlusButton";
import CardList from "../components/common/CardList";
import Header from "../components/Header";
import styled from "styled-components";

export default function MyLink() {
  return (
    <>
      <Header />
      <S.NavSpacer>
        <CardList>
          {[...Array(10)].map((_, i) => (
            <Card key={i} />
          ))}
        </CardList>
      </S.NavSpacer>
      <PlusButton />
    </>
  );
}

const S = {
  NavSpacer: styled.div`
    margin-top: 100px;
  `,
};
