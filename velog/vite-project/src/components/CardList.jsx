// src/components/CardList.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Card from "./Card";

function CardList() {
  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const BASE = import.meta.env.VITE_API_BASE_URL;

    const fetchData = async () => {
      try {
        const res = await axios.get(`${BASE}/boards`);
        setBoards(res.data);
      } catch (err) {
        console.error("게시글 목록 불러오기 실패:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  return (
    <CardGrid>
      {boards.map((item) => (
        <StyledLink key={item.id} to={`/boards/${item.id}`}>
          <Card item={item} />
        </StyledLink>
      ))}
    </CardGrid>
  );
}

export default CardList;


const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`;

const CardGrid = styled.div`
  display: grid;
  grid-auto-rows: 1fr;   /* 모든 그리드 행 높이를 동일하게 */
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  margin: 0 auto;
  padding: 32px 24px 0;
  box-sizing: border-box;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 768px) and (max-width: 1199px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;