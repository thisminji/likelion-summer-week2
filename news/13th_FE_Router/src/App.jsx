import { styled, ThemeProvider } from "styled-components";

import { Outlet } from "react-router-dom";

const Wrapper = styled.div`
  background-color: white;

  * {
    border: 1px solid black;
  }
`;

const Layout = () => {
  return (
    <>
      <Wrapper>
        <h3>신나는 라우터 실습</h3>
        <Outlet />
      </Wrapper>
    </>
  );
};

function App() {
  return (
    <>
      <Layout />
    </>
  );
}

export default App;
