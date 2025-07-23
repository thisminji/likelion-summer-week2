// src/pages/HomePage.jsx
import styled from "styled-components";
import Header from "../components/Header";
import TabMenu from "../components/TabMenu";
import CardList from "../components/CardList";

function HomePage() {
  return (
    <Container>
      <Header />
      <TabMenu />
      <CardList />
    </Container>
  );
}

export default HomePage;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  box-sizing: border-box;
`;