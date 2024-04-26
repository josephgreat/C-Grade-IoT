import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  Grid,
  GridItem,
  Text,
  Spinner,
  Button,
  Image,
  Flex,
  Spacer,
  Link,
  Divider,
} from "@chakra-ui/react";
import axios from "axios";
import {
  Footer,
  HeroSection,
  Intro,
  Navbar,
  Smartdoorbells,
  SmartThermostats,
} from "./components";
import "./App.css";
import {
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
      // element: <PageWrapper Component={SmartDoorBellsVul} />,
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
  ]);

  return <RouterProvider router={router} />;
};

export default App;
