import { styled } from "styled-components";

export const ButtonWrapper = styled.div`
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  gap: 100px;
  align-items: center;
`;

export const Btn = styled.div`
  width: 150px;
  height: 150px;
  background-color: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 20px;
`;
