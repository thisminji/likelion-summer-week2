// src/components/PostContent.jsx
import React from "react";
import styled from "styled-components";

export default function PostContent({ post }) {
    if (!post) return null;

    const { thumbnailUrl, content, title } = post;

    return (
        <Wrapper>
            {thumbnailUrl && <Thumbnail src={thumbnailUrl} alt={title} />}
            <Content>{content}</Content>
        </Wrapper>
    );
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 0 auto 40px;
  padding: 0 16px;
  box-sizing: border-box;
`;

const Thumbnail = styled.img`
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 24px;
`;

const Content = styled.div`
  line-height: 1.8;
  color: #333;
  white-space: pre-wrap; /* 개행 유지 */
  font-size: 1rem;

  /* 링크 스타일 */
  a {
    color: #0066cc;
    text-decoration: underline;
  }

  /* 강조(b, strong) 스타일 */
  b,
  strong {
    font-weight: bold;
  }

  /* 리스트, 코드블록 등 추가 스타일은 여기에 */
`;