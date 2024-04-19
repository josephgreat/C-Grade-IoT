import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Conclusion = () => {
  return (
    <Box
      textAlign={"center"}
      py="16"
      maxW={{ base: "90vw", sm: "85vw", md: "80vw", lg: "75vw" }}
      mx="auto"
    >
      <Heading as="h3" fontSize={"1.7rem"}>
        Join Us on the Journey
      </Heading>
      <Text mt="8">
        At ConsumerGrade IoT, we're committed to exploring the possibilities and
        challenges presented by consumer-grade IoT devices. Through insightful
        analysis, practical tips, and expert guidance, we aim to empower
        consumers to make informed decisions and navigate the ever-evolving
        landscape of smart home technology safely.
      </Text>
      <Text mt="4">
        Join us as we embark on this journey of discovery, innovation, and
        security in the world of consumer-grade IoT.
      </Text>
    </Box>
  );
};

export default Conclusion;
