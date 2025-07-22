import { useState } from "react";
import Header from "./components/Header/Header";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./components/common/Theme";
import { GlobalStyle } from "./GlobalStyle";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  );
};

function App() {
  // User Theme----------------------------------------
  const [themeMode, setThemeMode] = useState("black");

  const theme = themeMode === "black" ? dark : light;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
