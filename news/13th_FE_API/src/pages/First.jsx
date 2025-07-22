import { styled } from "styled-components";
import { Link } from "react-router-dom";
import Title from "../components/common/Title";
import FirstAPI from "../components/First/FirstApiGetTest";

const NextStep = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  margin-top: 10px;
  cursor: pointer;
`;

const First = () => {
  return (
    <>
      <Title title={" 서버에서 받아오는 데이터를 확인해봅시다"} />
      <NextStep>
        <Link to="/first/postTest">NEXT STEP -</Link>
      </NextStep>
      <FirstAPI />
    </>
  );
};

export default First;
