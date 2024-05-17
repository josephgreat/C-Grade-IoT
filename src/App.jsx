import React from "react";

import "./App.css";
import {
  ContactUsPage,
  LandingPage,
  ProductDetail,
  Products,
  Vulnerability,
  VulnerabilityControl,
} from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageWrapper from "./PageWrapper";

const App = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <PageWrapper Component={LandingPage} />,
    },
    {
      path: "/products/:productName",
      element: <PageWrapper Component={Products} />,
    },
    {
      path: "/product_detail/:productName/:product_id",
      element: <PageWrapper Component={ProductDetail} />,
    },
    {
      path: "/vulnerability/:productName",
      element: <PageWrapper Component={Vulnerability} />,
    },
    {
      path: "/vulnerability_control/:productName",
      element: <PageWrapper Component={VulnerabilityControl} />,
    },
    {
      path: "/contact",
      element: <PageWrapper Component={ContactUsPage} />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
