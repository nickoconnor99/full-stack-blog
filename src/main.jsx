import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostListPage from "./routes/PostListPage.jsx";
import LoginPage from "./routes/LoginPage.jsx";
import RegisterPage from "./routes/RegisterPage.jsx";
import Write from "./routes/Write.jsx";
import Home from "./routes/Home.jsx";
import SinglePostPage from "./routes/SinglePostPage.jsx";
import MainLayout from "./routes/layout/MainLayout.jsx";

const router = createBrowserRouter([
  {
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/posts",
        element: <PostListPage></PostListPage>,
      },
      {
        path: "/:slug",
        element: <SinglePostPage></SinglePostPage>,
      },
      {
        path: "/write",
        element: <Write></Write>,
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
