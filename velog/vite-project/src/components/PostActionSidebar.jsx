// src/components/PostActionSidebar.jsx
import React from "react";
import styled from "styled-components";
import favoriteIcon from "../assets/icons/favorite.svg";
import shareIcon from "../assets/icons/share.svg";

export default function PostActionSidebar({
  favorites,
  onFavorite,
  onShare,
}) {
  return (
    <Wrapper>
      <CircleButton onClick={onFavorite}>
        <Icon src={favoriteIcon} alt="좋아요" />
      </CircleButton>

      <Count>{favorites}</Count>

      <CircleButton onClick={onShare}>
        <Icon src={shareIcon} alt="공유" />
      </CircleButton>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  /* PistActionSidebar 위치 고정 */
position: fixed;
  top: 270px;
  left: 250px;
  transform: none;

  /* pill 모양 배경 */
  background: #f8f9fa;
  border-radius: 999px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  padding-top: 8px;
  padding-right: 8px;
  padding-bottom: 8px;
  padding-left: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const CircleButton = styled.button`
  /* 원형 버튼 */
  background: #ffffff;
  border: none;
  border-radius: 50%;
  padding-top: 8px;
    padding-right: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  svg, img {
    width: 24px;
    height: 24px;
    filter: brightness(0) saturate(100%) opacity(0.6);

  }
`;

const Icon = styled.img`
color:#f8f9fa`;

const Count = styled.span`
  font-size: 0.9rem;
  color: #212529;
`;