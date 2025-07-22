// src/components/Header.jsx
import React from "react";
import styled from "styled-components";
import velogLogo from "../assets/icons/velog.png";

function Header({ logoSrc, writerName }) {
  return (
    <HeaderContainer>

      {/* Header 컴포넌트를 재사용하기 위해서 수정함  */}
      {/* 로고 이미지가 있으면 로고이미지 없으면 velog */}
      <Logo>
        {logoSrc
          ? <LogoImg src={logoSrc} alt="logo" />
          : <LogoText>velog</LogoText>
        }
        {/* writerName prop이 전달된 경우에만 이름을 렌더링 */}
        {writerName && <WriterName>{writerName}</WriterName>}
      </Logo>

      <RightGroup>
        <IconWrapper>
          <IconImg src="/src/assets/icons/notifications.svg" alt="알림" />
          <IconImg src="/src/assets/icons/search.svg" alt="검색" />
        </IconWrapper>
        <LoginButton>로그인</LoginButton>
      </RightGroup>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px 0;
  box-sizing: border-box;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const LogoText = styled.span`
  font-family: 'Pretendard','Noto Sans KR',sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: #212529;
  letter-spacing: -0.5px;
`;

const LogoImg = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
`;

const WriterName = styled.span`
  font-family: 'Pretendard','Noto Sans KR',sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: #212529;
  letter-spacing: -0.5px;
`;

const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const IconImg = styled.img`
  cursor: pointer;
`;

const LoginButton = styled.button`
  padding: 6px 14px;
  background-color: #212529;
  color: white;
  border-radius: 20px;
  border: none;
  font-weight: bold;
  cursor: pointer;
`;