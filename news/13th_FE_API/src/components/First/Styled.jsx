import { styled } from "styled-components";

//GET
export const BtnWrapper = styled.div`
  display: flex;
  margin-top: 30px;
`;

export const BtnContainer = styled.div`
  padding: 20px;
  background-color: #eee;
  cursor: pointer;
  border: 1px solid #ccc;
  max-width: 200px;
  margin: 20px auto;
  border-radius: 5px;
  color: black;
  display: flex;
  align-items: center;
`;

export const GetWrapper = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

export const GetTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  color: black;
`;

export const GetBody = styled.p`
  font-size: 16px;
  color: #555;
`;

export const GetId = styled.div`
  color: black;
  font-size: 10px;
  margin-bottom: 10px;
`;

//POST
export const PostWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap:50px;
`;
export const PostResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 130px;

  gap:10px;
`;
export const PostInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  flex-direction: column;
  margin-top: 130px;
  margin-bottom: 50px;
`;

export const ContentInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  font-size: larger;

  input,
  textarea {
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    margin-left: 10px;
  }

  input {
    height: 36px; /* 예시: input의 높이 조정 */
  }
`;
