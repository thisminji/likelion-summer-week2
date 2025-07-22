import { styled } from "styled-components";

const TitleWrapper = styled.div`
  font-size: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  font-weight: bold;
`;

const Title = ({ title }) => {
  return (
    <>
      <TitleWrapper>{title}</TitleWrapper>
    </>
  );
};

export default Title;
