import { useEffect, useState } from "react";
import axios from "axios";
import Title from "../common/Title";
import Category from "../common/Category";
import NewsCard from "./NewsCard";
import styled from "styled-components";

const NewsList = () => {
  const [newsList, setNewsList] = useState([]);
  const [category, setCategory] = useState("general");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
        );
        console.log("API 응답:", res.data);
        setNewsList(res.data.articles);
      } catch (err) {
        console.error("뉴스 가져오기 실패:", err);
      }
    };
    fetchData();
  }, [category]);

  return (
    <Container>
      <Title title="멋사 NEWS" />
      <Category selected={category} onSelect={setCategory} />
      <NewsContainer>
        {newsList.map((news, idx) => (
          <NewsCard key={idx} news={news} />
        ))}
      </NewsContainer>
    </Container>
  );
};

export default NewsList;

const Container = styled.div`
	/* •	justify-content: flex 컨테이너 안에서 자식 요소 가로 정렬
	•	margin: 0 auto: 블록 요소를 부모 안에서 가로 중앙 배치 */
  margin: 0 auto;        
  width: 60%; //이걸로 전체 크기 조정
`;

const NewsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;