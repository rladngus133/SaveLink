import SearchBar from "../components/common/SearchBar";
import Logo from "../components/common/Logo";
import Card from "../components/common/Card";
import PlusButton from "../components/common/PlusButton";
import CardList from "../components/common/CardList";

export default function MyLink() {
  return (
    <div>
      <Logo />
      <SearchBar />
      <CardList>
        {[...Array(1)].map((_, i) => (
          <Card key={i} />
        ))}
      </CardList>
      <PlusButton />
    </div>
  );
}
