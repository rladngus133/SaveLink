import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { theme } from "./styles/theme";
import SearchBar from "./components/common/SearchBar";
import Logo from "./components/common/Logo";
import Card from "./components/common/Card";
import PlusButton from "./components/common/PlusButton";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Logo />
      <SearchBar />
      <Card />
      <PlusButton />
    </ThemeProvider>
  );
}

export default App;
