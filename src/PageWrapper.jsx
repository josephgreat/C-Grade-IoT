import React, { createContext, useState } from "react";
import { Footer, Navbar } from "./components";
import { Box, Flex } from "@chakra-ui/react";

export const ErrorContext = createContext();
const PageWrapper = ({ Component }) => {
  const [error, setError] = useState("");

  return (
    <Flex flexDir="column" justifyContent={"space-between"} pos={"relative"}>
      <Navbar />
      <ErrorContext.Provider value={{ error: error, setError: setError }}>
        <Component />
      </ErrorContext.Provider>
      <Footer />
    </Flex>
  );
};

export default PageWrapper;
