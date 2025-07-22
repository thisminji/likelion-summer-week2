// src/components/PostHeader.jsx
import React from "react";
import styled from "styled-components";

export default function PostHeader({
  post,
  isFollowing = false,
  onToggleFollow = () => {},
}) {
  if (!post) return null;

  const { title, writerName, createdAt } = post;

  return (
    <Wrapper>
      <Title>{title}</Title>

      <TopRow>
        <Meta>
          <span>{writerName}</span>
          <Dot>·</Dot>
          <span>{createdAt}</span>
        </Meta>
        <FollowBtn onClick={onToggleFollow}>
          {isFollowing ? "언팔로우" : "팔로우"}
        </FollowBtn>
      </TopRow>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  max-width: 800px;
  margin: 0 auto;
  padding: 32px 16px 24px;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin: 0 0 16px;
  color: #222;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Meta = styled.div`
  font-size: 0.9rem;
  color: #666;
  display: flex;
  align-items: center;

  span:first-child {
    color: #212529;
    font-weight: 600;
  }
`;

const Dot = styled.span`
  margin: 0 6px;
`;

const FollowBtn = styled.button`
  padding: 6px 14px;
  border: 1px solid #28a745;
  background: transparent;
  color: #28a745;
  border-radius: 999px;
  font-size: 0.9rem;
  cursor: pointer;

`;