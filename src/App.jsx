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
import { LandingPage, ProductDetail, Products } from "./pages";
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
      path: "/product_detail/:product_asin",
      element: <PageWrapper Component={ProductDetail} />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
