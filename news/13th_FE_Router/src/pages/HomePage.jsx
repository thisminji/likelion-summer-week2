import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Link to="detail/1">1번 게시글</Link>
      <Link to="detail/2">2번 게시글</Link>
      <Link to="detail/3">3번 게시글</Link>
    </div>
  );
}

export default HomePage;
