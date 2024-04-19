import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";

const Error = ({ icon, message }) => {
  return (
    <Flex opacity={".8"} color={"red.500"} animation={"blink 1s linear infinite"} alignItems={"center"} gap="4" flexDir={"column"}>
      <Icon fontSize={"1.7rem"}>{icon}</Icon>
      <Text fontWeight={"bold"}>{message}</Text>
    </Flex>
  );
};

export default Error;
