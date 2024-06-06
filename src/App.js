import React from "react";
import "./App.css";
import Head from "./component/Head";
import Body from "./component/Body";
import About from "./component/About";
import Error from "./component/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
