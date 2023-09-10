import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { ThemeProvider } from "@material-tailwind/react";
import { MaterialTailwindControllerProvider } from "@/context";
import "../public/css/tailwind.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  redirect,
} from "react-router-dom";
import { Admin, Auth, Siswa, Guru } from "@/layouts";
import ErrorPage from "./pages/error-page";

// React-Router
const router = createBrowserRouter([
  {
    path: "/auth/*",
    element: <Auth />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/siswa/*",
    element: <Siswa />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/guru/*",
    element: <Guru />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/*",
    element: <Admin />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <MaterialTailwindControllerProvider>
      {/* <App /> */}
      <RouterProvider router={router} />
    </MaterialTailwindControllerProvider>
  </ThemeProvider>
);
