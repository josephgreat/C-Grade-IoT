import React from "react";
import { Footer, Navbar } from "./components";
import { Box, Flex } from "@chakra-ui/react";

const PageWrapper = ({ Component }) => {
  return (
    <Flex flexDir="column" justifyContent={"space-between"} pos={"relative"}>
      <Navbar />
      <Component />
      <Footer />
    </Flex>
  );
};

export default PageWrapper;
