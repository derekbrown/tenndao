import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home";
import BlockParty from "./blockparty";

const router = createBrowserRouter([
  { path: "/blockparty", element: <BlockParty/> },
  { path: "/", element: <Home/> },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
