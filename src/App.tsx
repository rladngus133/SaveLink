import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { theme } from "./styles/theme";
import SearchBar from "./components/common/SearchBar";
import Logo from "./components/common/Logo";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Logo />
      <SearchBar />
    </ThemeProvider>
  );
}

export default App;
