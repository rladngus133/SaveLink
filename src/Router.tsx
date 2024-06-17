import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import MyLink from "./pages/MyLink";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div style={{ display: "flex", gap: "10px" }}>
          <Link to="/mylink">마이링크</Link>
          <Link to="/mypage">마이페이지</Link>
          <Link to="/login">로그인</Link>
          <Link to="/register">회원가입</Link>
        </div>
      ),
    },
    {
      path: "/login",
      element: "login",
    },
    {
      path: "/register",
      element: "register",
    },
    {
      path: "/mylink",
      element: <MyLink />,
    },
    {
      path: "/mypage",
      element: "",
    },
  ]);

  return <RouterProvider router={router} />;
}
