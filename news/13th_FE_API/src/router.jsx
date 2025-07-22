// Router.jsx

import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import First from "./pages/First";
import FirstApiPostTest from "./components/First/FirstApiPostTest";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import NewsList from "./components/Third/NewsList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // 메인페이지
      { path: "/", element: <Home /> },

      // 첫 번째 실습
      { path: "/first", element: <First /> },
      { path: "/first/postTest", element: <FirstApiPostTest /> },

      //두 번째 실습
      { path: "/second", element: <SecondPage /> },

      //세 번째 실습
      { path: "/third", element: <ThirdPage /> },
      { path: "/third/news", element: <NewsList /> },
    ],
  },
]);

export default router;
