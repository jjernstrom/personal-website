import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home/Home.tsx";
import { Portfolio } from "./pages/Portfolio/Portfolio.tsx";
import { DevLog } from "./pages/index.ts";

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
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
