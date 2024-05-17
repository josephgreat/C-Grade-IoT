import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Steps = ({ step, index }) => {
  let { step_title, description, bg } = step;
  return (
    <Box
      w={{ base: "100%", md: "40%" }}
      bg={`url("${bg}") center no-repeat`}
      bgSize={"cover"}
      pos="relative"
      color="white"
      rounded="2rem"
      p="6"
      pt="8"
    >
      <Box
        pos="absolute"
        top="-1rem"
        left={"2rem"}
        zIndex={2}
        color="primary"
        bg="white"
        shadow={"inset 0 0 5px rgba(100,100,100,.3)"}
        fontWeight="semibold"
        rounded={"full"}
        p="1"
        px="2"
      >
        #{index + 1}
      </Box>
      <Box pos={"absolute"} bg="rgba(10,10,10,.7)" inset="0" rounded={"2rem"} />
      <Box pos="relative">
        <Heading as="h5" fontSize={"1.2rem"}>
          {step_title}
        </Heading>
        <Text mb="0" opacity={".7"} fontWeight={"semibold"}>{description}</Text>
      </Box>
    </Box>
  );
};

export default Steps;
