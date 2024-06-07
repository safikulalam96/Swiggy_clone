import React from "react";
import "./App.css";
import Head from "./component/Head";
import Body from "./component/Body";
import About from "./component/About";
import Error from "./component/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./component/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <Error />,
  },
  {
    path: "/restaurant/:resId",
    element: <Menu />,
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <div>
      <Head />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
