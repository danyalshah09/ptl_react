import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Amenities from "./pages/Amenities";
import Gallery from "./pages/Gallery";
import Dine from "./pages/Dine";
import Contact from "./pages/Contact";
import Masterbed from "./pages/Masterbed";
import Triplebed from "./pages/Triplebed";
import Twinbed from "./pages/Twinbed";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Location from "./pages/Location";
import "./index.css";

const router = createBrowserRouter(
  [
    {
      element: <App />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/home", element: <Home /> },
        { path: "/rooms", element: <Rooms /> },
        { path: "/amenities", element: <Amenities /> },
        { path: "/gallery", element: <Gallery /> },
        { path: "/dine", element: <Dine /> },
        { path: "/contact", element: <Contact /> },
        { path: "/masterbed", element: <Masterbed /> },
        { path: "/twinbed", element: <Twinbed /> },
        { path: "/triplebed", element: <Triplebed /> },
        { path: "/cart", element: <Cart /> },
        { path: "/about", element: <About /> },
        { path: "/location", element: <Location /> },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);