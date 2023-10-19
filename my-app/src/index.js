import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Form from "./Form";
import Collection from "./Collection";
import Root from "./Components/Root";

// URL to send to home and form for GET request and POST request
const URL = "http://localhost:3000/god-of-war-games";

//display Home as our initial page
const router = createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
    children: [
      {
        path: "/",
        element: <Home URL={URL} />,
      },
      {
        path: "form",
        element: <Form URL={URL} />,
      },
      {
        path: "collection",
        element: <Collection URL={URL} />,
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
