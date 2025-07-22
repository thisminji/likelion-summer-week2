// src/pages/PostDetailPage.jsx
//response에 태그 관련 정보는 없어서 그 부분은 제외하고 구현했습니다. 
// src/pages/PostDetailPage.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import Header from "../components/Header";
import PostHeader from "../components/PostHeader";
import PostContent from "../components/PostContent";
import PostActionSidebar from "../components/PostActionSidebar";
import velogLogo from "../assets/icons/velog.png";

function PostDetailPage() {
  const { id } = useParams();
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [following, setFollowing] = useState(false);

  useEffect(() => {
    const BASE = import.meta.env.VITE_API_BASE_URL;

    const fetchData = async () => {
      try {
        const res = await axios.get(`${BASE}/boards/${id}`);
        console.log("게시글 응답:", res.data);
        setPostData(res.data);
      } catch (err) {
        console.error("게시글 불러오기 실패:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  // postData가 null인 상태에서 아래 JSX가 실행되지 않도록 막아줌
  //Header에서 postData.writerName을 사용함
  if (loading) return <Message>로딩 중…</Message>;
  if (error) return <Message>에러: {error.message}</Message>;

  return (
    <Container>
      <Header 
        logoSrc={velogLogo} 
        writerName={postData.writerName} 
      />

      <PostHeader
        post={postData}
        isFollowing={following}
        onToggleFollow={() => setFollowing((f) => !f)}
      />

      <PostActionSidebar
        favorites={postData.heartCount}
        onFavorite={() => console.log("좋아요 클릭함")}
        onShare={() => console.log("공유 클릭함")}
      />

      <PostContent post={postData} />
    </Container>
  );
}

export default PostDetailPage;

const Message = styled.div`
  padding: 40px;
  text-align: center;
  color: #666;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  box-sizing: border-box;
`;