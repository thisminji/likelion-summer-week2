// src/components/Card.jsx
import React from "react";
import styled from "styled-components";
import favoriteIcon from "../assets/icons/favorite.svg";

function Card({ item }) {
  return (
    <CardWrapper>
      <Thumbnail $src={item.thumbnailUrl} />

      <CardContent>
        <Title>{item.title}</Title>
        <Description>{item.content}</Description>

        <Footer>
          <MetaInfo>
            {item.createdAt} · {item.commentCount}개의 댓글
          </MetaInfo>

          <AuthorSection>
            <AuthorInfo>
              <ProfileImg src={item.writerProfileUrl} alt={item.writerName} />
              <AuthorName>
                <ByText>by </ByText>
                {item.writerName}
              </AuthorName>
            </AuthorInfo>
            <LikeCount>
              <Icon src={favoriteIcon} alt="like" />
              {item.heartCount}
            </LikeCount>
          </AuthorSection>
        </Footer>
      </CardContent>
    </CardWrapper>
  );
}

export default Card;

const CardWrapper = styled.div`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);

  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Thumbnail = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  background: #f1f3f5 url(${(p) => p.$src}) center/cover no-repeat;
`;

const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 8px;
`;

const Title = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #212529;
  margin: 0;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #495057;
  line-height: 1.4;
  margin: 0;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;

const Footer = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const MetaInfo = styled.div`
  font-size: 0.75rem;
  color: #868e96;
`;

const AuthorSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ProfileImg = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorName = styled.span`
  font-size: 0.85rem;
  color: #343a40;
`;

const ByText = styled.span`
  color: #868e96;
`;

const LikeCount = styled.div`
  font-size: 0.9rem;
  color: #212529;
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 6px;
  vertical-align: middle;
`;