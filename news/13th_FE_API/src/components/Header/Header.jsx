import { Link } from "react-router-dom";
import DGULikeLion from "../../assets/images/DGU_LikeLion.png";

import { styled } from "styled-components";

const HeaderContainer = styled.div`
  max-width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.textColor};
  box-shadow: 0px 5px 10px 0px rgba(255, 255, 255, 0.75);
  -webkit-box-shadow: 0px 5px 10px 0px rgba(255, 255, 255, 0.75);
  -moz-box-shadow: 0px 5px 10px 0px rgba(255, 255, 255, 0.75);
`;

const LikeLionLogo = styled.img`
  width: 120px;
  height: auto;
  cursor: pointer;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <LikeLionLogo src={DGULikeLion} alt="LikeLion_Logo" />
      </Link>
    </HeaderContainer>
  );
};

export default Header;
