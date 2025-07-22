import { useState } from "react";
import axios from "axios";
import { BtnContainer, PostWrapper, PostResultWrapper,ContentInput, PostInputWrapper } from "./Styled";
import Title from "../common/Title";

const FirstApiPostTest = () => {
  const [newPost, setNewPost] = useState({
    userId: "1",
    title: "",
    body: "",
  });
  const [postResponse, setPostResponse] = useState(null);

  const postData = async () => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        newPost
      );
      console.log(response);
      setPostResponse(response.data);
    } catch (error) {
      console.error("에러 내용:", error);
    }
  };

  return (
    <>
      <Title title={"새 게시글 작성"} />
      <PostWrapper>
      <PostInputWrapper>
        <ContentInput>
          제목:
          <textarea
            type="text"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          />
        </ContentInput>
        <ContentInput>
          내용:
          <textarea
            value={newPost.body}
            onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
          />
        </ContentInput>
      </PostInputWrapper>

      {postResponse && !postResponse.error && (
        <PostResultWrapper >
          <h2>✨ 게시글 작성 성공! (응답 데이터)</h2>
          <div>ID:{postResponse.id}</div>
          <div>제목: {postResponse.title}</div>
          <div>내용:{postResponse.body}</div>
          <div>사용자 ID: {postResponse.userId}</div>
        </PostResultWrapper>
      )}

      </PostWrapper>
      <BtnContainer onClick={postData}>데이터 POST해보기</BtnContainer>

    </>
  );
};

export default FirstApiPostTest;
