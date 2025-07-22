import { ButtonWrapper, Btn } from "../components/Home/Styled";
import { useNavigate } from "react-router-dom";
import Title from "../components/common/Title";

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <>
      <Title title={"REACT API 실습 TIME"} />
      <ButtonWrapper>
        <Btn onClick={() => handleButtonClick("/first")}>1번 실습</Btn>
        <Btn onClick={() => handleButtonClick("/second")}>2번 실습</Btn>
        <Btn onClick={() => handleButtonClick("/third")}>3번 실습</Btn>
      </ButtonWrapper>
    </>
  );
};

export default Home;
