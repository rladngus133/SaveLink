import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { theme } from "./styles/theme";
import SearchBar from "./components/common/SearchBar";
import Logo from "./components/common/Logo";
import Card from "./components/common/Card";
import PlusButton from "./components/common/PlusButton";
import CardList from "./components/common/CardList";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Logo />
      <SearchBar />
      <CardList>
        {[...Array(8)].map((_, i) => (
          <Card key={i} />
        ))}
      </CardList>
      <PlusButton />
    </ThemeProvider>
  );
}

export default App;
