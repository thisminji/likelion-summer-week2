import styled from "styled-components";

const NewsCard = ({ news }) => {
  return (
    <NewsItem>
      <NewsImage
        src={news.urlToImage || "/default.jpg"}
        alt={news.title || "뉴스 이미지"}
      />
      <NewsTitle>{news.title || "제목 없음"}</NewsTitle>
    </NewsItem>
  );
};

export default NewsCard;

const NewsItem = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  border-bottom: 1px solid #333;
  padding-bottom: 12px;
`;

const NewsImage = styled.img`
  width: 100px; //이미지 크기는 지정함
  height: 70px;
  object-fit: cover;
  border-radius: 8px;
`;

const NewsTitle = styled.h3`
  font-size: 16px;
  color: white;
  margin: 0;
`;