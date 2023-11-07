
import Home from "../Pages/Home/Home";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Login from "../Pages/Login/Login";


import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);



export default function RoutersAPP() {
  return (
    <div>
      <Router>
        
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Home />} />
      
      </Router>
    </div>
  );
}
