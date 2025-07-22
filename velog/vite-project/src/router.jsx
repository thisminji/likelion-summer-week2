// src/Router.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import PostDetailPage from "./pages/PostDetailPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            // 메인 페이지
            { path: "/", element: <HomePage /> },
            // 게시글 상세 (GET /boards/{id})
            { path: "boards/:id", element: <PostDetailPage /> },
        ],
    },
]);

export default router;