import React from "react";
import { useParams } from "react-router-dom";

function PostDetailPage() {
    const postId = useParams().postId;
    return <div>{postId}번째 게시글 상세페이지</div>;
}

export default PostDetailPage;
