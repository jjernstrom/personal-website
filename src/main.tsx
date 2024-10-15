import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home/Home.tsx";
import { Portfolio } from "./pages/Portfolio/Portfolio.tsx";
import { DevLog } from "./pages/index.ts";
import { Article } from "./pages/DevLog/Article.tsx";
import { articleLoader } from "./pages/DevLog/Articles/articleLoader.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "portfolio",
    element: <Portfolio />,
  },
  {
    path: "devlog",
    element: <DevLog />,
  },
  {
    // TODO: why is articleId not typed anywhere?
    // maybe string interp articleId from enum or type?
    path: "devlog/:articleId",
    element: <Article />,
    loader: articleLoader,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
